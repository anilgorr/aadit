/**
 * Renders one or more JSON-LD structured-data blocks. Pass a single schema
 * object or an array; each is emitted as its own <script> tag.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const blocks = Array.isArray(data) ? data : [data]
  return (
    <>
      {blocks.map((block, i) => {
        const schema = block as { "@id"?: string; "@type"?: string | string[] }
        const type = Array.isArray(schema["@type"]) ? schema["@type"].join("-") : schema["@type"]
        const key = schema["@id"] ?? type ?? `schema-${i}`
        return (
        <script
          key={`json-ld-${key}-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
        )
      })}
    </>
  )
}

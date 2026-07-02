import * as runtime from "react/jsx-runtime"
import type { ComponentType } from "react"

type MDXComponents = Record<string, ComponentType<Record<string, unknown>>>

function getMDXComponent(code: string): ComponentType<{ components?: MDXComponents }> {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

export function MDXContent({
  code,
  components,
}: {
  code: string
  components?: MDXComponents
}) {
  const Component = getMDXComponent(code)
  return <Component components={components} />
}

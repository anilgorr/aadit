module.exports = [
"[project]/artifacts/aadit-tech/app/[hub]/[slug]/opengraph-image.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "contentType",
    ()=>contentType,
    "default",
    ()=>ServiceOpengraphImage,
    "generateStaticParams",
    ()=>generateStaticParams,
    "size",
    ()=>size
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$lib$2f$og$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/artifacts/aadit-tech/lib/og.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$lib$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/artifacts/aadit-tech/lib/services.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f2e$velite$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/artifacts/aadit-tech/.velite/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f2e$velite$2f$services$2e$json__$28$json$29$__$3c$export__default__as__services$3e$__ = __turbopack_context__.i("[project]/artifacts/aadit-tech/.velite/services.json (json) <export default as services>");
;
;
;
const size = __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$lib$2f$og$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OG_SIZE"];
const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$lib$2f$og$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OG_CONTENT_TYPE"];
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f2e$velite$2f$services$2e$json__$28$json$29$__$3c$export__default__as__services$3e$__["services"].map((service)=>({
            hub: service.hub,
            slug: service.slug
        }));
}
async function ServiceOpengraphImage({ params }) {
    const { hub, slug } = await params;
    const service = (0, __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$lib$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getService"])(hub, slug);
    if (!service) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$lib$2f$og$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderOgImage"])({
            eyebrow: "Aadit Technologies",
            title: "Cybersecurity, Compliance & IT"
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$lib$2f$og$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderOgImage"])({
        eyebrow: __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$lib$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HUBS"][service.hub].title,
        title: service.heading ?? service.title
    });
}
}),
"[project]/artifacts/aadit-tech/app/[hub]/[slug]/opengraph-image--metadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$app$2f5b$hub$5d2f5b$slug$5d2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/artifacts/aadit-tech/app/[hub]/[slug]/opengraph-image.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$19_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.19_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript)");
;
;
const imageModule = {
    contentType: __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$app$2f5b$hub$5d2f5b$slug$5d2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["contentType"],
    generateStaticParams: __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$app$2f5b$hub$5d2f5b$slug$5d2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateStaticParams"],
    size: __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$app$2f5b$hub$5d2f5b$slug$5d2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["size"]
};
async function __TURBOPACK__default__export__(props) {
    const { __metadata_id__: _, ...params } = await props.params;
    const imageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$19_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fillMetadataSegment"])("/[hub]/[slug]", params, "opengraph-image");
    const { generateImageMetadata } = imageModule;
    function getImageMetadata(imageMetadata, idParam) {
        const data = {
            alt: imageMetadata.alt,
            type: imageMetadata.contentType || 'image/png',
            url: imageUrl + (idParam ? '/' + idParam : '') + "?85f2a9b3e090c2d4"
        };
        const { size } = imageMetadata;
        if (size) {
            data.width = size.width;
            data.height = size.height;
        }
        return data;
    }
    if (generateImageMetadata) {
        const imageMetadataArray = await generateImageMetadata({
            params
        });
        return imageMetadataArray.map((imageMetadata, index)=>{
            const idParam = (imageMetadata.id || index) + '';
            return getImageMetadata(imageMetadata, idParam);
        });
    } else {
        return [
            getImageMetadata(imageModule, '')
        ];
    }
}
}),
];

//# sourceMappingURL=artifacts_aadit-tech_app_%5Bhub%5D_%5Bslug%5D_3821fdb0._.js.map
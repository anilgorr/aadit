module.exports = [
"[project]/artifacts/aadit-tech/lib/site.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Central site configuration. Single source of truth for the canonical domain,
 * organization identity, and social profiles used across metadata and JSON-LD.
 *
 * The canonical production domain is the apex `aadit.net` (per the SEO/redirect
 * plan). Override in any environment with NEXT_PUBLIC_SITE_URL.
 */ __turbopack_context__.s([
    "LEGAL_NAME",
    ()=>LEGAL_NAME,
    "ORG_LOGO_PATH",
    ()=>ORG_LOGO_PATH,
    "SITE_COUNTRY",
    ()=>SITE_COUNTRY,
    "SITE_DESCRIPTION",
    ()=>SITE_DESCRIPTION,
    "SITE_LOCALITY",
    ()=>SITE_LOCALITY,
    "SITE_NAME",
    ()=>SITE_NAME,
    "SITE_REGION",
    ()=>SITE_REGION,
    "SITE_URL",
    ()=>SITE_URL,
    "SOCIAL_PROFILES",
    ()=>SOCIAL_PROFILES,
    "absoluteUrl",
    ()=>absoluteUrl
]);
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://aadit.net").replace(/\/+$/, "");
const SITE_NAME = "Aadit Technologies";
const SITE_DESCRIPTION = "Cybersecurity, compliance, and IT managed services for startups through enterprise clients across healthcare, BFSI, fintech, and SaaS.";
const LEGAL_NAME = "Aadit Technologies Pvt. Ltd.";
const SITE_LOCALITY = "Bengaluru";
const SITE_REGION = "Karnataka";
const SITE_COUNTRY = "IN";
const ORG_LOGO_PATH = "/logo.png";
/**
 * Social profile URLs for Organization `sameAs`. The LinkedIn URL is confirmed.
 * Additional profiles can be appended via NEXT_PUBLIC_SOCIAL_PROFILES
 * (comma-separated) without a code change.
 */ const EXTRA_PROFILES = (process.env.NEXT_PUBLIC_SOCIAL_PROFILES ?? "").split(",").map((s)=>s.trim()).filter(Boolean);
const SOCIAL_PROFILES = [
    "https://www.linkedin.com/company/aadit-technologies/",
    ...EXTRA_PROFILES
];
function absoluteUrl(path = "/") {
    if (/^https?:\/\//i.test(path)) return path;
    return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
}),
"[project]/artifacts/aadit-tech/lib/og.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OG_CONTENT_TYPE",
    ()=>OG_CONTENT_TYPE,
    "OG_SIZE",
    ()=>OG_SIZE,
    "renderOgImage",
    ()=>renderOgImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$19_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.19_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$19_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$og$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.19_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/og.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/artifacts/aadit-tech/lib/site.ts [app-rsc] (ecmascript)");
;
;
;
const OG_SIZE = {
    width: 1200,
    height: 630
};
const OG_CONTENT_TYPE = "image/png";
function renderOgImage({ title, eyebrow }) {
    const displayTitle = title.length > 78 ? `${title.slice(0, 77).replace(/\s+\S*$/, "")}…` : title;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$19_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$og$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ImageResponse"](/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$19_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            background: "linear-gradient(135deg, #0b1220 0%, #111c33 100%)",
            padding: "72px",
            fontFamily: "sans-serif"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$19_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "16px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$19_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: "36px",
                            height: "36px",
                            borderRadius: "8px",
                            background: "linear-gradient(135deg, #38c9e6 0%, #3b6bef 100%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/artifacts/aadit-tech/lib/og.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$19_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: "#e6edf7",
                            fontSize: "30px",
                            fontWeight: 700,
                            letterSpacing: "0.04em"
                        },
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_NAME"]
                    }, void 0, false, {
                        fileName: "[project]/artifacts/aadit-tech/lib/og.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/artifacts/aadit-tech/lib/og.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$19_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px"
                },
                children: [
                    eyebrow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$19_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: "#38c9e6",
                            fontSize: "26px",
                            fontWeight: 600,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase"
                        },
                        children: eyebrow
                    }, void 0, false, {
                        fileName: "[project]/artifacts/aadit-tech/lib/og.tsx",
                        lineNumber: 62,
                        columnNumber: 13
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$19_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: "#ffffff",
                            fontSize: displayTitle.length > 48 ? "58px" : "72px",
                            fontWeight: 800,
                            lineHeight: 1.05,
                            maxWidth: "980px"
                        },
                        children: displayTitle
                    }, void 0, false, {
                        fileName: "[project]/artifacts/aadit-tech/lib/og.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/artifacts/aadit-tech/lib/og.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$19_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    color: "#9fb3cc",
                    fontSize: "24px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$19_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: "10px",
                            height: "10px",
                            borderRadius: "9999px",
                            background: "#38c9e6"
                        }
                    }, void 0, false, {
                        fileName: "[project]/artifacts/aadit-tech/lib/og.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this),
                    "Cybersecurity · Compliance · IT Managed Services"
                ]
            }, void 0, true, {
                fileName: "[project]/artifacts/aadit-tech/lib/og.tsx",
                lineNumber: 87,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/artifacts/aadit-tech/lib/og.tsx",
        lineNumber: 26,
        columnNumber: 7
    }, this), {
        ...OG_SIZE
    });
}
}),
"[project]/artifacts/aadit-tech/app/twitter-image.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alt",
    ()=>alt,
    "contentType",
    ()=>contentType,
    "default",
    ()=>TwitterImage,
    "size",
    ()=>size
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$lib$2f$og$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/artifacts/aadit-tech/lib/og.tsx [app-rsc] (ecmascript)");
;
const alt = "Aadit Technologies — Cybersecurity, Compliance & IT Managed Services";
const size = __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$lib$2f$og$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OG_SIZE"];
const contentType = __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$lib$2f$og$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OG_CONTENT_TYPE"];
function TwitterImage() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$lib$2f$og$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderOgImage"])({
        eyebrow: "Security · Compliance · IT",
        title: "Cybersecurity, Compliance & IT Managed Services"
    });
}
}),
"[project]/artifacts/aadit-tech/app/twitter-image--metadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$app$2f$twitter$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/artifacts/aadit-tech/app/twitter-image.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$19_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.19_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript)");
;
;
const imageModule = {
    alt: __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$app$2f$twitter$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["alt"],
    contentType: __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$app$2f$twitter$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["contentType"],
    size: __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$app$2f$twitter$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["size"]
};
async function __TURBOPACK__default__export__(props) {
    const { __metadata_id__: _, ...params } = await props.params;
    const imageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$19_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fillMetadataSegment"])("/", params, "twitter-image");
    const { generateImageMetadata } = imageModule;
    function getImageMetadata(imageMetadata, idParam) {
        const data = {
            alt: imageMetadata.alt,
            type: imageMetadata.contentType || 'image/png',
            url: imageUrl + (idParam ? '/' + idParam : '') + "?98ed9112099917bf"
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
"[project]/node_modules/.pnpm/next@15.5.19_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.19_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.19_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/og/image-response.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ImageResponse", {
    enumerable: true,
    get: function() {
        return ImageResponse;
    }
});
function importModule() {
    return __turbopack_context__.A("[externals]/next/dist/compiled/@vercel/og/index.node.js [external] (next/dist/compiled/@vercel/og/index.node.js, esm_import, async loader)");
}
class ImageResponse extends Response {
    static #_ = this.displayName = 'ImageResponse';
    constructor(...args){
        const readable = new ReadableStream({
            async start (controller) {
                const OGImageResponse = // as the auto resolving is not working
                (await importModule()).ImageResponse;
                const imageResponse = new OGImageResponse(...args);
                if (!imageResponse.body) {
                    return controller.close();
                }
                const reader = imageResponse.body.getReader();
                while(true){
                    const { done, value } = await reader.read();
                    if (done) {
                        return controller.close();
                    }
                    controller.enqueue(value);
                }
            }
        });
        const options = args[1] || {};
        const headers = new Headers({
            'content-type': 'image/png',
            'cache-control': ("TURBOPACK compile-time truthy", 1) ? 'no-cache, no-store' : "TURBOPACK unreachable"
        });
        if (options.headers) {
            const newHeaders = new Headers(options.headers);
            newHeaders.forEach((value, key)=>headers.set(key, value));
        }
        super(readable, {
            headers,
            status: options.status,
            statusText: options.statusText
        });
    }
} //# sourceMappingURL=image-response.js.map
}),
"[project]/node_modules/.pnpm/next@15.5.19_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/og.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.5.19_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/og/image-response.js [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_4e9ca056._.js.map
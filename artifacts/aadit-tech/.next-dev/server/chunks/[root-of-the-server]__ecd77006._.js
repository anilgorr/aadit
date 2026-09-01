module.exports = [
"[project]/artifacts/aadit-tech/.next-internal/server/app/robots.txt/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/artifacts/aadit-tech/lib/site.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/artifacts/aadit-tech/app/robots.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>robots
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$lib$2f$site$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/artifacts/aadit-tech/lib/site.ts [app-route] (ecmascript)");
;
function robots() {
    const aiAndSearchBots = [
        "GPTBot",
        "ChatGPT-User",
        "OAI-SearchBot",
        "PerplexityBot",
        "Perplexity-User",
        "ClaudeBot",
        "Claude-SearchBot",
        "anthropic-ai",
        "Claude-Web",
        "Google-Extended",
        "Googlebot",
        "Bingbot",
        "Applebot",
        "Applebot-Extended",
        "CCBot",
        "Bingbot-Extended",
        "meta-externalagent",
        "Amazonbot"
    ];
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: [
                    "/api/",
                    "/*?utm_*"
                ]
            },
            ...aiAndSearchBots.map((userAgent)=>({
                    userAgent,
                    allow: "/"
                }))
        ],
        sitemap: `${__TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$lib$2f$site$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SITE_URL"]}/sitemap.xml`,
        host: __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$lib$2f$site$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SITE_URL"]
    };
}
}),
"[project]/artifacts/aadit-tech/app/robots--route-entry.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$19_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.19_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$app$2f$robots$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/artifacts/aadit-tech/app/robots.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$19_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$metadata$2f$resolve$2d$route$2d$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.19_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/metadata/resolve-route-data.js [app-route] (ecmascript)");
;
;
;
const contentType = "text/plain";
const cacheControl = "public, max-age=0, must-revalidate";
const fileType = "robots";
if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$app$2f$robots$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"] !== 'function') {
    throw new Error('Default export is missing in "./robots.ts"');
}
async function GET() {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$app$2f$robots$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
    const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$19_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$metadata$2f$resolve$2d$route$2d$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveRouteData"])(data, fileType);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$19_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](content, {
        headers: {
            'Content-Type': contentType,
            'Cache-Control': cacheControl
        }
    });
}
;
}),
"[project]/artifacts/aadit-tech/app/robots--route-entry.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$app$2f$robots$2d2d$route$2d$entry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GET"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$app$2f$robots$2d2d$route$2d$entry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/artifacts/aadit-tech/app/robots--route-entry.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$app$2f$robots$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/artifacts/aadit-tech/app/robots.ts [app-route] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ecd77006._.js.map
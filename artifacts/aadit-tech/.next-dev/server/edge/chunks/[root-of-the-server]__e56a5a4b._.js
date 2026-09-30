(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__e56a5a4b._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/artifacts/aadit-tech/redirects/legacy.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"source\":\"/securing-india-top-cyber-security-companies-in-bangalore\",\"destination\":\"/blog/cyber-security-companies-bangalore\",\"permanent\":true},{\"source\":\"/soc-2-compliance-services-india\",\"destination\":\"/compliance/soc2\",\"permanent\":true},{\"source\":\"/soc-2-compliance\",\"destination\":\"/compliance/soc2\",\"permanent\":true},{\"source\":\"/expert-it-managed-services-streamline-your-business-aadit-technologies\",\"destination\":\"/it-managed-services\",\"permanent\":true},{\"source\":\"/managed-services-in-india-empowering-business-growth\",\"destination\":\"/it-managed-services/managed-it-services\",\"permanent\":true}]"));}),
"[project]/artifacts/aadit-tech/next.config.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "routeRedirects",
    ()=>routeRedirects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$redirects$2f$legacy$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/artifacts/aadit-tech/redirects/legacy.json (json)");
;
const replitDevDomain = process.env.REPLIT_DEV_DOMAIN;
const nextConfig = {
    distDir: ("TURBOPACK compile-time truthy", 1) ? '.next-dev' : "TURBOPACK unreachable",
    skipTrailingSlashRedirect: true,
    pageExtensions: [
        'js',
        'jsx',
        'md',
        'mdx',
        'ts',
        'tsx'
    ],
    allowedDevOrigins: [
        '*.replit.dev',
        '*.repl.co',
        ...replitDevDomain ? [
            replitDevDomain
        ] : []
    ]
};
const routeRedirects = [
    // ─── Migration and legacy URL recovery ─────────────────────────────────
    ...__TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$redirects$2f$legacy$2e$json__$28$json$29$__["default"],
    {
        source: '/category/:slug*',
        destination: '/blog',
        permanent: true
    },
    {
        source: '/tag/:slug*',
        destination: '/blog',
        permanent: true
    },
    {
        source: '/author/:slug*',
        destination: '/about',
        permanent: true
    },
    {
        source: '/feed',
        destination: '/blog',
        permanent: true
    },
    // ─── Blog de-duplication 301s ──────────────────────────────────────────
    // Old aadit.net blog slugs exactly match new slugs (migration preserved
    // them), so no slug-level blog redirects are needed — only near-duplicate
    // cluster consolidations and one wrong-body post.
    //
    // VAPT cluster → canonical VAPT full-form post
    {
        source: '/blog/vapt-methodology-step-by-step-guide',
        destination: '/blog/vapt-full-form-comprehensive-vapt-testing-services-in-india-aadit-technologies',
        permanent: true
    },
    {
        source: '/blog/what-is-vapt-guide-2',
        destination: '/blog/vapt-full-form-comprehensive-vapt-testing-services-in-india-aadit-technologies',
        permanent: true
    },
    {
        source: '/blog/types-of-vapt-services-security-assessment-guide',
        destination: '/blog/vapt-full-form-comprehensive-vapt-testing-services-in-india-aadit-technologies',
        permanent: true
    },
    {
        source: '/blog/what-is-vapt-guide',
        destination: '/blog/vapt-full-form-comprehensive-vapt-testing-services-in-india-aadit-technologies',
        permanent: true
    },
    {
        source: '/blog/services-vapt-understanding-vapt',
        destination: '/blog/vapt-full-form-comprehensive-vapt-testing-services-in-india-aadit-technologies',
        permanent: true
    },
    {
        source: '/blog/vapt-in-cyber-security-protecting-your-digital-assets',
        destination: '/blog/vapt-full-form-comprehensive-vapt-testing-services-in-india-aadit-technologies',
        permanent: true
    },
    {
        source: '/blog/services-vapt-vapt-report',
        destination: '/blog/vapt-full-form-comprehensive-vapt-testing-services-in-india-aadit-technologies',
        permanent: true
    },
    {
        source: '/blog/services-vapt-network-vapt',
        destination: '/blog/vapt-full-form-comprehensive-vapt-testing-services-in-india-aadit-technologies',
        permanent: true
    },
    // Managed SOC cluster → canonical Managed SOC post
    {
        source: '/blog/understanding-the-digital-personal-data-protection-act-dpdp-act-in-india',
        destination: '/compliance/dpdp-act',
        permanent: true
    },
    {
        source: '/blog/managed-soc-services-managed-soc-for-banks',
        destination: '/blog/managed-soc-services-in-india',
        permanent: true
    },
    {
        source: '/blog/managed-soc-services-comprehensive-cybersecurity-with-managed-soc',
        destination: '/blog/managed-soc-services-in-india',
        permanent: true
    },
    {
        source: '/blog/managed-soc-services-managed-security-services-with-soc',
        destination: '/blog/managed-soc-services-in-india',
        permanent: true
    },
    // Sales-style article overlaps the managed-SOC service page. Preserve its
    // indexed URL with a direct 301; retain the informational guide and
    // provider comparison as separate intents.
    {
        source: '/blog/soc-services-in-india',
        destination: '/cybersecurity/managed-soc',
        permanent: true
    },
    // Cybersecurity companies duplicates
    {
        source: '/blog/cyber-security-companies-bangalore-experts',
        destination: '/blog/cyber-security-companies-bangalore',
        permanent: true
    },
    {
        source: '/blog/cybersecurity-companies-in-india-top-leaders',
        destination: '/blog/top-cyber-security-companies-in-india-safeguarding-digital-future',
        permanent: true
    },
    // SOC 2 duplicate
    {
        source: '/blog/soc-2-compliance-services-india-2',
        destination: '/blog/soc-2-compliance-services-india',
        permanent: true
    },
    // Cloud cost optimization duplicate
    {
        source: '/blog/cloud-optimization-strategies',
        destination: '/blog/cloud-cost-optimization-indian-businesses',
        permanent: true
    },
    // ISO 27001 consulting post had wrong body (generic managed-IT copy) → service page
    {
        source: '/blog/iso-27001-consulting-india',
        destination: '/compliance/iso-27001',
        permanent: true
    },
    // ─── Cybersecurity service pages ──────────────────────────────────────
    {
        source: '/cybersecurity-services-india',
        destination: '/cybersecurity',
        permanent: true
    },
    {
        source: '/vulnerability-assessment-penetration-testing-vapt-services',
        destination: '/cybersecurity/vapt',
        permanent: true
    },
    {
        source: '/managed-soc',
        destination: '/cybersecurity/managed-soc',
        permanent: true
    },
    {
        source: '/managed-soc-services',
        destination: '/cybersecurity/managed-soc',
        permanent: true
    },
    {
        source: '/security-as-a-service-india',
        destination: '/cybersecurity/managed-soc',
        permanent: true
    },
    {
        source: '/24x7-managed-soc-services',
        destination: '/cybersecurity/managed-soc',
        permanent: true
    },
    {
        source: '/landing-page-soc',
        destination: '/cybersecurity/managed-soc',
        permanent: true
    },
    {
        source: '/soc-as-a-service',
        destination: '/cybersecurity/soc-as-a-service',
        permanent: true
    },
    {
        source: '/endpoint-security-solutions',
        destination: '/cybersecurity/endpoint-security',
        permanent: true
    },
    {
        source: '/firewall-network-security-solutions',
        destination: '/cybersecurity/firewall-network-security',
        permanent: true
    },
    {
        source: '/email-security-solutions',
        destination: '/cybersecurity/email-security',
        permanent: true
    },
    {
        source: '/cyber-security-consulting-services',
        destination: '/cybersecurity/consulting',
        permanent: true
    },
    // ─── Compliance service pages ──────────────────────────────────────────
    {
        source: '/compliance-audit-services-india',
        destination: '/compliance',
        permanent: true
    },
    {
        source: '/iso-27001-certification-services',
        destination: '/compliance/iso-27001',
        permanent: true
    },
    {
        source: '/iso-27001-consulting-india',
        destination: '/compliance/iso-27001',
        permanent: true
    },
    {
        source: '/iso-42001-certification',
        destination: '/compliance/iso-42001',
        permanent: true
    },
    {
        source: '/iso-9001-certification',
        destination: '/compliance/iso-9001',
        permanent: true
    },
    {
        source: '/gdpr-compliance-solutions',
        destination: '/compliance/gdpr',
        permanent: true
    },
    {
        source: '/pci-dss-compliance-solutions',
        destination: '/compliance/pci-dss',
        permanent: true
    },
    {
        source: '/hipaa-compliance-solutions',
        destination: '/compliance/hipaa',
        permanent: true
    },
    {
        source: '/soc2-certification',
        destination: '/compliance/soc2',
        permanent: true
    },
    // ─── IT Managed Services pages ────────────────────────────────────────
    // Old site's /managed-it-services/ was a full-content page equivalent to
    // the new /it-managed-services/managed-it-services/ detail page.
    {
        source: '/managed-it-services-india',
        destination: '/it-managed-services/managed-it-services',
        permanent: true
    },
    {
        source: '/managed-it-services',
        destination: '/it-managed-services/managed-it-services',
        permanent: true
    },
    {
        source: '/it-support-services',
        destination: '/it-managed-services/helpdesk-support',
        permanent: true
    },
    {
        source: '/cloud-infrastructure-solutions',
        destination: '/it-managed-services/cloud-infrastructure',
        permanent: true
    },
    {
        source: '/cloud-migration-services',
        destination: '/it-managed-services/cloud-migration',
        permanent: true
    },
    {
        source: '/cloud-optimization-services',
        destination: '/it-managed-services/cloud-optimization',
        permanent: true
    },
    {
        source: '/backup-and-disaster-recovery-solutions',
        destination: '/it-managed-services/backup-disaster-recovery',
        permanent: true
    },
    // ─── Company / utility pages ──────────────────────────────────────────
    {
        source: '/about-us',
        destination: '/about',
        permanent: true
    },
    {
        source: '/contact-us',
        destination: '/contact',
        permanent: true
    },
    {
        source: '/thank-you',
        destination: '/contact',
        permanent: true
    },
    {
        source: '/whitepapers-cybersecurity-india',
        destination: '/whitepapers',
        permanent: true
    },
    // ─── Old ebook / whitepaper URL schemes ───────────────────────────────
    // aadit.net used /ebook/<slug>/ and /whitepaper/<slug>/ paths; new site
    // consolidates these into single hub pages.
    // The retired eBook route previously redirected back to itself. Keep this
    // one-hop redirect to the live resource hub for existing links.
    {
        source: '/ebook',
        destination: '/whitepapers',
        permanent: true
    },
    {
        source: '/ebook/:slug*',
        destination: '/whitepapers',
        permanent: true
    },
    {
        source: '/whitepaper/:slug*',
        destination: '/whitepapers',
        permanent: true
    },
    // ─── GSC Page Indexing 404 fixes ──────────────────────────────────────
    // Root-level slug identical to a blog post (missing /blog/ prefix —
    // this was a broken internal link on the old site itself).
    {
        source: '/vapt-full-form-comprehensive-vapt-testing-services-in-india-aadit-technologies',
        destination: '/blog/vapt-full-form-comprehensive-vapt-testing-services-in-india-aadit-technologies',
        permanent: true
    },
    // Old root-level service page URLs surfaced in GSC "Not found" report
    {
        source: '/managed-soc-services-managed-security-services-with-soc',
        destination: '/cybersecurity/managed-soc',
        permanent: true
    },
    {
        source: '/soc-services-in-india',
        destination: '/cybersecurity/managed-soc',
        permanent: true
    },
    {
        source: '/managed-it-service-providers-india',
        destination: '/it-managed-services/managed-it-services',
        permanent: true
    },
    {
        source: '/iso-42001-certification-consulting-in-india-aadit-technologies',
        destination: '/compliance/iso-42001',
        permanent: true
    }
];
const __TURBOPACK__default__export__ = nextConfig;
}),
"[project]/artifacts/aadit-tech/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$19_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.19_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$19_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.19_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$next$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/artifacts/aadit-tech/next.config.ts [middleware-edge] (ecmascript)");
;
;
const CANONICAL_ORIGIN = "https://aadit.net";
const RETIRED_SOC_HOSTS = new Set([
    "aaditsoc.in",
    "www.aaditsoc.in"
]);
const LEGACY_SITEMAP_PATHS = new Set([
    "/sitemap_index.xml",
    "/wp-sitemap.xml",
    "/post-sitemap.xml",
    "/blog/sitemap.xml",
    "/page-sitemap.xml"
]);
function middleware(request) {
    const forwardedHost = request.headers.get("x-forwarded-host")?.split(",")[0]?.trim();
    const forwardedProtocol = request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim().toLowerCase();
    const host = (forwardedHost ?? request.headers.get("host") ?? request.nextUrl.host).split(":")[0].toLowerCase();
    const protocol = forwardedProtocol ?? request.nextUrl.protocol.replace(":", "").toLowerCase();
    if (RETIRED_SOC_HOSTS.has(host)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$19_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(`${CANONICAL_ORIGIN}/compliance/soc2`, 301);
    }
    if (LEGACY_SITEMAP_PATHS.has(request.nextUrl.pathname)) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$19_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"](null, {
            status: 410,
            headers: {
                "Cache-Control": "public, max-age=3600",
                "Content-Type": "text/plain; charset=utf-8"
            }
        });
    }
    const pathname = request.nextUrl.pathname;
    const withoutSlash = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
    const legacy = __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$aadit$2d$tech$2f$next$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["routeRedirects"].find(({ source })=>source === withoutSlash || source.endsWith("/:slug*") && (withoutSlash === source.slice(0, -7) || withoutSlash.startsWith(source.slice(0, -7) + "/")));
    if (legacy) {
        const destination = new URL(legacy.destination, CANONICAL_ORIGIN);
        destination.search = request.nextUrl.search;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$19_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(destination, 301);
    }
    if (host === "www.aadit.net" || host === "aadit.net" && protocol !== "https") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$19_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(`${CANONICAL_ORIGIN}${withoutSlash}${request.nextUrl.search}`, 301);
    }
    if (withoutSlash !== pathname) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$19_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL(`${withoutSlash}${request.nextUrl.search}`, request.url), 301);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$19_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: "/:path*"
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__e56a5a4b._.js.map
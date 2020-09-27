const sitemap = require("nextjs-sitemap-generator");
import { getSiteMetaData } from "../utils/helpers";
const fs = require("fs");

const BUILD_ID = fs.readFileSync("./.next/BUILD_ID").toString();
(async function () {
    const { siteUrl } = getSiteMetaData();
    await Promise.resolve(sitemap({
        baseUrl: `${siteUrl}`,
        ignoredPaths: ['[slug]', 'api', 'github'],
        pagesDirectory: `.next/server/pages`,
        targetDirectory: "./.next/static/",
        sitemapFilename: 'sitemap.xml',
        extraPaths: ['/'],
        pagesConfig: {
            '/': {
                priority: '1',
                changefreq: 'weekly'
            },
            '/post': {
                priority: '0.5',
                changefreq: 'weekly'
            }
        },
    }));
    // → 🎉
}());
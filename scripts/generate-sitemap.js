/*
NOT USED
this could be used if we wanted to generate a sitemap
*/

const sitemap = require("nextjs-sitemap-generator");
const fs = require("fs");
const BUILD_ID = fs.readFileSync("./.next/BUILD_ID").toString();
(async function () {
    await Promise.resolve(sitemap({
        baseUrl: "https://www.investingsnippets.com",
        ignoredPaths: ['[slug]', 'api', 'github'],
        pagesDirectory: ".next/server/static/" + BUILD_ID + "/pages",
        targetDirectory: "./.next/static/",
        extraPaths: ['/'],
        pagesConfig: {
            '/': {
                priority: '1',
            },
            '/post': {
                priority: '0.5',
                changefreq: 'daily'
            }
        },
    }));
    // → 🎉
}());
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([optimizedImages], {
    webpack: (config, { isServer, dev }) => {
        config.node = {
          fs: "empty",
        }
    
        if (isServer && !dev) {
          const originalEntry = config.entry;
          config.entry = async () => {
            const entries = { ...(await originalEntry()) };
            // This script imports components from the Next app, so it's transpiled to `.next/server/scripts/generate-rss.js`
            entries['./scripts/generate-rss.js'] = './scripts/generate-rss.js';
            return entries;
          };
        }
    
        return config
    },
});

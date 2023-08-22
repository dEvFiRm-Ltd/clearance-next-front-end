/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
            })
        );
        return config;
    },
    images: {
        domains: [
            'localhost',
            '*/cloudfront.net',
            '**/cloudfront.net',
            'd2q8lslmdp9f7.cloudfront.net',
        ],
        unoptimized: true,
    },
};

module.exports = nextConfig;

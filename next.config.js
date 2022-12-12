/** @type {import('next').NextConfig} */

const nextConfig = {
    compress: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        });

        return config;
    },
    reactStrictMode: true,
    env: {
        PUBLIC_URL: 'acromed.pl'
    },
    compiler: {
        styledComponents: true
    }
};

module.exports = nextConfig;

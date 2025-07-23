const { NextPublicTsPlugin } = require('next-public-ts');
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, options) {
        config.plugins.push(
            new NextPublicTsPlugin({
                inputDir: path.join(__dirname, 'src', '+public'),
                outputDir: path.join(__dirname, 'public'),
            })
        );

        return config;
    },
};

module.exports = nextConfig;

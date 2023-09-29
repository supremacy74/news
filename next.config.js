/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        config.module.rules.push({
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        sassOptions: {
                            includePaths: [path.join(__dirname, 'src/shared/styles/')]
                        }
                    }
                }
            ]
        })

        return config
    }
}

module.exports = nextConfig

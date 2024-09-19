import path from 'path'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const nextConfig = {
    webpack(config) {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve('/'),
        }

        return config
    },

    sassOptions: {
        additionalData: `@import "@/shared/styles/colors.scss"; @import "@/shared/styles/sizes.scss"; @import "@/shared/styles/mixins.scss";`,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
}
export default withNextIntl(nextConfig)

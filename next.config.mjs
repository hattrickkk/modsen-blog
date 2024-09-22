import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import createNextIntlPlugin from 'next-intl/plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const withNextIntl = createNextIntlPlugin()

const nextConfig = {
    webpack(config) {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname, 'src'),
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

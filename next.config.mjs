import path from 'path'

export default {
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
}

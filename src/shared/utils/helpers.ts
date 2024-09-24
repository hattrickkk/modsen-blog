type Params = {
    pathname: string
    itemPath: string
    locale: string
}

export const isLinkActive = ({ pathname, itemPath, locale }: Params) =>
    pathname === `/${locale}${itemPath}` || (pathname == `/${locale}` && itemPath === '/')

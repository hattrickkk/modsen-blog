type Params = {
    itemsPerPage: number
    totalCount: number
}

export const getPagesCount = ({ itemsPerPage, totalCount }: Params) => {
    return Math.ceil(totalCount / itemsPerPage)
}

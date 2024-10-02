import '@testing-library/jest-dom/jest-globals'
import '@testing-library/jest-dom'

global.IntersectionObserver = class IntersectionObserver {
    root: Element | null = null
    rootMargin: string = '0px'
    thresholds: ReadonlyArray<number> = []

    constructor() {}

    observe() {}

    unobserve() {}

    disconnect() {}

    takeRecords(): IntersectionObserverEntry[] {
        return []
    }
}

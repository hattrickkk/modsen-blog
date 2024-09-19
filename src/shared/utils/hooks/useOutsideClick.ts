'use client'
import { MutableRefObject, useEffect } from 'react'

export const useOutsideClick = (ref: MutableRefObject<HTMLElement | null>, close: VoidFunction, className?: string) => {
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            const targetElement = e.target as HTMLElement
            if (e.target && ref.current && !ref.current.contains(targetElement)) {
                if (className) {
                    if (!targetElement.closest(`.${className}`)) close()
                } else {
                    close()
                }
            }
        }

        document.addEventListener('mousedown', handler)

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    }, [ref, close, className])
}

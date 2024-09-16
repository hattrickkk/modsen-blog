'use client'
import React, { useCallback } from 'react'
import { useRouter } from 'next/navigation'

import { Button } from '@/shared'

type Props = {
    pathName: string
    value?: string
}

export const NavigateButton = ({ pathName, value }: Props) => {
    const router = useRouter()

    const buttonClick = useCallback(() => {
        router.push(pathName)
    }, [router, pathName])
    return <Button onClick={buttonClick}>{value}</Button>
}

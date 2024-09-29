'use client'
import { useCallback } from 'react'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'

import { Button, commonStyles, sen } from '@/shared'

import styles from './styles.module.scss'

type Props = {
    name: string
    message: string
    reloadClickHandler: VoidFunction
}

export const Error = ({ name, message, reloadClickHandler }: Props) => {
    const router = useRouter()
    const handkeReloadPageButtonClick = useCallback(() => {
        router.push('/')
        reloadClickHandler()
    }, [reloadClickHandler, router])

    return (
        <div className={styles.wrapper}>
            <div className={styles.errorBoundary}>
                <div className={commonStyles.container}>
                    <div className={styles.wrapper}>
                        <h1 className={clsx(sen.className, styles.title)}>Oops, something went wrong</h1>
                        <p className={styles.text}>{`${name}: ${message}`}</p>
                        <Button onClick={handkeReloadPageButtonClick}>Click to reload page</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

import clsx from 'clsx'

import { sen } from '@/shared/fonts'

import styles from './styles.module.scss'

type Props = {
    value: string
    className?: string
}

export const Title = ({ value, className }: Props) => {
    return <h2 className={clsx(styles.title, sen.className, className)}>{value}</h2>
}

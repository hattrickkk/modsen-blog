import { ControllerRenderProps, FieldError, FieldValues, Path } from 'react-hook-form'
import { useTranslations } from 'next-intl'

import styles from './styles.module.scss'
type Props<T extends FieldValues> = {
    controllerProps: ControllerRenderProps<T, Path<T>>
    placeholder: string
    value?: string
    error?: FieldError
    name?: string
    maxLength?: number
}

export const InputWithError = <T extends FieldValues>({
    controllerProps,
    error,
    placeholder,
    name = '',
    maxLength = 50,
}: Props<T>) => {
    const t = useTranslations('messages')
    return (
        <div className={styles.wrapper}>
            <input {...controllerProps} name={name} placeholder={placeholder} maxLength={maxLength} />
            {error && <p className={styles.error}>{t(error.message)}</p>}
        </div>
    )
}

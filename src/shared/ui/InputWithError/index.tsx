import { ControllerRenderProps, FieldError, FieldValues, Path } from 'react-hook-form'

import styles from './styles.module.scss'
type Props<T extends FieldValues> = {
    controllerProps: ControllerRenderProps<T, Path<T>>
    placeholder: string
    value?: string
    error?: FieldError
    name?: string
}

export const InputWithError = <T extends FieldValues>({ controllerProps, error, placeholder, name = '' }: Props<T>) => {
    return (
        <div className={styles.wrapper}>
            <input {...controllerProps} name={name} placeholder={placeholder} />
            <p className={styles.error}>{error?.message}</p>
        </div>
    )
}

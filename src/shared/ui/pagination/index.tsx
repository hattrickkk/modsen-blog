import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import { AnimationTypes, sen } from '@/shared'

import { ScrollAnimation } from '../scrollAnimation'

import styles from './styles.module.scss'

type Props = {
    handlePrevArrowClick: VoidFunction
    handleNextArrowClick: VoidFunction
    nextDisableCondition: boolean
    prevDisableCondition: boolean
}

export const Pagination = ({
    handlePrevArrowClick,
    handleNextArrowClick,
    nextDisableCondition,
    prevDisableCondition,
}: Props) => {
    const t = useTranslations('arrows')
    return (
        <ScrollAnimation type={AnimationTypes.toRight}>
            <div className={styles.arrows}>
                <button
                    className={clsx(sen.className, styles.arrow, prevDisableCondition && styles.disable)}
                    onClick={handlePrevArrowClick}
                >
                    &lt; {t('prev')}
                </button>
                <button
                    className={clsx(sen.className, styles.arrow, nextDisableCondition && styles.disable)}
                    onClick={handleNextArrowClick}
                >
                    {t('next')} &gt;
                </button>
            </div>
        </ScrollAnimation>
    )
}

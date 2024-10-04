import { useTranslations } from 'next-intl'

import { AnimationTypes, ScrollAnimation } from '@/shared'

import styles from './styles.module.scss'

export const OurMission = () => {
    const t = useTranslations('ourVision.ourMission')
    return (
        <ScrollAnimation type={AnimationTypes.toLeft} delay={0.2}>
            <div className={styles.wrapper}>
                <ScrollAnimation type={AnimationTypes.toLeft}>
                    <div className={styles.info}>
                        <h4 className={styles.subtitle}> {t('subtitle1')} </h4>
                        <h3 className={styles.title}>{t('title1')}</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in
                            aliquam sem. At risus viverra adipiscing at in tellus.
                        </p>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation type={AnimationTypes.toLeft} delay={0.1}>
                    <div className={styles.info}>
                        <h4 className={styles.subtitle}> {t('subtitle2')} </h4>
                        <h3 className={styles.title}>{t('title2')}</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in
                            aliquam sem. At risus viverra adipiscing at in tellus.
                        </p>
                    </div>
                </ScrollAnimation>
            </div>
        </ScrollAnimation>
    )
}

import clsx from 'clsx'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Author } from '@/entities'
import { AnimationTypes, commonStyles, ScrollAnimation, sen, SOCIALS } from '@/shared'

import styles from './styles.module.scss'
type Props = {
    author: Author
}

export const AuthorInfo = ({ author }: Props) => {
    const t = useTranslations('author')
    const { image, name, description, socials } = author

    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div className={commonStyles.container}>
                    <div className={styles.wrapper}>
                        <ScrollAnimation type={AnimationTypes.toRight}>
                            <div className={styles.imageWrapper}>
                                <Image src={image} alt='author-photo' width={250} height={295} />
                            </div>
                        </ScrollAnimation>
                        <div className={styles.info}>
                            <ScrollAnimation type={AnimationTypes.toLeft} delay={0.1}>
                                <h1 className={clsx(sen.className, styles.title)}>
                                    {`${t('title1')} ${name} ${t('title2')}`}
                                </h1>
                            </ScrollAnimation>
                            <ScrollAnimation type={AnimationTypes.toLeft} delay={0.2}>
                                <p className={styles.text}>{description}</p>
                            </ScrollAnimation>
                            <ScrollAnimation type={AnimationTypes.toLeft} delay={0.3}>
                                <div className={styles.socials}>
                                    {socials &&
                                        SOCIALS.map(({ Icon }, i) => (
                                            <a href={socials[i]} key={i}>
                                                <Icon />
                                            </a>
                                        ))}
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollAnimation type={AnimationTypes.toLeft}>
                <div className={commonStyles.container}>
                    <div className={styles.decor}>
                        <div className={styles.yellow} />
                        <div className={styles.purple} />
                    </div>
                </div>
            </ScrollAnimation>
        </section>
    )
}

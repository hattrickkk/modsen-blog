import styles from './styles.module.scss'

type Props = {
    onClick: VoidFunction
}

export const NextArrow = ({ onClick }: Props) => {
    return (
        <div className={styles.arrow} onClick={onClick} data-testid='next-arrow'>
            <svg width='28' height='16' viewBox='0 0 28 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                    d='M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM27.7071 8.70711C28.0976 8.31658 28.0976 7.68342 27.7071 7.29289L21.3431 0.928932C20.9526 0.538408 20.3195 0.538408 19.9289 0.928932C19.5384 1.31946 19.5384 1.95262 19.9289 2.34315L25.5858 8L19.9289 13.6569C19.5384 14.0474 19.5384 14.6805 19.9289 15.0711C20.3195 15.4616 20.9526 15.4616 21.3431 15.0711L27.7071 8.70711ZM1 9H27V7H1V9Z'
                    fill='#F4F4F4'
                />
            </svg>
        </div>
    )
}

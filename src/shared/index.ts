import commonStyles from './styles/common.module.scss'
export { Button } from './ui/button'
export { Loader } from './ui/loader'
export { Title } from './ui/title'
export { CategoryCard } from './ui/categoryCard'
export { InputWithError } from './ui/InputWithError'
export { ScrollAnimation } from './ui/scrollAnimation'
export { HeroInfo } from './ui/heroInfo'
export { Pagination } from './ui/pagination'
export { inter, sen } from './fonts'
export { commonStyles }
export { Category } from './constants/categories'
export { MONTHS } from './constants/month'
export * as paths from './constants/paths'
export { SOCIALS } from './constants/socials'
export { MENU_ITEMS } from './constants/menuItems'
export { NOTIFY_OPTIONS } from './constants/notifyOptions'
export { AnimationTypes } from './constants/animationTypes'
export {
    POSTS_PER_PAGE,
    API_URL,
    NEXT_ARROW,
    PREV_ARROW,
    DEFAULT_PAGE,
    AUTHORS_PER_PAGE_ABOUT,
    AUTHORS_PER_PAGE_HOME,
    POSTS_PER_PAGE_SECTION,
} from './constants/magicValues'
export { CATEGORY_ITEMS } from './constants/categoryItems'
export { SOCIAL_LINKS } from './mocks/socialsLinks'
export { TESTIMONIALS } from './mocks/testimonials'
export { useValidateInput } from './utils/hooks/useValidateInput'
export { useOpenState } from './utils/hooks/useOpenState'
export { useOutsideClick } from './utils/hooks/useOutsideClick'
export { isLinkActive } from './utils/helpers'
export { type FetchParams } from './types/functionsTypes'
export { type Locale } from './types/locale'

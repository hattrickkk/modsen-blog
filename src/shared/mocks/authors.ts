import { SOCIAL_LINKS } from './socialsLinks'

const baseAuthorInfo = {
    description: 'Content Writer @Company',
    socials: SOCIAL_LINKS,
}

export const AUTHORS = [
    {
        ...baseAuthorInfo,
        id: 1,
        image: 'https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'Floyd Miles',
    },
    {
        ...baseAuthorInfo,
        id: 2,
        image: 'https://images.pexels.com/photos/2180890/pexels-photo-2180890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'Dianne Russell',
    },
    {
        ...baseAuthorInfo,
        id: 3,
        image: 'https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'Jenny Wilson',
    },
    {
        id: 4,
        ...baseAuthorInfo,
        image: 'https://images.pexels.com/photos/6205509/pexels-photo-6205509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'Leslie Alexander',
    },
]

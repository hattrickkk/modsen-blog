import type { Meta, StoryObj } from '@storybook/react'

import { CATEGORY_ITEMS, CategoryCard, paths } from '@/shared'

import '../app/styles/nullStyle.scss'

const meta = {
    title: 'Example/CategoryCard',
    component: CategoryCard,
    parameters: {
        layout: 'centered',
        locale: 'en',
    },
    tags: ['autodocs'],
    argTypes: {
        title: {
            description: 'Title of the category',
            control: 'text',
            defaultValue: 'Category Title',
        },
        text: {
            description: 'Description of the category',
            control: 'text',
            defaultValue: 'Some description for the category.',
        },
        path: {
            description: 'Link path',
            control: 'text',
            defaultValue: paths.CATEGORY,
        },
        Icon: {
            description: 'Icon for the category',
            control: 'object',
        },
    },
} satisfies Meta<typeof CategoryCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        title: 'Business',
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        path: paths.BUSINESS,
        Icon: CATEGORY_ITEMS[0].Icon,
    },
}

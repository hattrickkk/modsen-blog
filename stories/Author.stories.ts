import type { Meta, StoryObj } from '@storybook/react'

import { AuthorCard } from '@/features'
import { AUTHOR } from '@/shared'

import '../app/styles/nullStyle.scss'

const meta = {
    title: 'Example/AuthorCard',
    component: AuthorCard,
    parameters: {
        layout: 'centered',
        locale: 'en',
        nextjs: {
            appDirectory: true,
        },
    },
    tags: ['autodocs'],
    argTypes: {
        author: {
            description: 'Author object containing name, image, and socials',
            control: 'object',
        },
    },
} satisfies Meta<typeof AuthorCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        author: {
            ...AUTHOR,
        },
    },
}

import type { Meta, StoryObj } from '@storybook/react'

import { FeaturedPostDisplay } from '@/features'
import { POST } from '@/shared'

import '../app/styles/nullStyle.scss'

const meta = {
    title: 'Example/Posts/FeaturedPost',
    component: FeaturedPostDisplay,
    parameters: {
        locale: 'en',
        layout: 'centered',
        nextjs: {
            appDirectory: true,
        },
    },
    tags: ['autodocs'],
    argTypes: {
        post: {
            description: 'Post object containing title, created, authorId, id params',
            control: 'object',
        },
    },
} satisfies Meta<typeof FeaturedPostDisplay>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        post: {
            ...POST,
        },
    },
}

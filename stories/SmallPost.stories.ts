import type { Meta, StoryObj } from '@storybook/react'

import { SmallPost } from '@/features'
import { POST } from '@/shared'

import '../app/styles/nullStyle.scss'

const meta = {
    title: 'Example/Posts/SmallPost',
    component: SmallPost,
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
} satisfies Meta<typeof SmallPost>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        post: {
            ...POST,
        },
    },
}

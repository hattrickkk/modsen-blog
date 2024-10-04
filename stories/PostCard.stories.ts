import type { Meta, StoryObj } from '@storybook/react'

import { PostCard } from '@/features'
import { POST } from '@/shared'

import '../app/styles/nullStyle.scss'

const meta = {
    title: 'Example/Posts/PostCard',
    component: PostCard,
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
        inColumn: {
            description: 'Direction of post information',
            defaultValue: false,
            control: {
                type: 'boolean',
            },
        },
        fromCategories: {
            description: 'This prop indicates that postСard is used in categories and has additional styles',
            defaultValue: false,
            control: {
                type: 'boolean',
            },
        },
    },
} satisfies Meta<typeof PostCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        post: {
            ...POST,
        },
    },
}

export const InfoInColumnDirection: Story = {
    args: {
        post: {
            ...POST,
        },
        inColumn: true,
    },
}

export const CardFromCategories: Story = {
    args: {
        post: {
            ...POST,
        },
        fromCategories: true,
    },
}

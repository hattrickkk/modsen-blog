import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Pagination } from '@/shared'

import '../app/styles/nullStyle.scss'

const meta = {
    title: 'Example/Pagination',
    component: Pagination,
    parameters: {
        locale: 'en',
        layout: 'centered',
        nextjs: {
            appDirectory: true,
        },
    },
    tags: ['autodocs'],
    argTypes: {
        nextDisableCondition: {
            description: 'Condition to disable the next arrow',
            control: { type: 'boolean' },
        },
        prevDisableCondition: {
            description: 'Condition to disable the previous arrow',
            control: { type: 'boolean' },
        },
    },
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        handlePrevArrowClick: fn,
        handleNextArrowClick: fn,
        nextDisableCondition: false,
        prevDisableCondition: false,
    },
}

export const PrevDisabled: Story = {
    args: {
        handlePrevArrowClick: fn,
        handleNextArrowClick: fn,
        nextDisableCondition: false,
        prevDisableCondition: true,
    },
}

export const NextDisabled: Story = {
    args: {
        handlePrevArrowClick: fn,
        handleNextArrowClick: fn,
        nextDisableCondition: true,
        prevDisableCondition: false,
    },
}

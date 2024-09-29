import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Button } from '@/shared'

import '../app/styles/nullStyle.scss'

const meta = {
    title: 'Example/Button',
    component: Button,
    parameters: {
        layout: 'centered',
        locale: 'en',
    },
    tags: ['autodocs'],
    argTypes: {
        isSubmitting: {
            type: 'boolean',
            description: 'Is form submittimg or not',
            defaultValue: false,
            control: {
                type: 'boolean',
            },
        },
        disabled: {
            type: 'boolean',
            description: 'Is button disabled or not',
            defaultValue: false,
            control: {
                type: 'boolean',
            },
        },
        secondary: {
            type: 'boolean',
            description: 'Is this button secondary or not',
            defaultValue: false,
            control: {
                type: 'boolean',
            },
        },
        children: {
            description: 'Button text',
            control: 'text',
            defaultValue: 'Read More >',
        },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: StoryObj = {}

export const Disabled: Story = {
    args: {
        disabled: true,
    },
}

export const Submittimg: Story = {
    args: {
        isSubmitting: true,
    },
}

export const Secondary: StoryObj = {
    args: {
        secondary: true,
    },
}

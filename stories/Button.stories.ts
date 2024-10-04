import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Button, ButtonViews } from '@/shared'

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
        view: {
            type: 'string',
            description: 'This option allows you to set the button type',
            defaultValue: ButtonViews.PRIMARY,
            options: [ButtonViews.PRIMARY, ButtonViews.SECONDARY],
            control: {
                type: 'radio',
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
        view: ButtonViews.SECONDARY,
    },
}

import { expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'

import { Button } from '@/shared'

import { AllProviders } from '../test-utils'

import '@testing-library/jest-dom'

describe('Button', () => {
    it('button component renders correctly', () => {
        render(<Button>Value</Button>, { wrapper: AllProviders })
        expect(screen.getByText('Value')).toBeInTheDocument()
    })
})

import { expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'

import { QueryDropdown } from '@/features/contactForm/ui/queryDropdown'

import { AllProviders } from '../test-utils'

jest.mock('@/shared', () => ({
    useOpenState: jest.fn(() => [false, jest.fn(), jest.fn()]),
    useOutsideClick: jest.fn(),
}))

const mockSetQuery = jest.fn()
const mockQuery = 'Creating your own blog'

describe('QueryDropdown', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('renders correctly with initial query', () => {
        render(<QueryDropdown query={mockQuery} setQuery={mockSetQuery} />, { wrapper: AllProviders })
        expect(screen.getByText(mockQuery)).toBeInTheDocument()
    })
})

import { expect } from '@jest/globals'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import { Subscribe } from '@/features'
import { sendEmail } from '@/features/subscribe/utils/sendEmail'

import { AllProviders } from '../test-utils'

jest.mock('@/features/subscribe/utils/sendEmail', () => ({
    sendEmail: jest.fn(),
}))

const mockSendEmail = sendEmail as jest.Mock

describe('Subscribe', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('subscribe form renders correctly', () => {
        render(<Subscribe />, { wrapper: AllProviders })
        expect(screen.getByText('Subscribe to our news letter to get latest updates and news')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Enter Your Email')).toBeInTheDocument()
        expect(screen.getByText('Subscribe')).toBeInTheDocument()
    })

    it('should submit the form with valid email and shows success message', async () => {
        render(<Subscribe />, { wrapper: AllProviders })

        mockSendEmail.mockResolvedValueOnce({ status: 200, message: 'success' })

        fireEvent.input(screen.getByPlaceholderText('Enter Your Email'), {
            target: { value: 'test@example.com' },
        })
        fireEvent.click(screen.getByText('Subscribe'))

        await waitFor(() => {
            expect(mockSendEmail).toHaveBeenCalledWith('test@example.com')
            expect(mockSendEmail).toHaveBeenCalledTimes(1)
        })
    })

    it('should show validation error for invalid email', async () => {
        render(<Subscribe />, { wrapper: AllProviders })

        fireEvent.input(screen.getByPlaceholderText('Enter Your Email'), {
            target: { value: 'invalid data' },
        })
        fireEvent.click(screen.getByText('Subscribe'))
        expect(await screen.findByText('Invalid email address')).toBeInTheDocument()
    })
})

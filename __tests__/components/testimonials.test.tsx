import { expect } from '@jest/globals'
import { fireEvent, render, screen } from '@testing-library/react'

import { Slider } from '@/features'
import { TESTIMONIALS } from '@/shared'

import { AllProviders } from '../test-utils'

describe('Slider Component', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('should render the slider and display the first comment initially', () => {
        render(<Slider />, { wrapper: AllProviders })

        expect(screen.getByText(TESTIMONIALS[0].name)).toBeInTheDocument()
        expect(screen.queryByTestId('prev-arrow')).not.toBeInTheDocument()
        expect(screen.queryByTestId('next-arrow')).toBeInTheDocument()
    })

    it('should move to the next comment when next arrow is clicked', () => {
        render(<Slider />, { wrapper: AllProviders })

        const nextArrow = screen.queryByTestId('next-arrow')
        fireEvent.click(nextArrow as HTMLElement)

        expect(screen.getByText(TESTIMONIALS[1].name)).toBeInTheDocument()
        expect(screen.queryByTestId('prev-arrow')).toBeInTheDocument()
    })
})

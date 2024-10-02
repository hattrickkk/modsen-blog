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

    // it('should move to the previous comment when prev arrow is clicked', () => {
    //     render(<Slider />)

    //     // Move to the second comment first by clicking next
    //     const nextArrow = screen.getByRole('button', { name: /next/i })
    //     fireEvent.click(nextArrow)

    //     // Simulate clicking the previous arrow
    //     const prevArrow = screen.getByRole('button', { name: /prev/i })
    //     fireEvent.click(prevArrow)

    //     // Check if the first comment is visible again after the click
    //     expect(screen.getByText(TESTIMONIALS[0].text)).toBeInTheDocument()

    //     // Previous arrow should no longer be visible
    //     expect(screen.queryByRole('button', { name: /prev/i })).not.toBeInTheDocument()
    // })

    // it('should hide the next arrow when on the last slide', () => {
    //     render(<Slider />)

    //     // Move to the last slide by clicking the next arrow until the last comment is displayed
    //     const nextArrow = screen.getByRole('button', { name: /next/i })
    //     while (screen.queryByRole('button', { name: /next/i })) {
    //         fireEvent.click(nextArrow)
    //     }

    //     // Check if the last comment is visible
    //     expect(screen.getByText(TESTIMONIALS[TESTIMONIALS.length - 1].text)).toBeInTheDocument()

    //     // Next arrow should not be visible on the last slide
    //     expect(screen.queryByRole('button', { name: /next/i })).not.toBeInTheDocument()
    // })
})

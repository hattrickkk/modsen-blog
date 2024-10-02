import { expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'

import { Comment } from '@/features/slider/ui/comment'

import { AllProviders } from '../test-utils'

const mockComment = {
    image: 'https://images.pexels.com/photos/2180890/pexels-photo-2180890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'John Doe',
    location: 'New York, USA',
    text: 'This is a great product!',
    id: 1,
}

describe('Comment', () => {
    it('comment renders correctly', () => {
        render(<Comment comment={mockComment} />, { wrapper: AllProviders })
        expect(screen.getByText(mockComment.text)).toBeInTheDocument()
        expect(screen.getByText(mockComment.name)).toBeInTheDocument()
        expect(screen.getByText(mockComment.location)).toBeInTheDocument()
        const image = screen.getByAltText(`${mockComment.name} photo`)
        expect(image).toBeInTheDocument()
    })
})

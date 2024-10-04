import { expect } from '@jest/globals'
import { act, renderHook } from '@testing-library/react-hooks'

import { useDebounce } from '@/features/search/utils/hooks'

describe('useDebounce', () => {
    beforeEach(() => {
        jest.useFakeTimers()
    })

    afterEach(() => {
        jest.runOnlyPendingTimers()
        jest.useRealTimers()
    })

    it('should return the initial value immediately', () => {
        const { result } = renderHook(() => useDebounce('initial', 500))
        expect(result.current).toBe('initial')
    })

    it('should update the debounced value after the delay', () => {
        const { result, rerender } = renderHook(({ value }) => useDebounce(value, 500), {
            initialProps: { value: 'initial' },
        })

        rerender({ value: 'new value' })
        expect(result.current).toBe('initial')

        act(() => {
            jest.advanceTimersByTime(500)
        })
        expect(result.current).toBe('new value')
    })
})

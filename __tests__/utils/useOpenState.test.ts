import { expect } from '@jest/globals'
import { act, renderHook } from '@testing-library/react-hooks'

import { useOpenState } from '@/shared'

describe('useOpenState', () => {
    it('should initialize with isOpen as false', () => {
        const { result } = renderHook(() => useOpenState())
        expect(result.current[0]).toBe(false)
    })

    it('should set isOpen to true when open is called', () => {
        const { result } = renderHook(() => useOpenState())
        act(() => result.current[2]())
        expect(result.current[0]).toBe(true)
    })

    it('should set isOpen to false when close is called', () => {
        const { result } = renderHook(() => useOpenState())
        act(() => result.current[2]())
        expect(result.current[0]).toBe(true)
        act(() => result.current[1]())
        expect(result.current[0]).toBe(false)
    })
})

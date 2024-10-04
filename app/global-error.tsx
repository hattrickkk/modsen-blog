'use client'

import React, { Component, ReactNode } from 'react'

import { Error } from '@/customPages'

interface Props {
    children: ReactNode
}

interface State {
    hasError: boolean
    errorName: string
    errorMessage: string
}

const initValue: State = {
    hasError: false,
    errorName: '',
    errorMessage: '',
}

class ErrorBoundary extends Component<Props, State> {
    state = initValue

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, errorMessage: error.message, errorName: error.name }
    }

    componentDidCatch(error: Error) {
        console.error(`error occured: ${error}`)
    }

    reloadClickHandler = () => this.setState(initValue)

    render() {
        if (this.state.hasError) {
            return (
                <Error
                    name={this.state.errorName}
                    message={this.state.errorMessage}
                    reloadClickHandler={this.reloadClickHandler}
                />
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary

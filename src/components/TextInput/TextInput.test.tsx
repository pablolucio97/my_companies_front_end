import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { TextInput } from './'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '@theme/index'

interface ChildrenProps {
    children: ReactNode
}

const StyledProvider = ({ children }: ChildrenProps) => {
    return (
        <ThemeProvider theme={theme as never}>
            {children}
        </ThemeProvider>
    )
}

describe('TextInput', async () => {
    it('should render TextInput component', () => {
        render(
            <TextInput
                id='input-test'
                label='Label test'
                name='Name test'
            />,
            {
                wrapper: StyledProvider
            }
        )
        expect(screen.getByText('Label test')).toBeInTheDocument()
    })
})
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Button } from './'
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

describe('Button', async () => {
    it('should render Button component', () => {
        render(
            <Button
                title='Button Testing'
            />,
            {
                wrapper: StyledProvider
            }
        )
        expect(screen.getByText('Button Testing')).toBeInTheDocument()

    })
})
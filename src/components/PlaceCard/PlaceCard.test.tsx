import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { PlaceCard } from '.'
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

describe('PlaceCard', async () => {
    it('should render PlaceCard component', () => {
       render(
            <PlaceCard
                place='My Place'
                onDelete={() => { }}
                onEdit={() => { }}
            />,
            {
                wrapper: StyledProvider
            }
        )

        expect(screen.getByText('My Place')).toBeInTheDocument()
    })
})
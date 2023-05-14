import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { CardList } from '.'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '@theme/index'
import { PlaceCard } from '@components/PlaceCard'

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

describe('CardList', async () => {

    it('should render CardList correctly', () => {
        render(
            <CardList
                children={<p>Test children</p>}
            />
            ,
            {
                wrapper: StyledProvider
            }
        )
        expect(screen.getByText('Ações')).toBeVisible()
    })

    it('should render children elements correctly', () => {
        const testsPlaces = ['Lugar1', 'Lugar2', 'Lugar3']
        render(
            <CardList>
                {testsPlaces.map(place => (
                    <PlaceCard
                        key={place}
                        place={place}
                    />
                ))}
            </CardList>
            ,
            {
                wrapper: StyledProvider
            }
        )

        expect(screen.getByText('Lugar1')).toBeInTheDocument()
    })
})
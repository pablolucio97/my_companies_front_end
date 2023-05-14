import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Pagination } from '.'
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

const options = [
    {
        label: '5 items por página',
        value: 1,
    },
    {
        label: '15 items por página',
        value: 2,
    },
]

describe('PlaceCard', async () => {
    it('should render PlaceCard component', () => {
        render(
            <Pagination
                options={options}
                callNextPage={() => { }}
                callPreviousPage={() => { }}
                totalOfItems={50}
                currentPage={1}
                totalPagesIndicator={5}
                itemsPerPage={10}
            />,
            {
                wrapper: StyledProvider
            }
        )
        expect(screen.getByText('Qt por página:')).toBeInTheDocument()
        expect(screen.queryByText('Próxima')).toBeVisible()
    })
})
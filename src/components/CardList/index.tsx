import { ReactNode } from 'react';
import {
    Container,
    ActionsContainer,
    CompanyNameContainer,
    CompanyTotalPlacesContainer,
    HeaderContainer,
    Title
} from './styles';

interface CardListProps {
    children: ReactNode;
    showTotalPlacesColumn?: boolean;
}

export function CardList({ children, showTotalPlacesColumn }: CardListProps) {
    return (
        <Container>
            <HeaderContainer>
                <CompanyNameContainer>
                    <Title>Empresa</Title>
                </CompanyNameContainer>
                {
                    showTotalPlacesColumn &&
                    <CompanyTotalPlacesContainer>
                        <Title>Qt de Locais</Title>
                    </CompanyTotalPlacesContainer>
                }
                <ActionsContainer>
                    <Title>Ações</Title>
                </ActionsContainer>
            </HeaderContainer>
            {children}
        </Container>
    )
}
import { ChangeEvent } from 'react';
import {
    ButtonsContainer,
    Container,
    PagesCounterContainer,
    StrongText,
    Button,
    SelectInput,
    Option,
    SearchPagesContainer,
    PageInfoContainer,
    PageConfigurationContainer
} from './styles';


interface OptionProps {
    value: string | number;
    label: string | number;
}

interface PaginationProps {
    totalOfItems: number;
    itemsPerPage?: number;
    currentPage?: number;
    onPageChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
    onItemsPerPageChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
    callPreviousPage?: () => void;
    callNextPage: () => void;
    disabledPreviousPageButton?: boolean;
    disabledNextPageButton?: boolean;
    options: OptionProps[];
    selectPlaceholder?: string;
    totalPagesIndicator: number
}


export function Pagination({
    currentPage = 1,
    onPageChange,
    onItemsPerPageChange,
    totalOfItems,
    callPreviousPage,
    callNextPage,
    disabledPreviousPageButton,
    disabledNextPageButton,
    options,
    selectPlaceholder,
    totalPagesIndicator
}: PaginationProps) {

    const defaultItemsPerPageArr = [5, 10]

    return (
        <Container>
            <PagesCounterContainer>
                <PageInfoContainer>
                    <StrongText>mostrando</StrongText>
                    <StrongText>{currentPage}</StrongText>
                    <StrongText> de </StrongText>
                    <StrongText>{totalPagesIndicator}</StrongText>
                    <StrongText>páginas,</StrongText>
                    <StrongText>{totalOfItems}</StrongText>
                    <StrongText>items no total</StrongText>
                </PageInfoContainer>
                <PageConfigurationContainer>
                    <StrongText>Items por página:</StrongText>
                    <SelectInput
                        onChange={onItemsPerPageChange}
                    >
                        <Option
                            selected
                            disabled
                        >
                            {selectPlaceholder}
                        </Option>
                        {
                            defaultItemsPerPageArr.map(opt => (
                                <Option key={opt} value={opt}
                                >
                                    {opt}
                                </Option>
                            ))
                        }
                    </SelectInput>
                </PageConfigurationContainer>
            </PagesCounterContainer>
            <SearchPagesContainer>
                <StrongText>Página:</StrongText>
                <SelectInput
                    onChange={onPageChange}
                >
                    <Option
                        selected
                        disabled
                    >
                        {selectPlaceholder}
                    </Option>
                    {
                        options.map(opt => (
                            <Option key={opt.value} value={opt.label}
                            >
                                {opt.label}
                            </Option>
                        ))
                    }
                </SelectInput>
                <ButtonsContainer>
                    <Button
                        disabled={disabledPreviousPageButton}
                        onClick={callPreviousPage}
                    >
                        Página anterior
                    </Button>
                    <Button
                        disabled={disabledNextPageButton}
                        onClick={callNextPage}
                    >
                        Próxima página
                    </Button>
                </ButtonsContainer>
            </SearchPagesContainer>
        </Container>
    )
}
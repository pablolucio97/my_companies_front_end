import { ChangeEvent } from 'react';
import {
    ButtonsContainer,
    Container,
    StrongText,
    Button,
    SelectInput,
    Option,
    SearchPagesContainer,
    SelectInputContainer
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
    onPageChange,
    onItemsPerPageChange,
    callPreviousPage,
    callNextPage,
    disabledPreviousPageButton,
    disabledNextPageButton,
    options,
    selectPlaceholder,
}: PaginationProps) {

    const defaultItemsPerPageArr = [5, 10]

    return (
        <Container>
            <SearchPagesContainer>
                <SelectInputContainer>
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
                </SelectInputContainer>
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

                <ButtonsContainer>
                    <Button
                        disabled={disabledPreviousPageButton}
                        onClick={callPreviousPage}
                    >
                        Anterior
                    </Button>
                    <Button
                        disabled={disabledNextPageButton}
                        onClick={callNextPage}
                    >
                        Próxima
                    </Button>
                </ButtonsContainer>
            </SearchPagesContainer>
        </Container>
    )
}
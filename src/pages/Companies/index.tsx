import { Title } from '@components/Title';
import {
    Container,
    Form,
    InputContainer,
} from './styles';
import {
    ContentContainer,
    Main,
    NameInputStyle,
    TextDeleteContainer,
    Text,
    Strong,
    NoDataContainer,
    ErrorFetchContainer,
    ErrorText
} from '@styles/sharedStyles';
import { Header } from '@components/Header'
import { Button } from '@components/Button';
import { ModalBox } from '@components/Modal'
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { TextInput } from '@components/TextInput'
import { TextInputMask } from '@components/TextInputMask';
import { CNPJMask } from '@utils/masks';
import { CompanyCard } from '@components/CompanyCard';
import { CardList } from '@components/CardList';
import { Pagination } from '@components/Pagination';
import { callNextPage, callPreviousPage } from '@utils/pagination'
import { getCompanies } from '@services/bff';
import { useQuery } from 'react-query';
import ReactLoading from 'react-loading';
import { useSelector } from 'react-redux'
import { RootState } from '@store/index'
import { ICompany } from 'interfaces/application';

export default function Companies() {

    const [modal, setModal] = useState('')
    const [itemsPerPage, setItemsPerPage] = useState(5)
    const [page, setPage] = useState(1)
    const [totalItems, setTotalItems] = useState(0)
    const [companies, setCompanies] = useState<ICompany[]>([])

    const { user } = useSelector((state: RootState) => state.auth)

    const { isLoading, error } = useQuery([
        'get-companies',
        page,
        itemsPerPage,
        modal
    ], async () => {
        const response = await getCompanies(user.id)
        setCompanies(response)
        setTotalItems(response.length)
    })


    function handleCloseModal() {
        setModal('')
    }

    const companyName = 'Empresa do Janiu (Caucaia)'

    function handleViewCompany() {
        return
    }

    function handleEditCompany() {
        return
    }

    function handleDeleteCompany() {
        return
    }

    function handleNextPage() {
        callNextPage(totalItems, itemsPerPage, page, () => setPage(page + 1))
    }

    function handlePreviousPage() {
        callPreviousPage(page, () => setPage(page - 1))
    }

    function handleChangeCurrentPage(e: ChangeEvent<HTMLSelectElement>) {
        setPage(Number(e.target.value))
    }

    function handleChangeItemsPerPage(e: ChangeEvent<HTMLSelectElement>) {
        setItemsPerPage(Number(e.target.value))
    }

    const feedTotalPagesIndicator = useCallback(() => {
        const totalPages = Math.ceil(Number(totalItems / itemsPerPage))
        const totalPagesIndicator = Array.from(Array(totalPages).keys()).slice(-1)[0] + 1
        return totalPagesIndicator
    }, [itemsPerPage, totalItems])

    const feedPageSelectList = useCallback(() => {
        const totalPagesIndicator = Math.ceil(Number(totalItems / itemsPerPage))
        const pagesSelectElementArr = Array.from(Array(totalPagesIndicator).keys())
        const formatedPagesSelectElementArr = pagesSelectElementArr
            .map((option) => {
                return {
                    label: option + 1,
                    value: option + 1,
                }
            })
        return formatedPagesSelectElementArr
    }, [itemsPerPage, totalItems])

    const getTotalItems = useCallback(async () => {
        const data = await getCompanies('0b5f09ee-8eea-4dd9-8c8e-0b52d355f85b')
        if (data) {
            setTotalItems(data.length)
            return totalItems
        }
    }, [totalItems])

    useEffect(() => {
        getTotalItems()
        feedTotalPagesIndicator()
        feedPageSelectList()
    }, [getTotalItems, feedTotalPagesIndicator, feedPageSelectList, page])

    function renderCompaniesCards() {
        if (companies.length === 0) {
            return (
                <NoDataContainer>
                    <Title
                        content='Nenhuma empresa cadastrada!'
                    />
                    <Button
                        title='Adicionar empresa'
                        onClick={() => setModal('register-company')}
                    />
                </NoDataContainer>
            )
        }
        return (
            <ContentContainer>
                <Button
                    title='Adicionar empresa'
                    onClick={() => setModal('register-company')}
                />
                <CardList showTotalPlacesColumn>
                    {
                        companies.map(company => (
                            <CompanyCard
                                key={company.id}
                                company={company.nome}
                                totalPlaces={10}
                                onDelete={handleDeleteCompany}
                                onEdit={handleEditCompany}
                                onViewLocal={handleViewCompany}
                            />
                        ))
                    }
                </CardList>
            </ContentContainer>
        )
    }

    return (
        <Container>
            <Header renderStaticTitle />
            <Main>
                {
                    isLoading ?
                        <ReactLoading
                            type='bubbles'
                            color='#FFFFFF'
                            height={40}
                            width={40}
                        />

                        :

                        error ?
                            <ErrorFetchContainer>
                                <ErrorText>
                                    Houve uma falha ao tentar carregar os dados do sistema
                                </ErrorText>
                            </ErrorFetchContainer>
                            :
                            renderCompaniesCards()
                }

                <Pagination
                    callNextPage={handleNextPage}
                    callPreviousPage={handlePreviousPage}
                    totalOfItems={totalItems}
                    currentPage={page}
                    onPageChange={handleChangeCurrentPage}
                    onItemsPerPageChange={handleChangeItemsPerPage}
                    options={feedPageSelectList()}
                    disabledPreviousPageButton={page <= 1}
                    selectPlaceholder={'-'}
                    totalPagesIndicator={feedTotalPagesIndicator()}
                    disabledNextPageButton={page > Math.floor(totalItems / itemsPerPage) || totalItems % itemsPerPage === 0 && page === Math.floor(totalItems / itemsPerPage)}
                />
            </Main>

            <ModalBox
                isOpen={modal === 'register-company'}
                onRequestClose={handleCloseModal}
                modalClassName='active-modal'
                overlayClassName='react-modal-overlay'
                title='Adicionar empresa'
                confirmButtonTitle='Adicionar'
                onCancel={handleCloseModal}
                onConfirm={() => setModal('register-company')}
            >
                <Form>
                    <TextInput
                        label='Nome'
                        name='name'
                        id='name-input'
                        style={NameInputStyle}
                    />
                    <InputContainer>
                        <TextInput
                            label='Website'
                            name='website'
                            id='website-input'
                        />
                        <TextInputMask
                            label='CNPJ'
                            name='cnpj'
                            id='cnpj-input'
                            mask={CNPJMask}
                        />
                    </InputContainer>
                </Form>
            </ModalBox>

            <ModalBox
                isOpen={modal === 'edit-company'}
                onRequestClose={handleCloseModal}
                modalClassName='active-modal'
                overlayClassName='react-modal-overlay'
                title={`Editar: ${companyName}`}
                confirmButtonTitle='Salvar'
                onCancel={handleCloseModal}
                onConfirm={() => setModal('test')}
            >
                <Form>
                    <TextInput
                        label='Nome'
                        name='name'
                        id='name-input'
                        style={NameInputStyle}
                    />
                    <InputContainer>
                        <TextInput
                            label='Website'
                            name='website'
                            id='website-input'
                        />
                        <TextInputMask
                            label='CNPJ'
                            name='cnpj'
                            id='cnpj-input'
                            mask={CNPJMask}
                        />
                    </InputContainer>
                </Form>
            </ModalBox>

            <ModalBox
                isOpen={modal === 'delete-company'}
                onRequestClose={handleCloseModal}
                modalClassName='active-modal-delete'
                overlayClassName='react-modal-overlay'
                title='Confirmação de exclusão'
                confirmButtonTitle='Excluir'
                onCancel={handleCloseModal}
                onConfirm={() => setModal('test')}
                variant='delete'
            >
                <TextDeleteContainer>
                    <Text>
                        A empresa
                        <Strong>{companyName}</Strong>
                        será excluída. Tem certeza dessa ação?
                    </Text>
                </TextDeleteContainer>
            </ModalBox>

        </Container>
    )
}
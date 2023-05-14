import { Title } from '@components/Title';
import {
    Container,
    InputsContainer,
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
import {
    deleteCompany,
    getCompanies,
    registerCompany,
    updateCompany,
} from '@services/bff';
import { useQuery } from 'react-query';
import ReactLoading from 'react-loading';
import { useSelector } from 'react-redux'
import { RootState } from '@store/index'
import { ICompany } from 'interfaces/application';
import { showSuccessToast, showErrorToast } from '@utils/toast';
import { activeCompanyInitialState } from '@utils/initialState';
import useStateRef from 'react-usestateref'

export default function Companies() {

    const [activeModal, setActiveModal] = useState('')
    const [itemsPerPage, setItemsPerPage] = useState(5)
    const [page, setPage] = useState(1)
    const [totalItems, setTotalItems] = useState(0)
    const [companies, setCompanies] = useState<ICompany[]>([])
    const [, setActiveCompany, activeCompanyRef] = useStateRef(activeCompanyInitialState)

    const [companyName, setCompanyName] = useState('')
    const [companyWebsite, setCompanyWebsite] = useState('')
    const [companyCNPJ, setCompanyCNPJ] = useState('')

    const { user } = useSelector((state: RootState) => state.auth)

    const { isLoading, error } = useQuery([
        'get-companies',
        page,
        itemsPerPage,
        activeModal
    ], async () => {
        const response = await getCompanies(user.id, itemsPerPage, page)
        setCompanies(response)
        setTotalItems(response.length)
    })


    function handleCloseModal() {
        setActiveModal('')
    }

    function clearInputs() {
        setCompanyName('')
        setCompanyWebsite('')
        setCompanyCNPJ('')
    }

    function handleManageCompany(modal: string, company: ICompany) {
        setActiveModal(modal)
        setActiveCompany(company)
    }

    async function handleRegisterCompany() {
        if (!companyName || !companyWebsite || !companyCNPJ) {
            showErrorToast('Verifique se todos os dados foram preenchidos corretamente.')
        } else {
            try {
                const data = {
                    nome: companyName,
                    website: companyWebsite,
                    cnpj: companyCNPJ,
                    user_id: user.id
                }
                await registerCompany(data)
                    .then(() => {
                        showSuccessToast('Empresa registrada com sucesso!')
                        handleCloseModal()
                        clearInputs()
                    })
            } catch (error) {
                console.log(error)
                showErrorToast('Houve um erro ao registrar empresa.')
            }
        }
    }

    async function handleEditCompany() {
        if (!companyName || !companyWebsite || !companyCNPJ) {
            showErrorToast('Verifique se todos os dados foram preenchidos corretamente.')
        } else {
            try {
                setActiveCompany({
                    id: activeCompanyRef.current.id,
                    nome: companyName,
                    cnpj: companyCNPJ,
                    website: companyWebsite
                })
                await updateCompany(activeCompanyRef.current)
                    .then(() => {
                        showSuccessToast('Empresa atualizada com sucesso!')
                        handleCloseModal()
                        clearInputs()
                    })
            } catch (error) {
                console.log(error)
                showErrorToast('Houve um erro ao editar empresa.')
            }
        }
    }


    async function handleDeleteCompany() {
        try {
            await deleteCompany(activeCompanyRef.current.id).then(() => {
                showSuccessToast('Empresa deletada com sucesso!')
                handleCloseModal()
            })
        } catch (error) {
            console.log(error)
            showErrorToast('Houve um erro ao deletear empresa.')
        }
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
        const data = await getCompanies(user.id)
        if (data) {
            setTotalItems(data.length)
            return totalItems
        }
    }, [totalItems, user.id])

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
                        onClick={() => setActiveModal('register-company')}
                    />
                </NoDataContainer>
            )
        }
        return (
            <ContentContainer>
                <Button
                    title='Adicionar empresa'
                    onClick={() => setActiveModal('register-company')}
                />
                <CardList showTotalPlacesColumn>
                    <>
                        {
                            companies.map(company => (
                                <CompanyCard
                                    key={company.id}
                                    company={company.nome}
                                    totalPlaces={company.places!.length}
                                    onDelete={() => handleManageCompany('delete-company', company)}
                                    onEdit={() => handleManageCompany('edit-company', company)}
                                    link={`/locais/${company.id}`}
                                />
                            ))
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
                    </>
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
            </Main>

            <ModalBox
                isOpen={activeModal === 'register-company'}
                onRequestClose={handleCloseModal}
                modalClassName='active-modal'
                overlayClassName='react-modal-overlay'
                title='Adicionar empresa'
                confirmButtonTitle='Adicionar'
                onCancel={handleCloseModal}
                onConfirm={handleRegisterCompany}
            >
                <InputsContainer>
                    <TextInput
                        label='Nome'
                        name='name'
                        id='name-input'
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder={activeCompanyRef.current.nome}
                        style={NameInputStyle}
                    />
                    <InputContainer>
                        <TextInput
                            label='Website'
                            name='website'
                            value={companyWebsite}
                            onChange={(e) => setCompanyWebsite(e.target.value)}
                            placeholder={activeCompanyRef.current.website}
                            id='website-input'
                        />
                        <TextInputMask
                            label='CNPJ'
                            name='cnpj'
                            value={companyCNPJ}
                            onChange={(e) => setCompanyCNPJ(e.target.value)}
                            placeholder={activeCompanyRef.current.cnpj}
                            id='cnpj-input'
                            mask={CNPJMask}
                        />
                    </InputContainer>
                </InputsContainer>
            </ModalBox>

            <ModalBox
                isOpen={activeModal === 'edit-company'}
                onRequestClose={handleCloseModal}
                modalClassName='active-modal'
                overlayClassName='react-modal-overlay'
                title={`Editar: ${activeCompanyRef.current.nome}`}
                confirmButtonTitle='Salvar'
                onCancel={handleCloseModal}
                onConfirm={handleEditCompany}
            >
                <InputsContainer>
                    <TextInput
                        label='Nome'
                        name='name'
                        id='name-input'
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder={activeCompanyRef.current.nome}
                        style={NameInputStyle}
                    />
                    <InputContainer>
                        <TextInput
                            label='Website'
                            name='website'
                            value={companyWebsite}
                            onChange={(e) => setCompanyWebsite(e.target.value)}
                            placeholder={activeCompanyRef.current.website}
                            id='website-input'
                        />
                        <TextInputMask
                            label='CNPJ'
                            name='cnpj'
                            value={companyCNPJ}
                            onChange={(e) => setCompanyCNPJ(e.target.value)}
                            placeholder={activeCompanyRef.current.cnpj}
                            id='cnpj-input'
                            mask={CNPJMask}
                        />
                    </InputContainer>
                </InputsContainer>
            </ModalBox>

            <ModalBox
                isOpen={activeModal === 'delete-company'}
                onRequestClose={handleCloseModal}
                modalClassName='active-modal-delete'
                overlayClassName='react-modal-overlay'
                title='Confirmação de exclusão'
                confirmButtonTitle='Excluir'
                onCancel={handleCloseModal}
                onConfirm={handleDeleteCompany}
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



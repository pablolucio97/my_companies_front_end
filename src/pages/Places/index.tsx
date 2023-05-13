import { Title } from '@components/Title';
import {
    Container,
    InputContainer,
    Form,
    TextInputStyle,
    TextInputMaskStyle,
    BackButtonContainer,
    ArrowBackIconStyle,
    BackButtonText
} from './styles';
import {
    ContentContainer,
    Main,
    NameInputStyle,
    Strong,
    TextDeleteContainer,
    Text,
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
import { CEPMask } from '@utils/masks';
import { MdArrowBack } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { PlaceCard } from '@components/PlaceCard';
import { CardList } from '@components/CardList';
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query';
import { getPlaces } from '@services/bff';
import { IPlace } from 'interfaces/application';
import useStateRef from 'react-usestateref';
import { activePlaceInitialState } from '@utils/initialState';
import { Pagination } from '@components/Pagination';
import { callNextPage, callPreviousPage } from '@utils/pagination';
import ReactLoading from 'react-loading';

export default function Places() {

    const [activeModal, setActiveModal] = useState('')
    const [itemsPerPage, setItemsPerPage] = useState(5)
    const [page, setPage] = useState(1)
    const [totalItems, setTotalItems] = useState(0)
    const [places, setPlaces] = useState<IPlace[]>([])
    const [, setActivePlace, activePlaceRef] = useStateRef(activePlaceInitialState)

    const { placeId } = useParams()

    console.log(placeId)

    const { isLoading, error } = useQuery([
        'get-places',
        page,
        itemsPerPage,
        activeModal
    ], async () => {
        const response = await getPlaces(placeId!)
        console.log(response)
        setPlaces(response)
        setTotalItems(response.length)
    })


    function handleCloseModal() {
        setActiveModal('')
    }

    // function clearInputs() {
    //     setCompanyName('')
    //     setCompanyWebsite('')
    //     setCompanyCNPJ('')
    // }

    const placeName = 'Local do Janiu Rua 1'

    const navigate = useNavigate()

    const handleNavigateToCompanies = () => {
        navigate('/empresas')
    }


    function handleEditPlace() {
        return
    }

    function handleDeletePlace() {
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
        const data = await getPlaces(placeId!)
        if (data) {
            setTotalItems(data.length)
            return totalItems
        }
    }, [placeId, totalItems])

    useEffect(() => {
        getTotalItems()
        feedTotalPagesIndicator()
        feedPageSelectList()
    }, [getTotalItems, feedTotalPagesIndicator, feedPageSelectList, page])

    function renderPlacesCards() {
        if (places.length === 0) {
            return (
                <NoDataContainer>
                    <BackButtonContainer
                        onClick={handleNavigateToCompanies}
                    >
                        <MdArrowBack
                            style={ArrowBackIconStyle}
                        />
                        <BackButtonText>
                            Minhas empresas
                        </BackButtonText>
                    </BackButtonContainer>
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
                <BackButtonContainer
                    onClick={handleNavigateToCompanies}
                >
                    <MdArrowBack
                        style={ArrowBackIconStyle}
                    />
                    <BackButtonText>
                        Minhas empresas
                    </BackButtonText>
                </BackButtonContainer>
                <Button
                    title='Adicionar empresa'
                    onClick={() => setActiveModal('register-place')}
                />
                <CardList>
                    <>
                        {
                            places.map(place => (
                                <PlaceCard
                                    key={place.id}
                                    place={place.nome}
                                // onEdit={() => handleManageCompany('edit-place', place)}
                                // onDelete={() => handleManageCompany('delete-place', place)}
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
            <Header renderStaticTitle={false} />
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
                            renderPlacesCards()
                }
            </Main>
            <ModalBox
                isOpen={activeModal === 'register-place'}
                onRequestClose={handleCloseModal}
                modalClassName='active-modal'
                overlayClassName='react-modal-overlay'
                title='Adicionar local'
                confirmButtonTitle='Adicionar'
                onCancel={handleCloseModal}
                onConfirm={() => setActiveModal('register-place')}
            >
                <Form>
                    <TextInput
                        label='Nome'
                        name='name'
                        id='name-input'
                        style={NameInputStyle}
                    />
                    <InputContainer>
                        <TextInputMask
                            label='CEP'
                            name='cep'
                            id='cep-input'
                            mask={CEPMask}
                            style={TextInputMaskStyle}
                        />
                        <TextInput
                            label='Rua'
                            name='street'
                            id='street-input'
                        />
                    </InputContainer>
                    <InputContainer>
                        <TextInput
                            label='Número'
                            name='number'
                            id='number-input'
                        />
                        <TextInput
                            label='Bairro'
                            name='district'
                            id='district-input'
                            inputContainerStyle={TextInputStyle}
                        />
                    </InputContainer>
                    <InputContainer>
                        <TextInput
                            label='Cidade'
                            name='city'
                            id='city-input'
                        />
                        <TextInput
                            label='Estado'
                            name='state'
                            id='state-input'
                            inputContainerStyle={TextInputStyle}
                        />
                    </InputContainer>
                </Form>
            </ModalBox>

            <ModalBox
                isOpen={activeModal === 'edit-place'}
                onRequestClose={handleCloseModal}
                modalClassName='active-modal'
                overlayClassName='react-modal-overlay'
                title={`Editar: ${placeName}`}
                confirmButtonTitle='Salvar'
                onCancel={handleCloseModal}
                onConfirm={() => setActiveModal('test')}
            >
                <Form>
                    <TextInput
                        label='Nome'
                        name='name'
                        id='name-input'
                        style={NameInputStyle}
                    />
                    <InputContainer>
                        <TextInputMask
                            label='CEP'
                            name='cep'
                            id='cep-input'
                            mask={CEPMask}
                            style={TextInputMaskStyle}
                        />
                        <TextInput
                            label='Rua'
                            name='street'
                            id='street-input'
                        />
                    </InputContainer>
                    <InputContainer>
                        <TextInput
                            label='Número'
                            name='number'
                            id='number-input'
                        />
                        <TextInput
                            label='Bairro'
                            name='district'
                            id='district-input'
                            inputContainerStyle={TextInputStyle}
                        />
                    </InputContainer>
                    <InputContainer>
                        <TextInput
                            label='Cidade'
                            name='city'
                            id='city-input'
                        />
                        <TextInput
                            label='Estado'
                            name='state'
                            id='state-input'
                            inputContainerStyle={TextInputStyle}
                        />
                    </InputContainer>
                </Form>
            </ModalBox>

            <ModalBox
                isOpen={activeModal === 'delete-place'}
                onRequestClose={handleCloseModal}
                modalClassName='active-modal-delete'
                overlayClassName='react-modal-overlay'
                title='Confirmação de exclusão'
                confirmButtonTitle='Excluir'
                onCancel={handleCloseModal}
                onConfirm={() => setActiveModal('test')}
                variant='delete'
            >
                <TextDeleteContainer>
                    <Text>
                        O local
                        <Strong>{placeName}</Strong>
                        será excluído. Tem certeza dessa ação?
                    </Text>
                </TextDeleteContainer>
            </ModalBox>
        </Container>
    )
}
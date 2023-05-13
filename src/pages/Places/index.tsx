import { Title } from '@components/Title';
import {
    Container,
    InputContainer,
    InputsContainer,
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
import { deletePlace, getPlaces, registerPlace, updatePlace } from '@services/bff';
import { IPlace } from 'interfaces/application';
import useStateRef from 'react-usestateref';
import { activePlaceInitialState } from '@utils/initialState';
import { Pagination } from '@components/Pagination';
import { callNextPage, callPreviousPage } from '@utils/pagination';
import ReactLoading from 'react-loading';
import { showErrorToast, showSuccessToast } from '@utils/toast';

export default function Places() {

    const [activeModal, setActiveModal] = useState('')
    const [itemsPerPage, setItemsPerPage] = useState(5)
    const [page, setPage] = useState(1)
    const [totalItems, setTotalItems] = useState(0)
    const [places, setPlaces] = useState<IPlace[]>([])
    const [, setActivePlace, activePlaceRef] = useStateRef(activePlaceInitialState)

    const [placeName, setPlaceName] = useState('')
    const [placeCep, setPlaceCep] = useState('')
    const [placeNumber, setPlaceNumber] = useState('')
    const [placeStreet, setPlaceStreet] = useState('')
    const [placeDistrict, setPlaceDistrict] = useState('')
    const [placeCity, setPlaceCity] = useState('')
    const [placeState, setPlaceState] = useState('')

    const { companyId } = useParams()

    const { isLoading, error } = useQuery([
        'get-places',
        page,
        itemsPerPage,
        activeModal
    ], async () => {
        const response = await getPlaces(companyId!, itemsPerPage, page)
        console.log(response)
        setPlaces(response)
        setTotalItems(response.length)
    })

    function handleCloseModal() {
        setActiveModal('')
    }

    function clearInputs() {
        setPlaceName('')
        setPlaceCep('')
        setPlaceStreet('')
        setPlaceNumber('')
        setPlaceDistrict('')
        setPlaceCity('')
        setPlaceState('')
    }

    const navigate = useNavigate()

    const handleNavigateToCompanies = () => {
        navigate('/empresas')
    }

    function handleManagePlace(modal: string, place: IPlace) {
        setActiveModal(modal)
        setActivePlace(place as never)
    }

    async function handleRegisterPlace() {
        if (!placeName ||
            !placeCity ||
            !placeCep ||
            !placeCity ||
            !placeState ||
            !placeDistrict ||
            !placeNumber) {
            showErrorToast('Verifique se todos os dados foram preenchidos corretamente.')
        } else {
            try {
                const data = {
                    nome: placeName,
                    cep: placeCep,
                    rua: placeStreet,
                    numero: placeNumber,
                    bairro: placeDistrict,
                    cidade: placeCity,
                    estado: placeState,
                    company_id: companyId!
                }
                await registerPlace(data)
                    .then(() => {
                        showSuccessToast('Local registrado com sucesso!')
                        handleCloseModal()
                        clearInputs()
                    })
            } catch (error) {
                console.log(error)
                showErrorToast('Houve um erro ao registrar local.')
            }
        }

    }

    async function handleEditPlace() {
        if (!placeName ||
            !placeCity ||
            !placeCep ||
            !placeCity ||
            !placeState ||
            !placeDistrict ||
            !placeNumber) {
            showErrorToast('Verifique se todos os dados foram preenchidos corretamente.')
        } else {
            try {
                setActivePlace({
                    id: activePlaceRef.current.id,
                    nome: placeName,
                    cep: placeCep,
                    rua: placeStreet,
                    numero: placeNumber,
                    bairro: placeDistrict,
                    cidade: placeStreet,
                    estado: placeState,
                    company_id: companyId!
                })
                await updatePlace(activePlaceRef.current)
                    .then(() => {
                        showSuccessToast('Local atualizado com sucesso!')
                        handleCloseModal()
                        clearInputs()
                    })
            } catch (error) {
                console.log(error)
                showErrorToast('Houve um erro ao editar local.')
            }
        }
    }

    async function handleDeletePlace() {
        try {
            await deletePlace(activePlaceRef.current.id).then(() => {
                showSuccessToast('Local deletado com sucesso!')
                handleCloseModal()
            })
        } catch (error) {
            console.log(error)
            showErrorToast('Houve um erro ao deletear local.')
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
        const formattedPagesSelectElementArr = pagesSelectElementArr
            .map((option) => {
                return {
                    label: option + 1,
                    value: option + 1,
                }
            })
        return formattedPagesSelectElementArr
    }, [itemsPerPage, totalItems])

    const getTotalItems = useCallback(async () => {
        const data = await getPlaces(companyId!)
        if (data) {
            setTotalItems(data.length)
            return totalItems
        }
    }, [companyId, totalItems])

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
                        content='Nenhum local cadastrado!'
                    />
                    <Button
                        title='Adicionar local'
                        onClick={() => setActiveModal('register-place')}
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
                    title='Adicionar local'
                    onClick={() => setActiveModal('register-place')}
                />
                <CardList>
                    <>
                        {
                            places.map(place => (
                                <PlaceCard
                                    key={place.id}
                                    place={place.nome}
                                    onEdit={() => handleManagePlace('edit-place', place)}
                                    onDelete={() => handleManagePlace('delete-place', place)}
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
                onConfirm={handleRegisterPlace}
            >
                <InputsContainer>
                    <TextInput
                        label='Nome'
                        name='name'
                        value={placeName}
                        onChange={(e) => { setPlaceName(e.target.value) }}
                        id='name-input'
                        style={NameInputStyle}
                    />
                    <InputContainer>
                        <TextInputMask
                            label='CEP'
                            name='cep'
                            value={placeCep}
                            onChange={(e) => { setPlaceCep(e.target.value) }}
                            id='cep-input'
                            mask={CEPMask}
                            style={TextInputMaskStyle}
                        />
                        <TextInput
                            label='Rua'
                            name='street'
                            value={placeStreet}
                            onChange={(e) => { setPlaceStreet(e.target.value) }}
                            id='street-input'
                        />
                    </InputContainer>
                    <InputContainer>
                        <TextInput
                            label='Número'
                            name='number'
                            value={placeNumber}
                            onChange={(e) => { setPlaceNumber(e.target.value) }}
                            id='number-input'
                        />
                        <TextInput
                            label='Bairro'
                            name='district'
                            value={placeDistrict}
                            onChange={(e) => { setPlaceDistrict(e.target.value) }}
                            id='district-input'
                            inputContainerStyle={TextInputStyle}
                        />
                    </InputContainer>
                    <InputContainer>
                        <TextInput
                            label='Cidade'
                            name='city'
                            value={placeCity}
                            onChange={(e) => { setPlaceCity(e.target.value) }}
                            id='city-input'
                        />
                        <TextInput
                            label='Estado'
                            name='state'
                            value={placeState}
                            onChange={(e) => { setPlaceState(e.target.value) }}
                            id='state-input'
                            inputContainerStyle={TextInputStyle}
                        />
                    </InputContainer>
                </InputsContainer>
            </ModalBox>

            <ModalBox
                isOpen={activeModal === 'edit-place'}
                onRequestClose={handleCloseModal}
                modalClassName='active-modal'
                overlayClassName='react-modal-overlay'
                title={`Editar: ${placeName}`}
                confirmButtonTitle='Salvar'
                onCancel={handleCloseModal}
                onConfirm={handleEditPlace}
            >
                <InputsContainer>
                    <TextInput
                        label='Nome'
                        name='name'
                        value={placeName}
                        onChange={(e) => { setPlaceName(e.target.value) }}
                        placeholder={activePlaceRef.current.nome}
                        id='name-input'
                        style={NameInputStyle}
                    />
                    <InputContainer>
                        <TextInputMask
                            label='CEP'
                            name='cep'
                            value={placeCep}
                            onChange={(e) => { setPlaceCep(e.target.value) }}
                            placeholder={activePlaceRef.current.cep}
                            id='cep-input'
                            mask={CEPMask}
                            style={TextInputMaskStyle}
                        />
                        <TextInput
                            label='Rua'
                            name='street'
                            value={placeStreet}
                            onChange={(e) => { setPlaceStreet(e.target.value) }}
                            placeholder={activePlaceRef.current.rua}
                            id='street-input'
                        />
                    </InputContainer>
                    <InputContainer>
                        <TextInput
                            label='Número'
                            name='number'
                            value={placeNumber}
                            onChange={(e) => { setPlaceNumber(e.target.value) }}
                            placeholder={activePlaceRef.current.numero}
                            id='number-input'
                        />
                        <TextInput
                            label='Bairro'
                            name='district'
                            value={placeDistrict}
                            onChange={(e) => { setPlaceDistrict(e.target.value) }}
                            placeholder={activePlaceRef.current.bairro}
                            id='district-input'
                            inputContainerStyle={TextInputStyle}
                        />
                    </InputContainer>
                    <InputContainer>
                        <TextInput
                            label='Cidade'
                            name='city'
                            value={placeCity}
                            onChange={(e) => { setPlaceCity(e.target.value) }}
                            placeholder={activePlaceRef.current.cidade}
                            id='city-input'
                        />
                        <TextInput
                            label='Estado'
                            name='state'
                            value={placeState}
                            onChange={(e) => { setPlaceState(e.target.value) }}
                            placeholder={activePlaceRef.current.estado}
                            id='state-input'
                            inputContainerStyle={TextInputStyle}
                        />
                    </InputContainer>
                </InputsContainer>
            </ModalBox>

            <ModalBox
                isOpen={activeModal === 'delete-place'}
                onRequestClose={handleCloseModal}
                modalClassName='active-modal-delete'
                overlayClassName='react-modal-overlay'
                title='Confirmação de exclusão'
                confirmButtonTitle='Excluir'
                onCancel={handleCloseModal}
                onConfirm={handleDeletePlace}
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
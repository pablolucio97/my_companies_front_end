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
    NoDataContainer
} from '@styles/sharedStyles';
import { Header } from '@components/Header'
import { Button } from '@components/Button';
import { ModalBox } from '@components/Modal'
import { useState } from 'react';
import { TextInput } from '@components/TextInput'
import { TextInputMask } from '@components/TextInputMask';
import { CEPMask } from '@utils/masks';
import { MdArrowBack } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { PlaceCard } from '@components/PlaceCard';
import { CardList } from '@components/CardList';

export default function Places() {

    const [modal, setModal] = useState('')

    function handleCloseModal() {
        setModal('')
    }

    const placeName = 'Local do Janiu Rua 1'
    const places = [1]

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

    return (
        <Container>
            <Header renderStaticTitle={false} />
            <Main>
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
                {
                    places.length === 0 ?
                        <NoDataContainer>
                            <Title
                                content='Nenhuma local cadastrado!'
                            />
                            <Button
                                title='Adicionar local'
                                onClick={() => setModal('register-place')}
                            />
                        </NoDataContainer>
                        :
                        <ContentContainer>
                            <Button
                                title='Adicionar empresa'
                                onClick={() => setModal('register-Place')}
                            />
                            <CardList
                                showTotalPlacesColumn={false}
                            >
                                {
                                    places.map(place => (
                                        <PlaceCard
                                            key={place}
                                            place='Empresa 1'
                                            onDelete={handleDeletePlace}
                                            onEdit={handleEditPlace}
                                        />
                                    ))
                                }
                            </CardList>
                        </ContentContainer>
                }
            </Main>
            <ModalBox
                isOpen={modal === 'register-place'}
                onRequestClose={handleCloseModal}
                modalClassName='active-modal'
                overlayClassName='react-modal-overlay'
                title='Adicionar local'
                confirmButtonTitle='Adicionar'
                onCancel={handleCloseModal}
                onConfirm={() => setModal('register-place')}
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
                isOpen={modal === 'edit-place'}
                onRequestClose={handleCloseModal}
                modalClassName='active-modal'
                overlayClassName='react-modal-overlay'
                title={`Editar: ${placeName}`}
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
                isOpen={modal === 'delete-place'}
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
                        O local
                        <Strong>{placeName}</Strong>
                        será excluído. Tem certeza dessa ação?
                    </Text>
                </TextDeleteContainer>
            </ModalBox>
        </Container>
    )
}
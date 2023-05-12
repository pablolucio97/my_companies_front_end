import { Title } from '@components/Title';
import {
    Container,
    InputContainer,
    Form,
    TextInputStyle,
    TextInputMaskStyle
 } from './styles';
import {
    ContentContainer,
    Main,
    NameInputStyle,
    Strong,
    TextDeleteContainer,
    Text
} from '@styles/sharedStyles';
import { Header } from '@components/Header'
import { Button } from '@components/Button';
import { ModalBox } from '@components/Modal'
import { useState } from 'react';
import { TextInput } from '@components/TextInput'
import { TextInputMask } from '@components/TextInputMask';
import { CEPMask, CNPJMask } from '@utils/masks';

export default function Places() {

    const [modal, setModal] = useState('')

    function handleCloseModal() {
        setModal('')
    }

    const placeName = 'Local do Janiu Rua 1'

    return (
        <Container>
            <Header renderStaticTitle={false} />
            <Main>
                <ContentContainer>
                    <Title
                        content='Nenhuma local cadastrado!'
                    />
                    <Button
                        title='Adicionar local'
                        onClick={() => setModal('delete-place')}
                    />
                </ContentContainer>
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
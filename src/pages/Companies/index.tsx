import { Title } from '@components/Title';
import {
    Container,
    Form,
    InputContainer,
    NameInputStyle,
    TextDeleteContainer,
    Text,
    Strong
} from './styles';
import { ContentContainer, Main } from '@styles/sharedStyles';
import { Header } from '@components/Header'
import { Button } from '@components/Button';
import { ModalBox } from '@components/Modal'
import { useState } from 'react';
import { TextInput } from '@components/TextInput'
import { TextInputMask } from '@components/TextInputMask';

export default function Companies() {

    const [modal, setModal] = useState('')

    function handleCloseModal() {
        setModal('')
    }

    const companyName = 'Empresa do Janiu (Caucaia)'

    return (
        <Container>
            <Header renderStaticTitle />
            <Main>
                <ContentContainer>
                    <Title
                        content='Nenhuma empresa cadastrada!'
                    />
                    <Button
                        title='Adicionar empresa'
                        onClick={() => setModal('delete-company')}
                    />
                </ContentContainer>
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
                            mask='99.999.999/9999-99'
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
                            mask='99.999.999/9999-99'
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
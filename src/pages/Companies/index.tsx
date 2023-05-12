import { Title } from '@components/Title';
import { Container, Form, InputContainer, NameInputStyle } from './styles';
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
                        onClick={() => setModal('test')}
                    />
                </ContentContainer>
            </Main>
            <ModalBox
                isOpen={modal.length > 0}
                onRequestClose={handleCloseModal}
                modalClassName='active-modal'
                overlayClassName='react-modal-overlay'
                title='Adicionar empresa'
                confirmButtonTitle='Adicionar'
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
        </Container>
    )
}
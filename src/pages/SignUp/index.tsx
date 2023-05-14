import {
    Container,
    IntroductionContainer,
    IntroductionImageContainer,
    IntroductionContentContainer,
    FormContainer,
    LogoContainer,
    Form
} from '@styles/sharedStyles'

import { Button } from '@components/Button'
import background from '@assets/background.svg'
import { Title } from '@components/Title'
import { Text } from '@components/Text'
import { TextInput } from '@components/TextInput'
import { Link } from 'react-router-dom'
import { Logo } from '@components/Logo'
import { FormEvent, useState } from 'react'
import { registerUser } from '@services/bff'
import { showErrorToast, showSuccessToast } from '@utils/toast'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const navigate = useNavigate()

    async function handleRegisterUser(e: FormEvent) {
        e.preventDefault()
        const registerData = {
            nome: name,
            email,
            senha: password,
        }
        if (password !== passwordConfirmation || !name || !password || !email) {
            showErrorToast('Verfique se todos os dados foram preenchidos corretamente.')
        } else {
            try {
                await registerUser(registerData).then(() => {
                    showSuccessToast('Usuário criado com sucesso!');
                    navigate('/')
                })
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <Container>
            <IntroductionContainer>
                <IntroductionImageContainer>
                    <img
                        src={background}
                        alt="hublocal-background"
                        width='100%'
                        height='565px'
                    />
                </IntroductionImageContainer>
                <IntroductionContentContainer>
                    <Title
                        content='Junte-se a vários clientes satisfeitos.'
                    />
                    <Text
                        content='Cliente HubLocal ganha mais relevância, autoridade e visibilidade. Mais de 7.000 marcas confiam na nossa plataforma. Seja uma delas!'
                    />
                </IntroductionContentContainer>
            </IntroductionContainer>
            <FormContainer>
                <LogoContainer>
                    <Logo />
                </LogoContainer>
                <Form
                    onSubmit={handleRegisterUser}
                >
                    <TextInput
                        label='Nome'
                        name='name'
                        required
                        id='name-input'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextInput
                        label='Email'
                        name='email'
                        type='email'
                        required
                        id='email-input'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextInput
                        label='Senha'
                        name='password'
                        type='password'
                        required
                        id='password-input'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextInput
                        label='Repetir Senha'
                        type='password'
                        name='password-repeat'
                        required
                        id='password-repeat-input'
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                    <Button
                        title='REGISTRAR'
                        type='submit'
                    />
                    <Link to='/'>
                        <Button
                            title='LOGAR'
                            variant='secondary'
                        />
                    </Link>
                </Form>
            </FormContainer>
        </Container>
    )
}

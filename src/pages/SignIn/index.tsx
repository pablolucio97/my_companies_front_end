import {
    Container,
    IntroductionContainer,
    IntroductionImageContainer,
    IntroductionContentContainer,
    FormContainer,
    Form,
    LogoContainer
} from '@styles/sharedStyles'

import { Button } from '@components/Button'
import background from '@assets/background.svg'
import { Title } from '@components/Title'
import { Text } from '@components/Text'
import { TextInput } from '@components/TextInput'
import { Logo } from '@components/Logo'
import { Link, useNavigate } from 'react-router-dom'
import { authenticateUser } from '@services/bff'
import { FormEvent, useState } from 'react'
import { showErrorToast } from '@utils/toast'
import { IAuthUserResponse } from 'interfaces/bff'
import { useDispatch } from 'react-redux'
import { signIn } from '@store/auth/auth.store'

export default function SignIn() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()

    async function handleSignIn(e: FormEvent) {
        e.preventDefault()
        const authData = {
            email,
            senha: password
        }
        if (!email || !password) {
            showErrorToast('Verifique se todos os dados foram preenchidos corretamente.')
        } else {
            try {
                const data: unknown = await authenticateUser(authData)
                if ((data as IAuthUserResponse).data) {
                    const parsedToken = JSON.stringify((data as IAuthUserResponse).data.token.token)
                    localStorage.setItem('@my-companies:authToken', parsedToken)
                    const user = (data as IAuthUserResponse).data.usuario
                    dispatch(signIn({
                        nome: user.nome,
                        id: user.id
                    }))
                    console.log(user)
                }
                if ((data as IAuthUserResponse).message === 'Email ou senha incorretos.') {
                    showErrorToast('Email ou senha incorretos.')
                }
                else {
                    navigate('/empresas')
                }
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
                    onSubmit={handleSignIn}
                >
                    <TextInput
                        label='Email'
                        name='email'
                        id='email-input'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextInput
                        label='Senha'
                        name='password'
                        id='password-input'
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        title='LOGAR'
                        type='submit'
                    />
                    <Link to='/cadastro'>
                        <Button
                            title='CRIAR CONTA'
                            variant='secondary'
                        />
                    </Link>
                </Form>
            </FormContainer>
        </Container>
    )
}

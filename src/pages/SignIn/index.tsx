import {
    Container,
    IntroductionContainer,
    IntroductionImageContainer,
    IntroductionContentContainer,
    FormContainer,
    FormContentContainer,
    LogoContainer
} from '@styles/sharedStyles'

import { Button } from '@components/Button'
import background from '@assets/background.svg'
import { Title } from '@components/Title'
import { Text } from '@components/Text'
import { TextInput } from '@components/TextInput'
import { Logo } from '@components/Logo'
import { Link } from 'react-router-dom'

export default function SignIn() {
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
                <FormContentContainer>
                    <TextInput
                        label='Email'
                        name='email'
                        id='email-input'
                    />
                    <TextInput
                        label='Senha'
                        name='password'
                        id='password-input'
                    />
                    <Button
                        title='LOGAR'
                    />
                    <Link to='/cadastro'>
                        <Button
                            title='CRIAR CONTA'
                            variant='secondary'
                        />
                    </Link>
                </FormContentContainer>
            </FormContainer>
        </Container>
    )
}

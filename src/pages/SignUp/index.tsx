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
import logo from '@assets/logo.svg'
import { Title } from '@components/Title'
import { Text } from '@components/Text'
import { TextInput } from '@components/TextInput'

export default function SignUp() {
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
                    <img
                        src={logo}
                        alt='hublocal-logo'
                        width='306px'
                        height='107px'
                    />
                </LogoContainer>
                <FormContentContainer>
                    <TextInput
                        label='Nome'
                        name='name'
                        id='name-input'
                    />
                    <TextInput
                        label='Senha'
                        name='password'
                        id='password-input'
                    />
                    <TextInput
                        label='Senha'
                        name='password'
                        id='password-input'
                    />
                    <TextInput
                        label='Repetir Senha'
                        name='password-repeat'
                        id='password-repeat-input'
                    />
                    <Button
                        title='REGISTRAR'
                    />
                    <Button
                        title='CRIAR CONTA'
                        variant='secondary'
                    />
                </FormContentContainer>
            </FormContainer>
        </Container>
    )
}

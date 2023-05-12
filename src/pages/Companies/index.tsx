import { Title } from '@components/Title';
import { Container } from './styles';
import { ContentContainer, Main } from '@styles/sharedStyles';
import { Header } from '@components/Header'
import { Button } from '@components/Button';

export default function Companies() {
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
                    />
                </ContentContainer>
            </Main>
        </Container>
    )
}
import { Title } from '@components/Title';
import { Container } from './styles';
import { ContentContainer, Main } from '@styles/sharedStyles';
import { Header } from '@components/Header'
import { Button } from '@components/Button';

export default function Places() {
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
                    />
                </ContentContainer>
            </Main>
        </Container>
    )
}
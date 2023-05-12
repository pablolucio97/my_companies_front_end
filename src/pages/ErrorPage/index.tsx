import { Container } from './styles';
import { Button } from '@components/Button';
import { Link } from 'react-router-dom'
import { Logo } from '@components/Logo';
import { SubTitle } from '@components/SubTitle';

export default function ErrorPage() {
  return (
    <Container>
      <Logo />
      <SubTitle
        content='Página não encontrada'
      />
      <Link to='/'>
        <Button
          title='Voltar para tela inicial'
        />
      </Link>
    </Container>
  )
}

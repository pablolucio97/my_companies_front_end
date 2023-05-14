import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
`
export const InputsContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin-bottom: ${({ theme }) => theme.sizes[10]};
padding: ${({ theme }) => theme.sizes[4]};
& input{
    width: 100%;
    height: 40px;
}`

export const InputContainer = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 4rem;
& input{
    width: 100%;
}
@media(max-width: 768px){
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`

export const BackButtonContainer = styled.div`
width: 100%;
height: 40px;
display: flex;
align-items: center;
padding: ${({ theme }) => theme.sizes[6]} ${({ theme }) => theme.sizes[4]};
cursor: pointer;
`

export const BackButtonText = styled.p`
  font-size: ${({ theme }) => theme.sizes[5]};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.title};
  @media(max-width: 768px){
    font-size: ${({ theme }) => theme.sizes[3]};
  }
`

export const TextInputMaskStyle = {
    marginRight: '48px'
}

export const TextInputStyle = {
    marginLeft: '48px',
}

export const TextInputStyleMobile = {
    marginLeft: '0',
}

export const ArrowBackIconStyle = {
    marginRight: '8px',
    width: '40px',
    height: '40px',
    color: '#373737',
}




import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 100vh;
display: grid;
grid-template-columns: 1fr 1fr;
`

export const IntroductionContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
background-color: ${({ theme }) => theme.colors.primary};
`
export const IntroductionImageContainer = styled.div`
display: flex;
width: 100%;
flex: 1;
flex-direction: column;
justify-content: flex-end;
`

export const IntroductionContentContainer = styled.div`
width: 100%;
height: 280px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: ${({ theme }) => theme.colors.secondary};

& h1, p{
    max-width: 560px;
    color: ${({ theme }) => theme.colors.textLight};
    text-align: center;
}

& h1{
    font-size: ${({ theme }) => theme.sizes[8]};
    line-height:  ${({ theme }) => theme.sizes[8]};
    margin-bottom:  ${({ theme }) => theme.sizes[5]};
}

& p{
    font-size: ${({ theme }) => theme.sizes[4]};
    line-height:  ${({ theme }) => theme.sizes[5]};
}
`

export const FormContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: ${({ theme }) => theme.colors.backgroundLight};

& button{
    margin-top: ${({ theme }) => theme.sizes[4]};
}

& input{
    margin-bottom: ${({ theme }) => theme.sizes[0]};
}

& img{
    margin-bottom: ${({ theme }) => theme.sizes[4]};
    object-fit: contain;
}

`

export const LogoContainer = styled.div`
width: 400px;
display: flex;
justify-content: center;
align-items: center;
`

export const FormContentContainer = styled.div`
width: 400px;
display: flex;
flex-direction: column;
margin-bottom: ${({ theme }) => theme.sizes[8]};
`

export const Main = styled.main`
width: 100%;
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
background-color: ${({ theme }) => theme.colors.background};
`

export const NoDataContainer = styled.div`
width: 100%;
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
padding-top:  ${({ theme }) => theme.sizes[4]};
margin: 0 auto 10rem;
& h1{
    max-width: 560px;
    text-align: center;
    margin:  10rem auto ${({ theme }) => theme.sizes[4]};
}
`

export const ContentContainer = styled.div`
width: 100%;
flex: 1;
display: flex;
flex-direction: column;
align-items: flex-end;
padding:  ${({ theme }) => theme.sizes[4]};
`

export const TextDeleteContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
padding: 0 ${({ theme }) => theme.sizes[4]};
margin-bottom: ${({ theme }) => theme.sizes[10]};
`

export const Text = styled.p`
  font-size: ${({ theme }) => theme.sizes[4]};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  @media (max-width: 992px) {
    font-size: ${({ theme }) => theme.sizes[3]};
  }
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes[2]};
  }
`;

export const Strong = styled.strong`
  font-size: ${({ theme }) => theme.sizes[4]};
  font-weight: 500;
  margin: 0 4px;
  color: ${({ theme }) => theme.colors.text};
  @media (max-width: 992px) {
    font-size: ${({ theme }) => theme.sizes[3]};
  }
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes[2]};
  }
`;

export const ErrorText = styled.p`
  font-size: ${({ theme }) => theme.sizes[2]}px;
  font-weight: 400;
  text-align: justify;
  margin: 4px 0;
  color: ${({ theme }) => theme.colors.error};
`
export const ErrorFetchContainer = styled.div`
display: flex;
`

export const NameInputStyle = {
  width: '100%',
}
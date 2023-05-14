import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 100vh;
display: grid;
grid-template-columns: 1fr 1fr;
@media(max-width: 1200px){
  grid-template-columns: 1fr;
}
`

export const IntroductionContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
background-color: ${({ theme }) => theme.colors.primary};
@media(max-width: 768px){
  height: 900px;
}
@media(max-width: 480px){
  height: 750px;
}
@media(max-width: 320px){
  height: 650px;
}
`
export const IntroductionImageContainer = styled.div`
display: flex;
width: 100%;
flex: 1;
@media(max-width: 768px){
  flex: .25
}
& img{
  @media(max-width: 768px){
  height: 400px;
  margin-top: 8rem;
  }
  @media(max-width: 480px){
  height: 320px;
  margin-top: 4rem;
  }
  @media(max-width: 320px){
    height: 280px;
    margin-left: -4rem;
}
}
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

@media(max-width: 768px){
  height: 400px;
}

@media(max-width: 480px){
  height: 600px
  background-color: ${({ theme }) => theme.colors.error};
}

@media(max-width: 320px){
  height: 500px
}


& h1, p{
    max-width: 560px;
    color: ${({ theme }) => theme.colors.textLight};
    text-align: center;
    @media(max-width: 480px){
     margin-left: -15%;
    }
    @media(max-width: 320px){
     margin-left: -30%;
    }
}

& h1{
    font-size: ${({ theme }) => theme.sizes[8]};
    line-height:  ${({ theme }) => theme.sizes[8]};
    margin-bottom:  ${({ theme }) => theme.sizes[5]};
    @media(max-width: 480px){
      font-size: ${({ theme }) => theme.sizes[6]};
      width: 300px;
      margin-top:  ${({ theme }) => theme.sizes[5]};
    }
    @media(max-width: 320px){
      font-size: ${({ theme }) => theme.sizes[5]};
    }
}

& p{
    font-size: ${({ theme }) => theme.sizes[4]};
    line-height:  ${({ theme }) => theme.sizes[5]};
    @media(max-width: 480px){
      font-size: ${({ theme }) => theme.sizes[3]};
      width: 240px;
    }
    @media(max-width: 320px){
      font-size: ${({ theme }) => theme.sizes[2]};
      width: 240px;
    }
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
    @media(max-width: 480px){
    width: 83%;
    }
    @media(max-width: 320px){
    width: 68%;
    }
}

& input{
    margin-bottom: ${({ theme }) => theme.sizes[0]};
    @media(max-width: 480px){
    width: 83%;
    }
    @media(max-width: 320px){
    width: 68%;
    }
}

& img{
    margin-bottom: ${({ theme }) => theme.sizes[4]};
    object-fit: contain;
    @media(max-width: 480px){
    width: 240px;
    margin-left: -25%;
    }
    @media(max-width: 320px){
    margin-left: -30%;
    }
}

@media(max-width: 768px){
  padding: 4rem 1rem 0;
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
    @media(max-width: 768px){
      max-width: 300px;
    }
  }
& button{
    max-width: 300px;
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
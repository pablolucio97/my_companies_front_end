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
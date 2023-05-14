import styled, { css } from 'styled-components'

export const Container = styled.div`
width: 100%;
display: flex;
${({ theme }) => css`
background-color: ${theme.colors.backgroundLight};
color: ${theme.colors.text};
border-bottom: 1px solid ${theme.colors.backgroundGrey};
border-top: 1px solid ${theme.colors.backgroundGrey};
padding: ${theme.sizes[4]};
`}
`
export const Text = styled.p`
  font-size: ${({ theme }) => theme.sizes[3]};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  @media(max-width: 768px){
    font-size: ${({ theme }) => theme.sizes[1]};
  }
`;

export const PlaceNameContainer = styled.div`
display: flex;
flex: 1;
`

export const ActionsContainer = styled.div`
width: 40%;
min-width: 160px;
display: flex;
justify-content: center;
background-color: ${({ theme }) => theme.colors.backgroundLight};

& img{
    width: 30px;
    height: 30px;
    margin-left: 16px;
    @media(max-width: 768px){
        width: 20px;
        height: 20px;
        margin-left: 8px;
        }
}

`

export const Button = styled.button`
  background: none;
`
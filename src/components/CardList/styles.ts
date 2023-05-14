import styled, { css } from 'styled-components'

export const Container = styled.div`
width: 100%;
min-height: 400px;
display: flex;
flex-direction: column;
${({ theme }) => css`
background-color: ${theme.colors.backgroundLight};
color: ${theme.colors.text};
border-top: 1px solid ${theme.colors.backgroundGrey};
padding: ${theme.sizes[4]};
margin:  ${theme.sizes[6]} auto;
border-radius: 5px;
`}
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const HeaderContainer = styled.div`
width: 100%;
display: flex;
padding: ${({ theme }) => theme.sizes[4]};
`

export const CompanyNameContainer = styled.div`
display: flex;
flex: 1;
`

export const CompanyTotalPlacesContainer = styled.div`
width: 10%;
min-width: 80px;
display: flex;
justify-content: center;
`

export const ActionsContainer = styled.div`
width: 40%;
min-width: 80px;
display: flex;
justify-content: center;
background-color: ${({ theme }) => theme.colors.backgroundLight};
`

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.sizes[4]};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  @media(max-width: 768px){
    font-size: ${({ theme }) => theme.sizes[1]};
  }
`

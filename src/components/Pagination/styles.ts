import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 8px;
    margin: 0 auto;
    @media(max-width: 720px){
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
`

export const PagesCounterContainer = styled.div`
    max-width: 50%;
    display: flex;
    flex-direction: column;
    @media(max-width: 720px){
        width: 100%;
        justify-content: center;
    }
`

export const PageInfoContainer = styled.div`
width: 100%;
display: flex;
`

export const PageConfigurationContainer = styled.div`
width: 100%;
display: flex;
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    @media(max-width: 720px){
      width: 100%;
      
    }
    `

export const Text = styled.p`
  font-size: ${({ theme }) => theme.sizes[1]};
  font-weight: 300;
  color: green;
  text-align: justify;
  margin: 4px 0;
  color: ${({ theme }) => theme.colors.text};
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes[0]};
  }
  `;

export const StrongText = styled.strong`
  font-size: ${({ theme }) => theme.sizes[1]};
  font-weight: 400;
  text-align: justify;
  margin: 4px;
  color: ${({ theme }) => theme.colors.text};
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes[0]};
  }
  `;

export const Button = styled.button`
    height: 24px;
    margin: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.text};
    border-radius: 4px;
    font-size: ${({ theme }) => theme.sizes[1]};
    font-weight: 500;
    padding: 8px;
    border: none;
    outline: none;
    cursor: pointer;
    &:disabled{
      cursor: auto;
      background: ${({ theme }) => theme.colors.backgroundLight};
      color: ${({ theme }) => theme.colors.text};
    }
    @media (max-width: 720px) {
        height: 20px;
        padding: 0;
        font-size: ${({ theme }) => theme.sizes[0]};
        margin: 4px;
      }
      `

export const SelectInput = styled.select`
  width: 40px;
  max-height: 24px;
  overflow-y: visible;
  border-radius: 4px;
  margin: 4px;
  border: 2px solid ${({ theme }) => theme.colors.textLight};
  outline: none;
  font-size: ${({ theme }) => theme.sizes[1]}px;
  background-color: #FFFFFF;
  -moz-appearance: none;
  -webkit-appearance: none;
  /* background-image: url("/select_arrow.png"); */
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 1.32em auto, 100%;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  color: ${({ theme }) => theme.colors.title};
  
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
  
  &:disabled {
    background: ${({ theme }) => theme.colors.textLight};
  }
  
  @media (max-width: 720px) {
    margin: 0 auto;
    font-size: ${({ theme }) => theme.sizes[0]}px;
  }
  `;

export const Option = styled.option`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.sizes[1]}px;
  text-align: center;
  margin: 4px 0;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  color: ${({ theme }) => theme.colors.title};
  
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes[0]}px;
  }
  
  `;

export const SelectContainer = styled.div`
height: 32px;
overflow-y: visible;
`

export const SearchPagesContainer = styled.div`
  max-width: 50%;
  display: flex;
  `
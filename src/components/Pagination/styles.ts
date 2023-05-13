import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 8px;
  margin-top:  ${({ theme }) => theme.sizes[4]};
`

export const PagesCounterContainer = styled.div`
max-width: 50%;
display: flex;
flex-direction: column;
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
`

export const Text = styled.p`
  font-size: ${({ theme }) => theme.sizes[1]};
  font-weight: 300;
  color: green;
  text-align: justify;
  margin: 4px 0;
  color: ${({ theme }) => theme.colors.text};
  `;

export const StrongText = styled.strong`
  font-size: ${({ theme }) => theme.sizes[1]};
  font-weight: 500;
  text-align: justify;
  margin: 4px;
  color: ${({ theme }) => theme.colors.text};
  `;

export const Button = styled.button`
    height: 24px;
    margin: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    border-radius: 4px;
    font-size: ${({ theme }) => theme.sizes[1]};
    font-weight: 400;
    padding: 8px;
    border: none;
    outline: none;
    cursor: pointer;
    &:disabled{
      cursor: auto;
      background: ${({ theme }) => theme.colors.backgroundGrey};
      color: ${({ theme }) => theme.colors.text};
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
  
  `;

export const Option = styled.option`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.sizes[1]};
  text-align: center;
  margin: 4px 0;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  color: ${({ theme }) => theme.colors.title};
  `;

export const SelectContainer = styled.div`
height: 32px;
overflow-y: visible;
`

export const SelectInputContainer = styled.div`
display: flex;
border-right: 1px solid ${({ theme }) => theme.colors.backgroundGrey};
margin-right: 4px;
`

export const SearchPagesContainer = styled.div`
border: 1px solid ${({ theme }) => theme.colors.backgroundGrey};
padding: 4px ${({ theme }) => theme.sizes[0]} 0;
border-radius: 5px;
  max-width: 50%;
  display: flex;
  `
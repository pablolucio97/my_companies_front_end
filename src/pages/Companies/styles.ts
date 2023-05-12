import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
`

export const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
margin-bottom: ${({ theme }) => theme.sizes[10]};
padding: ${({ theme }) => theme.sizes[4]};
& input{
    width: 320px;
    height: 40px;
}
`

export const InputContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
& input{
    width: 300px;
}
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


export const NameInputStyle = {
    width: '100%',
}
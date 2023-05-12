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
}`

export const InputContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
& input{
    width: 300px;
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
`

export const TextInputMaskStyle = {
    marginRight: '48px'
}

export const TextInputStyle = {
    marginLeft: '48px'
}

export const ArrowBackIconStyle = {
    marginRight: '8px',
    width: '40px',
    height: '40px',
    color: '#373737',
}




import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
`

export const ContentContainer = styled.main`
width: 100%;
flex: 1;
padding: ${({theme}) => theme.sizes[4]};
background-color:  ${({theme}) => theme.colors.background};
`
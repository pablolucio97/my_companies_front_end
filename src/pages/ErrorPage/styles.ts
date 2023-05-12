import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

& h2{
    margin-bottom:  ${({ theme }) => theme.sizes[2]};
}

& img{
    width: 320px;
    height: 120px;
}

`
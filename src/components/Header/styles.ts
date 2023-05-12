import styled from 'styled-components'

export const Container = styled.header`
width: 100%;
height: 80px;
display: flex;
`

export const HeaderTitleContainer = styled.div`
display: flex;
flex:1;
align-items: center;
background-color:  ${({theme}) => theme.colors.backgroundLight};
padding: ${({theme}) => theme.sizes[4]};
`

export const HeaderUserContainer = styled.div`
width: 251px;
display: flex;
justify-content: center;
align-items: center;
background-color:  ${({theme}) => theme.colors.backgroundGrey};
`
export const AvatarContainer= styled.div`
width: 54px;
height: 54px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 27px;
border: 3px ${({theme}) => theme.colors.primary} solid;
`

export const BuildingsIconStyles = {
    width: '48px',
    height: '48px',
    marginRight: '8px'
}

export const ArrowDownIconStyles = {
    width: '24px',
    height: '24px',
}

export const UserTextStyle = {
    fontWeight: '500',
    margin: '0 40px 0 12px'
}
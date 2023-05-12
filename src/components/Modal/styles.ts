import Modal from 'react-modal';
import styled, { keyframes } from 'styled-components';

interface ModalBoxProps {
    showAnimation?: boolean;
    variant?: 'primary' | 'delete'
}

const modalAnimation = keyframes`
    0%{
      opacity: .8;
      transform: translateY(200px);
    };
    100%{
      opacity: 1;
    };
  `;

export const Container = styled(Modal) <ModalBoxProps>`
  min-height: 300px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 4px;
  padding: 16px;
  border: 0;
  animation: ${({ showAnimation }) => showAnimation && modalAnimation} 1s ease;
`;

export const TitleContainer = styled.div<ModalBoxProps>`
width: 100%;
height: 60px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 16px;
border-radius: 5px 5px 0 0;
background-color: ${({ theme, variant }) => variant === 'primary' ?
        theme.colors.primary :
        theme.colors.error};
margin: 0;

& h2{
    color: ${({ theme }) => theme.colors.backgroundLight};
    font-size: ${({ theme }) => theme.sizes[4]};
    margin-left: ${({ theme }) => theme.sizes[3]};
}

`

export const Divider = styled.div`
width: 100%;
height: 2px;
background-color: ${({ theme }) => theme.colors.backgroundGrey};
`

export const ActionContainer = styled.div`
width: 100%;
height: 80px;
display: flex;
justify-content: flex-end;
align-items: center;
padding: 16px;
border-radius: 0 0 5px 5px;
background-color: ${({ theme }) => theme.colors.backgroundLight};
margin: 0;

  & button{
    width: 160px;
    height: 40px;
  }

`

export const CloseIconStyle = {
    width: '32px',
    height: '32px',
    color: ' #FFFFFF',
    cursor: 'pointer'
}
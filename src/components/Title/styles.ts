
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.sizes[8]};
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  @media(max-width: 768px){
    font-size: ${({ theme }) => theme.sizes[6]};
  }
  @media(max-width: 480px){
    font-size: ${({ theme }) => theme.sizes[5]};
  }
`;
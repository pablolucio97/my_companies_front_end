
import styled from 'styled-components';

export const SubTitle = styled.h2`
  font-size: ${({ theme }) => theme.sizes[7]};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  @media(max-width: 768px){
    font-size: ${({ theme }) => theme.sizes[4]};
  }
  @media(max-width: 480px){
    font-size: ${({ theme }) => theme.sizes[2]};
  }
`;
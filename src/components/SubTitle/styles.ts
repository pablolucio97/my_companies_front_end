
import styled from 'styled-components';

export const SubTitle = styled.h2`
  font-size: ${({ theme }) => theme.sizes[7]};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  @media (max-width: 992px) {
    font-size: ${({ theme }) => theme.sizes[5]};
  }
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes[3]};
  }
`;
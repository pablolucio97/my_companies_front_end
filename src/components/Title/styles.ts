
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.sizes[8]};
  font-weight: 800;
  color: ${({ theme }) => theme.colors.title};
  @media (max-width: 992px) {
    font-size: ${({ theme }) => theme.sizes[6]};
  }
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes[4]};
  }
`;
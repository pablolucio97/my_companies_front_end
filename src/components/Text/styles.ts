
import styled from 'styled-components';

export const Text = styled.p`
  font-size: ${({ theme }) => theme.sizes[4]};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.title};
  @media (max-width: 992px) {
    font-size: ${({ theme }) => theme.sizes[3]};
  }
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes[2]};
  }
`;
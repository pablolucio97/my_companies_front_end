
import styled from 'styled-components';

export const Text = styled.p`
  font-size: ${({ theme }) => theme.sizes[4]};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
`;
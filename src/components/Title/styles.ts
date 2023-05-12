
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.sizes[8]};
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
`;
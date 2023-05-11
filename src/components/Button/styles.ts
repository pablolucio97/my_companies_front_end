import styled, { css } from 'styled-components';
interface ButtonProps {
    variant?: 'primary' | 'secondary'
}

export const Container = styled.button<ButtonProps>`
  width: 400px;
  height: 60px;
  ${({ theme, variant }) => css`
  padding: ${theme.sizes[0]};
  border-radius: 5px;
  color: ${theme.colors.textLight};
  font-size: ${theme.sizes[3]};
  background-color: ${variant === 'secondary' ?
            theme.colors.secondary : theme.colors.primary};
`}
  font-weight: 700;
`;
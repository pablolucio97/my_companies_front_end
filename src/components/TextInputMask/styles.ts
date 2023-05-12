import styled, { css } from 'styled-components';
import input from 'react-input-mask'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  `;

export const Input = styled(input)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  ${({ theme }) => css`
  min-width: 120px;
  height: 60px;
  border-radius: 5px;
  padding: 0 ${theme.sizes[0]};
  background-color: ${theme.colors.backgroundLight};
  color: ${theme.colors.text};
  border: 2px solid ${theme.colors.primary};
  font-size: ${theme.sizes[2]};
  `}

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.secondary};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.textLight};
  }
`;

export const Label = styled.span`
  font-weight: 500;
  ${({ theme }) => css`
  color: ${theme.colors.label};
  font-size: ${theme.sizes[2]};
  margin: ${theme.sizes[0]};
  `}
`
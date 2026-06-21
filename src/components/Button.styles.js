import styled, { css } from 'styled-components';

const variantStyles = {
  primary: css`
    background-color: #3182ce;
    color: white;
    border: none;
    &:hover:enabled {
      background-color: #2b6cb0;
    }
  `,
  secondary: css`
    background-color: #e2e8f0;
    color: #2d3748;
    border: none;
    &:hover:enabled {
      background-color: #cbd5e1;
    }
  `,
  outline: css`
    background-color: transparent;
    color: #3182ce;
    border: 2px solid #3182ce;
    &:hover:enabled {
      background-color: #ebf8ff;
    }
  `,
};

const sizeStyles = {
  sm: css`
    padding: 4px 12px;
    font-size: 14px;
  `,
  md: css`
    padding: 8px 20px;
    font-size: 16px;
  `,
  lg: css`
    padding: 12px 28px;
    font-size: 18px;
  `,
};

export const StyledButton = styled.button`
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  ${(props) => variantStyles[props.$variant || 'primary']}
  ${(props) => sizeStyles[props.$size || 'md']}
`;

import styled, { css } from 'styled-components';

const typeStyles = {
  info: css`
    background-color: #e7f3fe;
    color: #2176bd;
    border: 1px solid #b3d8fd;
  `,
  success: css`
    background-color: #e6f9ed;
    color: #218838;
    border: 1px solid #b7ebc6;
  `,
  warning: css`
    background-color: #fffbe6;
    color: #856404;
    border: 1px solid #ffe58f;
  `,
  error: css`
    background-color: #fdecea;
    color: #a71d2a;
    border: 1px solid #f5c6cb;
  `,
};

export const StyledAlert = styled.div`
  padding: 12px 20px;
  border-radius: 4px;
  font-size: 1rem;
  margin: 10px 0;
  ${(props) => typeStyles[props.$type || 'info']}
`;

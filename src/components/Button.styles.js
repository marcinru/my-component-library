import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  ${(props) =>
    props.$variant === 'primary' &&
    css`
      background-color: #007bff;
      color: white;

      &:hover {
        background-color: #0056b3;
      }
    `}

  ${(props) =>
    props.$variant === 'secondary' &&
    css`
      background-color: #6c757d;
      color: white;

      &:hover {
        background-color: #5a6268;
      }
    `}
`;

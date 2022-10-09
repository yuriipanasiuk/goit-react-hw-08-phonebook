import styled from 'styled-components';

export const InputText = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Input = styled.input`
  width: 160px;
  height: 20px;
  padding-left: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  border: 1px solid rgba(33, 33, 33, 0.2);

  :focus-within {
    border: 1px solid #337ab7;
    outline: none;
  }
`;

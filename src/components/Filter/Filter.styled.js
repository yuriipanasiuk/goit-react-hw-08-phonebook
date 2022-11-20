import styled from 'styled-components';

export const InputText = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Input = styled.input`
  width: 260px;
  height: 20px;
  margin-right: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: ${p => p.theme.radii.normal};
  font-size: ${p => p.theme.fontSizes.l};

  :focus-within {
    border: 1px solid #337ab7;
    outline: none;
  }
`;

import styled from 'styled-components';
import { HiUser, HiDeviceMobile } from 'react-icons/hi';

export const FormStyled = styled.form`
  border: 1px solid black;
  padding: 10px;
`;

export const LabelName = styled.span`
  color: black;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Input = styled.input`
  width: 160px;
  height: 20px;
  margin-bottom: ${p => p.theme.space[4]}px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  background-color: ${p => p.theme.colors.white};
  padding-left: 24px;

  :focus {
    border: 1px solid #337ab7;
    outline: none;
  }
`;

export const InputLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  color: black;
  transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :focus-within {
    color: #337ab7;
  }
`;

export const NameIcon = styled(HiUser)`
  position: absolute;
  top: 45%;
  left: ${p => p.theme.space[2]}px;
  fill: currentColor;
`;

export const NumIcon = styled(HiDeviceMobile)`
  position: absolute;
  top: 45%;
  left: ${p => p.theme.space[2]}px;
  fill: currentColor;
`;

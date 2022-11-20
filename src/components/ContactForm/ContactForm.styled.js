import styled from 'styled-components';

export const Form = styled.form`
  border: 2px inset #1e90ff;
  padding: 10px;
  border-radius: ${p => p.theme.radii.normal};
`;

export const Input = styled.input`
  width: 260px;
  height: 20px;
  margin-bottom: ${p => p.theme.space[4]}px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  background-color: ${p => p.theme.colors.white};
  padding: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.l};
  border-radius: ${p => p.theme.radii.normal};

  :focus {
    border: 1px solid #337ab7;
    outline: none;
  }
`;

export const Wraper = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  color: black;
  transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :focus-within {
    color: #337ab7;
  }
`;

export const LabelName = styled.span`
  color: black;
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const ErrorMessage = styled.p`
  color: ${p => p.theme.colors.error};
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.l};
`;

export const Button = styled.button`
  width: 110px;

  display: block;
  background-color: ${p => p.theme.colors.btnBg};
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeight.bold};
  border-radius: ${p => p.theme.radii.normal};
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  border: none;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.btnHover};
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.75);
    color: ${p => p.theme.colors.black};
  }
`;

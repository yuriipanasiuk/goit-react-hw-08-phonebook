import styled from 'styled-components';

export const Layout = styled.section`
  background-color: ${p => p.theme.colors.pageBgColor};
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[4]}px;
  border: 5px outset #1e90ff;
`;

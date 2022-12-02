import styled from 'styled-components';

export const Header = styled.header`
  padding-top: 16px;
  padding-bottom: 16px;
  /* margin-bottom: 16px; */
  border-bottom: 1px solid #2a363b;
  box-shadow: ${p => p.theme.shadows.shadow};
`;

export const Container = styled.div`
  width: 1280px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
`;

export const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1280px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
`;

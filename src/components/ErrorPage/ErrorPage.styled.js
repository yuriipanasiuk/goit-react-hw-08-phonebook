import styled from 'styled-components';
import { Link as LinkHome } from 'react-router-dom';

export const Link = styled(LinkHome)`
  text-transform: uppercase;
  font-weight: 700;
  color: black;
  :hover {
    color: ${p => p.theme.colors.hover};
  }
`;

export const ErrorPageText = styled.p`
  font-size: 300px;
  text-align: center;
  margin-bottom: 36px;
`;

export const NoticeText = styled.p`
  text-align: center;
  /* color: #562020; */
  text-transform: uppercase;
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 8px;
`;

export const DirectionText = styled.p`
  margin-right: 8px;
`;

export const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

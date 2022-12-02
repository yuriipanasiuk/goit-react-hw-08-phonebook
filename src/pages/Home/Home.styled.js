import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Img from '../../img/table.jpeg';

export const Container = styled.div`
  background-image: url(${Img});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 38px;
  text-align: center;
`;

export const StyledLink = styled(NavLink)`
  font-size: 38px;
  color: #bc3838;
  text-decoration: none;

  :hover {
    color: orange;
    text-decoration: underline;
  }
`;

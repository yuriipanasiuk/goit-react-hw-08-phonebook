import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.fontSizes.xl};
  &.active {
    color: orange;
    text-decoration: underline;
  }
  :not(.active) {
    :hover {
      color: ${p => p.theme.colors.textColor};
    }
  }
  :not(:last-child) {
    margin-right: ${p => p.theme.space[4]}px;
  }
`;

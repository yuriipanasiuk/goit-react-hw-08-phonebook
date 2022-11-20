import styled from 'styled-components';

export const PhoneContactTitle = styled.h1`
  margin-bottom: ${p => p.theme.space[4]}px;
  text-shadow: ${p => p.theme.shadows.titleShadow};
`;

export const ContactListTitle = styled.h2`
  margin-right: ${p => p.theme.space[6]}px;
  text-shadow: ${p => p.theme.shadows.titleShadow};
`;

export const Notice = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: red;
  text-shadow: ${p => p.theme.shadows.noticeShadow};
`;

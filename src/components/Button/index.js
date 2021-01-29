import React from 'react';
import styled from 'styled-components';

import db from '../../../db.json';

const ButtonBase = styled.button`
  width: 281px;
  height: 38px;
  background: ${db.theme.colors.primary};

  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  border-radius: 4px;

  color: ${db.theme.colors.secondary};
  font-weight: bold;
`;

const Button = ({ type, disabled, text }) => (
  <ButtonBase type={type} disabled={disabled}>
    { text }
  </ButtonBase>
);

export default Button;

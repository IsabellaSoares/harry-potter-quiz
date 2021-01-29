import React from 'react';
import styled from 'styled-components';

import db from '../../../db.json';

const InputBase = styled.input`
  width: 281px;
  height: 38px;
  border-radius: 3.5px;
  margin-bottom: 25px;
  border: none;
  padding: 10px;

  &:focus {
    outline-color: ${db.theme.colors.secondary};
  }
`;

const Input = ({ placeholder, value, name, onChange }) => {
  return (
    <InputBase
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
    />
  );
}

export default Input;

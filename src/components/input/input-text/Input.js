import React from 'react';
import { Icon } from '../../icon/Icon';
import './style.scss';

export const Input = ({
  type = 'text',
  name,
  value = '',
  onChange,
  placeholder = '',
  iconName,
  iconSize,
  required = true
}) => (
  <div className='lpx-input-container'>
    <Icon name={iconName} size={iconSize} />
    <div className="lpx-input">
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required={required}
        />
      <label htmlFor={name}>{placeholder}</label>
    </div>
  </div>
)

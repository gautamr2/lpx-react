import React from 'react'
import './style.scss'

export const Input = ({
  type = 'text',
  name,
  value = '',
  onChange,
  placeholder = '',
  icon = 'fa-user-o',
  required
}) => (
  <div class="lpx-input">
    {/* <Icon name={icon} /> */}
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      required={required}
    />
    <label for={name}>{placeholder}</label>
  </div>
)

import React from 'react'
import './style.scss'

export const Input = ({
  type = 'text',
  name,
  value = '',
  onChange,
  placeholder = '',
  required = true
}) => (
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
)

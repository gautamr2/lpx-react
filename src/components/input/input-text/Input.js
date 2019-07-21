import React from 'react'
import './style.scss'

export const Input = ({
  type = 'text',
  name,
  value = '',
  onChange,
  placeholder = ''
}) => (
  <div className="lpx-input">
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
)

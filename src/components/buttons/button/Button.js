import React from 'react'
import './style.scss'

export const Button = ({
  text,
  type = '',
  value = '',
  children,
  onClick,
  varient,
  disabled = false
}) => (
  <button
    className={`button ${varient}`}
    type={type}
    value={value}
    onClick={onClick}
    disabled={disabled}
  >
    {children || text}
  </button>
)

import React from 'react'
import './style.scss'

export const Checkbox = ({ label = '', checked, name, onChange, required }) => (
  <label className="lpx-checkbox">
    <span>{label}</span>
    <input
      name={name}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      required={required}
    />
    <span className="checkmark" />
  </label>
)

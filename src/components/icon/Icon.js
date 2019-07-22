import React from 'react'
import './style.scss'

export const Icon = ({ name }) => (name ? <i className={`fa ${name}`} /> : null)

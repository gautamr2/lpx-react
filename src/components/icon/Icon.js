import React from 'react';
import './style.scss';

export const Icon = ({ name, size }) => (name ? <i className={`fa ${name}`} style={{ fontSize: size}}/> : null)

import React from 'react';
import './style.scss';

export const Icon = ({ name, size, clickable, onClick }) => (name ? <i onClick={onClick} className={`fa fa-${name} ${onClick || clickable ? 'clickable' : ''}`} style={{ fontSize: size}}/> : null)

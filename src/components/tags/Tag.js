import React from 'react';
import { hexToRgbA } from '../../utility/utility';
import './style.scss';

export const Tag = ({ label, color = '#0080ff' }) => <span className='lpx-tag' style={{ backgroundColor: hexToRgbA(color, .1), borderColor: hexToRgbA(color), color}}>{label}</span>

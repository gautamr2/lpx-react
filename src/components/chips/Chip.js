import React from 'react';
import { hexToRgbA } from '../../utility/utility';
import './style.scss';

export const Chip = ({ label, color = '#0080ff' }) => <span className='lpx-chip' style={{ backgroundColor: hexToRgbA(color, .2), borderColor: hexToRgbA(color)}}>{label}</span>

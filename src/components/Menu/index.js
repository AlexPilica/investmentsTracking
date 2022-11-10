import React from 'react';
import { Link } from 'react-router-dom';

import './menu.scss';

export const Menu = () => (
  <ul className="menu">
    <li><Link to="/">Home</Link></li>
  </ul>
);

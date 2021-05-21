/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about">
          About
        </Link>
      </li>
      <li>
        <Link to="/cart">
          Cart
        </Link>
      </li>
    </ul>
  </nav>
);

export default Header;

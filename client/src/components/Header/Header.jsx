import React from 'react';
import './styles.css';

const Header = () => (
  <nav>
    <ul>
      <li>
        <a href="/">
          Home
        </a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/cart">Cart</a>
      </li>
    </ul>
  </nav>
);

export default Header;

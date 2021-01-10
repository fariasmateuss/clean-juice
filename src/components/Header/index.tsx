import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { Nav, Logo, MenuLink, Search, Cart } from './styles';

const Header: React.FC = () => {
  return (
    <Nav>
      <Logo>
        Clean J<span>u</span>ice
      </Logo>

      <MenuLink>
        <span>Home</span>
        <span>Locations</span>
        <span>Our menu</span>
        <span>Our story</span>
        <span>Meet our teem</span>
        <span>Own a clean juice</span>
        <span>Contact us</span>
      </MenuLink>

      <Search>
        <FontAwesomeIcon icon={faSearch} size="sm" />
      </Search>

      <span className="account">My account</span>

      <Cart>
        <FontAwesomeIcon icon={faShoppingCart} size="sm" />
      </Cart>
    </Nav>
  );
};

export default Header;

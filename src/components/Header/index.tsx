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

      <div>
        <MenuLink>Home</MenuLink>
        <MenuLink>Locations</MenuLink>
        <MenuLink>Our menu</MenuLink>
        <MenuLink>Our story</MenuLink>
        <MenuLink>Meet our teem</MenuLink>
        <MenuLink>Own a clean juice</MenuLink>
        <MenuLink>Contact us</MenuLink>
      </div>

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

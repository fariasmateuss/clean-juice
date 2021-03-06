import styled from 'styled-components';
import { lighten } from 'polished';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
  text-transform: uppercase;
  font-weight: 600;
`;

export const Logo = styled.h1`
  font-size: 40px;
  font-weight: 550;
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.colors.span};
  }
`;

export const MenuLink = styled.span`
  & > span {
    display: inline-block;
    padding-right: 20px;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => lighten(0.3, theme.colors.inline)};
    }

    &:first-child {
      color: ${({ theme }) => theme.colors.span};
    }
  }
`;

export const Search = styled.span`
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => lighten(0.3, theme.colors.inline)};
  }
`;

export const Cart = styled(Search)``;

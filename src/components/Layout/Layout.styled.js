import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const Appbar = styled.header`
  width: 100%;
  background: radial-gradient(circle, rgba(255,218,0,0.5803571428571428) 0%, rgba(68,52,255,0.8016456582633054) 100%);
  box-shadow: 0px 10px 34px 10px rgba(224, 191, 48, 0.44);
`;

const Container = styled.div`
   margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 32px;
  padding-bottom: 32px;
  font-size: 28px;
  text-transform: capitalize;

  border-bottom: 4px solid transparent;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
        border-color: #0000a0;
        border-radius: 4px;
  }

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: #5218fa;
  }
`;

export { Appbar, Container, Navigation, NavItem };

import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 44px;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: calc((100% - 3 * 44px) / 4);
  box-shadow: 0 8px 18px rgba(0,60,255,0.57);
  border-radius: 25px 10px;
`;

const Item = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
`;

const Poster = styled.img`
  margin-top: 20px;
  height: 360px;
  width: 90%;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    transform: scale(1.035);
  }
`;

const Info = styled.div`
  padding: 30px 20px;
`;

export { List, ListItem, Item, Poster, Info };

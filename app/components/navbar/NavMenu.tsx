import { NavLink } from "@remix-run/react";
import styled from "styled-components";

import { at } from "../../mixins";

const Ul = styled.ul`
  list-style: none;
  text-align: center;
  padding: 0;
  margin-top: 0.5rem;

  & > li {
    padding: 1.5rem;
    border: 1px solid ${(props) => props.theme.colors.lines};
    margin-bottom: -1px;
  }

  & > li > a {
    color: ${(props) => props.theme.colors.primaryText};
    text-decoration: none;
    font-weight: bold;
  }

  ${at("lg")`
    display: inline;

    & > li {
      display: inline;
    }
  `}
`;

export default function NavMenu() {
  return (
    <Ul>
      <li>
        <NavLink to="/">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Github</NavLink>
      </li>
    </Ul>
  );
}

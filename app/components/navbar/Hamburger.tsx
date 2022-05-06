import styled from "styled-components";

import { useOuterClick } from "~/hooks/useOuterClick";

const Button = styled.button`
  width: 44px;
  height: 44px;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  color: ${(props) => props.theme.colors.primaryText};
  transition: all 0.1s ease-in-out;

  &:active {
    background-color: ${(props) => props.theme.colors.emphasis};
  }
`;

export default function Hamburger({ onClick }) {
  const innerRef = useOuterClick((e) => {
    onClick(false);
  });

  return (
    <div>
      <Button ref={innerRef} onClick={onClick}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="6"
            y="9"
            width="20"
            height="2"
            rx="1"
            fill="currentColor"
            transform-origin="0px 0px"
            style={{ transform: "none", transformOrigin: "0px 0px" }}
          ></rect>
          <rect
            x="6"
            y="15"
            width="20"
            height="2"
            rx="1"
            fill="currentColor"
            opacity="1"
          ></rect>
          <rect
            x="6"
            y="21"
            width="20"
            height="2"
            rx="1"
            fill="currentColor"
            transform-origin="0px 0px"
            style={{ transform: "none", transformOrigin: "0px 0px" }}
          ></rect>
        </svg>
      </Button>
    </div>
  );
}

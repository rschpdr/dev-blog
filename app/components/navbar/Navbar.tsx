import { useState, useEffect } from "react";
import { useTransition } from "@remix-run/react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

import logo from "../../assets/images/logo_dark.png";

import NavMenu from "./NavMenu";
import Hamburger from "./Hamburger";

const Nav = styled.nav`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
`;

const Logo = styled.img`
  width: 140px;
  height: auto;
`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const transition = useTransition();

  // close menu on navigation
  useEffect(() => {
    if (transition.state === "idle") {
      setIsOpen(false);
    }
  }, [transition.state]);

  function handleClick(newState = true) {
    setIsOpen((prevState) => (newState ? !prevState : false));
  }

  return (
    <Nav>
      <LogoContainer>
        <Logo src={logo} alt="logo" />
        <Hamburger onClick={handleClick} />
      </LogoContainer>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileNavMenu"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.25, ease: "linear" }}
          >
            <NavMenu />
          </motion.div>
        )}
      </AnimatePresence>
    </Nav>
  );
}

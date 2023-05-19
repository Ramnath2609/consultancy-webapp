import { useCallback, useState } from "react";
import styled, { css } from "styled-components";
import Logo from "../assets/logo.jpeg";
import { HashLink } from "react-router-hash-link";
import { FlexBox } from "./common-styles";
import Hamburger from "../assets/hamburger.svg";

const HeaderWrapper = styled.header`
    background-color: #fff;
    color: #0e0f11;
    position: fixed;
    top: 0;
    transition: transform .3s ease-out;
    width: 100%;
    z-index: 100;
`;

const Navbar = styled.nav`
    flex-direction: row;
    font-size: 14px;
    font-weight: 400;
    height: auto;
    line-height: 1.4285714286;
    overflow: visible;
    position: static;
    z-index: auto;
    transition: all 0.3s ease-in;
    @media (max-width: 1024px) {
        display: ${({ $isMobileMenuOpen }) => ($isMobileMenuOpen ? "flex" : "none")};
        ${({ $isMobileMenuOpen }) => ($isMobileMenuOpen ? mobileMenuSnippet : "")}
    }
`;

const mobileMenuSnippet = css`
    position: absolute;
    flex-direction: column;
    height: 200px;
    width: 100%;
    top: 100px;
    left: 0;
    box-shadow: 0px 5px 5px 5px #eee;
    background-color: #fff;
    > a {
        padding: 14px;
    }
`;

const Navlink = styled(HashLink)`
    display: inline-flex;
    text-decoration: none;
    color: #191919;
    padding: 5px 10px 3px;
    transition: color .2s ease-in-out;
    &:hover {
        color: #00c2ff;
    }
`;

const HeaderContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    transition: padding .3s ease-in-out;
    margin: 0 auto;
    max-width: 1110px;
    padding: 15px 15px;
    box-sizing: border-box;
`;

const HamburgerHolder = styled(FlexBox)`
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    cursor: pointer;
    @media (min-width: 1024px) {
        display: none;
    }
`;


export function Header() {
  const [isMobileMenuOpen, toggleMobileMenu] = useState(false);

  const onMenuClick = useCallback(() => toggleMobileMenu((prevState) => !prevState), []);

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <FlexBox margin="0 25px 0 0" height="50px" width="150px" justifyContent="space-between">
          <img src={Logo} alt="logo" height={50} />
          <h2>aarvam</h2>
        </FlexBox>
        <Navbar $isMobileMenuOpen={isMobileMenuOpen}>
          <Navlink smooth to="#services" onClick={onMenuClick}>
                    Services
          </Navlink>
          <Navlink smooth to="#technologies" onClick={onMenuClick}>
                    Technologies
          </Navlink>
          <Navlink smooth to="#contact" onClick={onMenuClick}>
                    Contact
          </Navlink>
          <Navlink smooth to="#about" onClick={onMenuClick}>
                    About
          </Navlink>
        </Navbar>
        <HamburgerHolder onClick={onMenuClick}>
          <img src={Hamburger} alt="mobile-menu" height={35} />
        </HamburgerHolder>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
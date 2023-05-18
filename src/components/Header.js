import styled from "styled-components";
import Logo from '../assets/logo.jpeg';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FlexBox } from "./common-styles";
import Hamburger from '../assets/hamburger.svg'

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
    @media (max-width: 1024px) {
        display: none;
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
    return (
        <HeaderWrapper>
            <HeaderContainer>
            <FlexBox margin="0 25px 0 0" height="50px" width="150px" justifyContent="space-between">
                <img src={Logo} alt="logo" height={50} />
                <h2>aarvam</h2>
            </FlexBox>
            <Navbar>
                <Navlink smooth to="#services">
                    Services
                </Navlink>
                <Navlink smooth to="#technologies">
                    Technologies
                </Navlink>
                <Navlink smooth to="#contact">
                    Contact
                </Navlink>
                <Navlink smooth to="#about">
                    About
                </Navlink>
            </Navbar>
                <HamburgerHolder>
                    <img src={Hamburger} alt="mobile-menu" height={35} />
                </HamburgerHolder>
            </HeaderContainer>
        </HeaderWrapper>
    );
}
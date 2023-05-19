import styled from "styled-components";
import Linkedin from "../assets/linkedin.svg";
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import { FlexBox } from "./common-styles";
import { useCallback } from "react";


const FooterWrapper = styled.footer`
    display: grid;
    grid-template: auto / 1fr auto;
    align-items: center;
    height: 100px;
    margin: 0 50px;
    background-color: #fff;
    @media (max-width: 500px) {
      display: flex;
      align-items: start;
      justify-content: center;
      flex-direction: column-reverse;
      height: 150px;
    }
`;

const CopyrightText = styled.p`
    font-size: 12px;
`;

const Icon = styled.img`
    width: 40px;
    filter: grayscale(1);
    cursor: pointer;
    transition: filter .2s ease-in-out;
    &:hover {
        filter: grayscale(0);
    }
    @media (max-width: 500px) {
      font-size: 14px;
    }
`;

const FollowUsText = styled.span`
    margin-right: 14px;
`;

const IconWrapper = styled.div`
    display: grid;
    grid-template: auto / repeat(3, 40px);
    grid-gap: 8px;
`;

export function Footer() {

  const onLinkedInClick = useCallback(() => {
    window.open("https://www.linkedin.com/company/aarvamtechsolutions/");
  }, []);
  return (
    <FooterWrapper>
      <CopyrightText>© 2023 Aarvam Technology Solutions.Inc. All rights reserved.</CopyrightText>
      <FlexBox alignItems="center" height="auto" margin="12px 0">
        <FollowUsText>Follow us on:</FollowUsText>
        <IconWrapper>
          <Icon src={Linkedin} onClick={onLinkedInClick} />
          <Icon src={Facebook} />
          <Icon src={Instagram} />
        </IconWrapper>
      </FlexBox>
    </FooterWrapper>
  );
}
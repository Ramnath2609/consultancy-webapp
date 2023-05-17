import styled from "styled-components";

const FooterWrapper = styled.footer`
    display: grid;
    align-items: center;
    height: 100px;
    margin-left: 50px;
    background-color: #fff;
`;

const CopyrightText = styled.p`
    font-size: 12px;
`;

export function Footer() {
    return (
        <FooterWrapper>
            <CopyrightText>© 2023 Aarvam Technology Solutions.Inc. All rights reserved.</CopyrightText>
        </FooterWrapper>
    );
}
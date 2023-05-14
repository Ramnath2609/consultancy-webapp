import styled from "styled-components";
import BannerImage from '../assets/banner.jpg'
import Typewriter from 'typewriter-effect';
import { FlexBox } from "./common-styles";

const BannerText = styled.p`
    font-size: 64px;
    font-weight: 700;
`;

const TypewriterBlock = styled.span`
    display: inline-flex;
    align-items: center;
    height: 80px;
    padding: 0 30px;
    margin-top: 20px;
    background-color: #bff0ff;
    border: 1px solid;
    border-radius: 65px;
    color: #00c2ff;
    .Typewriter {
        margin-left: 14px;
        display: inline-block;
    }
`;

const BannerBlock = styled(FlexBox)`
    position: relative;
    max-width: 1110px;
    margin: 0 auto;
    z-index: 2;
    overflow: visible;
`;

const Image = styled.img`
    position: absolute;
    width: 50%;
    right: 0;
`;

export function Banner() {
    return (
        <BannerBlock height="650px">
            <BannerText>Your competitive <br/> advantage <br />
                <TypewriterBlock>
                in 
                <Typewriter
                    options={{
                        strings: ['engineering', 'career', 'software'],
                        autoStart: true,
                        loop: true,
                    }}
                    />
                </TypewriterBlock>
            </BannerText>
            <Image src={BannerImage} />
        </BannerBlock>
    );
} 
import styled from "styled-components";
import BannerImage from '../assets/banner.jpg'
import Typewriter from 'typewriter-effect';
import { FlexBox } from "./common-styles";

const BannerText = styled.p`
    font-size: 60px;
    font-weight: 700;
    margin-left: 30px;
    z-index: 5;
    @media (max-width: 1024px) {
        font-size: 50px;
    }
    @media (max-width: 768px) {
        font-size: 36px;
    }
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
    margin-left: 14px;
    .Typewriter {
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
    width: 45%;
    right: 0;
    z-index: 1;
    margin-right: 30px;
    @media (max-width: 1024px) {
        width: 45%;
    }
`;

export function Banner() {
    return (
        <BannerBlock height="100vh" padding="0 0 85px 0">
            <BannerText>Accelerating success<br/> through 
                <TypewriterBlock>
                    <Typewriter
                        options={{
                            strings: ['technology', 'engineering', 'AI', 'innovation'],
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
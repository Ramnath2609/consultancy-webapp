import styled from "styled-components";
import About from '../assets/about.jpg';

const Container = styled.div`
    display: grid;
    grid-template: auto / 50% 50%;
    background-color: #fff;
    max-width: 1110px;
    margin: 0 auto;
    height: 600px;
    align-items: center;
`;

const TitleText = styled.h2`
    font-size: 64px;
    line-height: 1.25;
`;

const ImageHolder = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export function AboutUs() {
    return (
        <Container id="about">
            <div>
            <TitleText>About us</TitleText>
            <p>Introducing Aarvam Tech Solutions: Young, talented, and driven to win. Founded by successful entrepreneurs, we unleash success through innovative tech solutions. With fresh perspectives and boundless energy, we push boundaries and achieve remarkable results. Our team of experts specializes in technology, business, engineering, career, and software. We immerse ourselves in your vision, developing customized strategies for triumph. Leveraging the latest technologies, we help businesses achieve unparalleled growth and surpass the competition. Join us on a journey of innovation, growth, and triumph. Experience the winning drive that sets us apart.</p>
            </div>
            <ImageHolder>
            <img src={About} alt="about-us" width="90%" />
            </ImageHolder>
        </Container>
    );
}
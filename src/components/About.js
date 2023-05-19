import styled from "styled-components";
import About from "../assets/about.jpg";
import { GridLayout } from "./common-styles";

const Container = styled.div`
    display: grid;
    grid-template: auto / auto;
    background-color: #fff;
    max-width: 1110px;
    margin: 0 auto;
    min-height: 600px;
    align-items: center;
`;

const TitleText = styled.h2`
    font-size: 64px;
    line-height: 1.25;
    margin-left: 18px;
    margin-bottom: 0;
    @media (max-width: 600px) {
      font-size: 44px;
    }
`;

const ImageHolder = styled.div`
    display: flex;
    width: 100%;
    height: 70%;
    justify-content: center;
    align-items: center;
`;

const Description = styled.div`
    margin-left: 20px;
    margin-top: 30px;
`;

const Wrapper = styled(GridLayout)`
  align-items: center;
  @media (max-width: 600px) {
      grid-template-rows: auto auto;
      grid-template-columns: 100%;
    }
`;

export function AboutUs() {
  return (
    <Container id="about">
      <TitleText>About us</TitleText>
      <Wrapper templateColumn="50% 50%">
        <Description>
          <p>Introducing Aarvam Tech Solutions: Young, talented, and driven to win. Founded by successful entrepreneurs, we unleash success through innovative tech solutions. With fresh perspectives and boundless energy, we push boundaries and achieve remarkable results. Our team of experts specializes in technology, business, engineering, career, and software. We immerse ourselves in your vision, developing customized strategies for triumph. Leveraging the latest technologies, we help businesses achieve unparalleled growth and surpass the competition. Join us on a journey of innovation, growth, and triumph. Experience the winning drive that sets us apart.</p>
        </Description>
        <ImageHolder>
          <img src={About} alt="about-us" width="90%" />
        </ImageHolder>
      </Wrapper>
    </Container>
  );
}
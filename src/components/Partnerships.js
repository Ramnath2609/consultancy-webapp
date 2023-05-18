import styled from "styled-components";
import Nikon from "../assets/nikon.png";
import Mits from "../assets/mitsubushi.png";
import SS from "../assets/shutterstock-.png";
import Disney from "../assets/disney.png";
import Netflix from "../assets/netflix.svg";

const Container = styled.div`
    display: grid;
    grid-template: 100% / 50% 50%;
    background-color: #fff;
    max-width: 1120px;
    margin: 0 auto;
    height: 400px;
    align-items: center;
`;

const TitleText = styled.h2`
    font-size: 64px;
    line-height: 1.25;
`;

const LogosContainer = styled.div`
    display: grid;
    grid-template: repeat(auto-fill, 100px) / repeat(auto-fit, 100px);
    grid-gap: 20px;
    place-content: center;
    place-items: center;
`;

const Icon = styled.img`
    width: 75px;
    filter: grayscale(1);
    transition: filter .2s ease-in-out;
    &:hover {
        filter: grayscale(0);
    }
`;

export function Partnerships() {
  return (
    <Container>
      <TitleText>Our <br />partnerships</TitleText>
      <LogosContainer>
        <div>
          <Icon src={Nikon} />
        </div>
        <div>
          <Icon src={Mits} />
        </div>
        <div>
          <Icon src={SS} />
        </div>
        <div>
          <Icon src={Disney} />
        </div>
        <div>
          <Icon src={Netflix} />
        </div>
      </LogosContainer>
    </Container>
  );
}
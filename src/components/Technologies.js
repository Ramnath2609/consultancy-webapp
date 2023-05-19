import styled from "styled-components";
import { FlexBox } from "./common-styles";
import { technologiesData } from "../data";
import Arrow from "../assets/white-arrow.png";
import { useCallback, useState } from "react";
import { MobileAccordion, MobileDescription, TabContainer } from "./Services";
import { Accordion } from "./Accordion";

const ServicesWrapper = styled.div`
    padding: 50px 15px 0;
    color: #191919;
    background-color: #fcb622;
    min-height: 685px;
    margin: 0 auto;
`;

const HeaderText = styled.h2`
    font-size: 64px;
    font-weight: 700;
    margin-bottom: 30px;
    @media (max-width: 600px) {
      font-size: 44px;
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
    margin-bottom: 25px;
    margin-right: 0;
    margin-left: 0;
`;

const Tag = styled.div`
    margin-bottom: 8px;
    margin-right: 8px;
    background-color: #feedc8;
    color: #0e0f11;
    font-size: 10px;
    line-height: 1;
    border: none;
    border-radius: 45px;
    cursor: pointer;
    padding: 10px 14px;
`;

const VerticalTabsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 300px;
    padding-bottom: 95px;
`;

const TabItem = styled.div`
    border: 1px solid transparent;
    text-align: end;
    border-left-color: transparent;
    border-radius: 0 8px 0 0;
    border-width: 1px;
    border-right-color: ${props => (props.isActive ? "#fff" : "none")};;
    border-top-color: ${props => (props.isActive ? "#fff" : "none")};;
    margin-left: auto;
    display: inline-flex;
    font-size: 18px;
    font-weight: 500;
    align-items: center;
    justify-content: flex-end;
    padding: 0 16px;
    box-sizing: border-box;
    height: 75px;
    position: relative;
    text-decoration: none;
    cursor: pointer;
    color: #191919;
    width: 175px;
    > div {
        display: ${props => (props.isActive ? "inline-flex" : "none")};
    }
    &:hover {
        > div {
            display: inline-flex;
            opacity: ${props => (props.isActive ? "1" : "0.5")};;
        }
    }
    `;

const Info = styled.p`
    max-width: 430px;
`;

const ImageBlock = styled(FlexBox)`
    min-height: 100%;
    padding: 0 0 95px;
    position: relative;
    flex: 0 1 auto;
    margin-right: 30px;
`;

const Container = styled.div`
    max-width: 1110px;
    margin: 0 auto;
`;

const IconHolder = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    background-color: #191919;
    height: 20px;
    width: 40px;
    border-radius: 16px;
    margin-right: 20px;
    position: absolute;
    left: 0;
`;

const ArrowImage = styled.img`
    transform: rotate(-90deg);
    width: 20px;
`;

export function Technologies() {
  const [activeTab, setActiveTab] = useState(technologiesData[0]);

  const onClick = useCallback((id) => {
    const seletedTab = technologiesData.find((data) => data.id === id);
    setActiveTab(seletedTab);
  }, []);

  return (
    <ServicesWrapper id="technologies">
      <Container>
        <HeaderText>Technologies</HeaderText>
        <TabContainer height="100%" justifyContent="space-between" alignItems="flex-start">
          <ImageBlock flexDirection="column" height="100%" alignItems="flex-start">
            <ButtonsContainer>
              {activeTab.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
            </ButtonsContainer>
            <Info>{activeTab.description}</Info>
          </ImageBlock>
          <VerticalTabsWrapper>
            {technologiesData.map((service) => {
              const { title, id } = service;
              return (
                <TabItem isActive={activeTab.id === id} key={id} onClick={() => onClick(id)}>
                  {title}
                  <IconHolder><ArrowImage src={Arrow} /></IconHolder>
                </TabItem>
              );
            })}
          </VerticalTabsWrapper>
        </TabContainer>
        <MobileDescription $color="#191919">
        At Aarvam tech solutions, we stay at the forefront of cutting-edge technologies to help our clients achieve their business goals and drive innovation. Our team of experienced consultants is well-versed in the latest advancements across various industries. We leverage these technologies to deliver tailored solutions that transform businesses and accelerate growth.
        </MobileDescription>
        <MobileAccordion>
          {technologiesData.map((i) => <Accordion tagColor="#feedc8" color="#fcb622" key={i.title} title={i.title} content={i.description} tags={i.tags} />)}
        </MobileAccordion>
      </Container>
    </ServicesWrapper>
  );
}
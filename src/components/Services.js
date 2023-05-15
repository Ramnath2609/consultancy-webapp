import styled from "styled-components";
import { FlexBox } from "./common-styles";
import { servicesData } from "../data";
import Arrow from '../assets/arrow.png'
import { useCallback, useState } from "react";

const ServicesWrapper = styled.div`
    padding: 50px 15px 0;
    color: #fff;
    background-color: #00c2ff;
    height: 685px;
    margin: 0 auto;
`;

const HeaderText = styled.h2`
    font-size: 64px;
    font-weight: 700;
    margin-bottom: 30px;
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
    background-color: #bff0ff;
    color: #0e0f11;
    font-size: 12px;
    line-height: 1;
    /* padding-bottom: 10px;
    padding-top: 10px; */
    border: none;
    border-radius: 45px;
    cursor: pointer;
    padding: 14px 45px;
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
    border-right-color: ${props => props.isActive ? '#fff' : 'none'};;
    border-top-color: ${props => props.isActive ? '#fff' : 'none'};;
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
    color: #fff;
    width: 175px;
    > div {
        display: ${props => props.isActive ? 'inline-flex' : 'none'};
    }
    &:hover {
        > div {
            display: inline-flex;
            opacity: ${props => props.isActive ? '1' : '0.5'};;
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
    background-color: #fff;
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

export function Services() {
    const [activeTab, setActiveTab] = useState(servicesData[0]);

    const onClick = useCallback((id) => {
        const seletedTab = servicesData.find((data) => data.id === id);
        setActiveTab(seletedTab);
    }, []);

    return (
        <ServicesWrapper id="services">
            <Container>
            <HeaderText>Our Services</HeaderText>
            <FlexBox height="100%" justifyContent="space-between" alignItems="flex-start">
                <ImageBlock flexDirection="column" height="100%" alignItems="flex-start">
                <ButtonsContainer>
                    {activeTab.tags.map((tag) => <Tag>{tag}</Tag>)}
                </ButtonsContainer>
                <Info>{activeTab.description}</Info>
                </ImageBlock>
            <VerticalTabsWrapper>
                {servicesData.map((service) => {
                    const { title, id } = service;
                    return (
                        <TabItem isActive={activeTab.id === id} key={id} onClick={() => onClick(id)}>
                            {title}
                            <IconHolder><ArrowImage src={Arrow} /></IconHolder>
                        </TabItem>
                    )
                })}
            </VerticalTabsWrapper>
            </FlexBox>
            </Container>
        </ServicesWrapper>
    );
}
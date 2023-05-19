import React, { useCallback, useState } from "react";
import styled from "styled-components";

const AccordionTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
    padding: 1rem;
    background-color: ${({ $color }) => $color};
    border: 1px solid #fff;
    &:hover {
        background-color: ${({ $color }) => $color};
    }
`;

const AccordionContent = styled.div`
    background-color: #fff;
    overflow: hidden;
    max-height: ${({ $isActive }) => ($isActive ? "1000px" : "0px")};
    transition: max-height ${({ $isActive }) => ($isActive ? "1s ease-in-out" : "0.5s cubic-bezier(0, 1, 0, 1)")};
`;

const Tag = styled.div`
    margin-bottom: 8px;
    margin-right: 8px;
    background-color: ${({ $backgroundColor }) => $backgroundColor};
    color: #0e0f11;
    font-size: 12px;
    line-height: 1;
    padding: 10px 14px;
    border: none;
    border-radius: 45px;
    cursor: pointer;
`;

const ButtonsContainer = styled.div`
    display: flex;
    padding: 14px;
    margin-right: 0;
    margin-left: 0;
`;

const Wrapper = styled.div`
    transition: height 0.3s ease-in;
`;

const Description = styled.p`
    padding: 14px;
    color: black;
`;

export function Accordion({ title, content, tags, color, tagColor }) {
  const [isActive, setIsActive] = useState(false);

  const onToggle = useCallback(() => {
    setIsActive(!isActive);
  }, [isActive]);
  console.log({ isActive });
  return (
    <Wrapper>
      <AccordionTitle onClick={onToggle} $color={color}>
        <div>{title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </AccordionTitle>
      <AccordionContent $isActive={isActive}>
        <ButtonsContainer>
          {tags.map((tag) => <Tag $backgroundColor={tagColor} key={tag}>{tag}</Tag>)}
        </ButtonsContainer>
        <Description>{content}</Description>
      </AccordionContent>
    </Wrapper>
  );
}
import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => (flexDirection ? flexDirection : "row")};
  align-items: ${props => (props.alignItems ? props.alignItems : "center")};
  justify-content: ${props => (props.justifyContent ? props.justifyContent : "start")};
  width: ${props => (props.width ? props.width : "auto")};
  flex-wrap: ${props => (props.flexWrap ? props.flexWrap : "no-wrap")};
  height: ${props => (props.height ? props.height : "0")};
  margin: ${({ margin }) => (margin ? margin : "0")};
  padding: ${({ padding }) => (padding ? padding : "0")};
  box-sizing: border-box;
`;

export const GridLayout = styled.div`
  display: grid;
  box-sizing: border-box;
  grid-template-rows: ${props => (props.templateRow ? props.templateRow : "auto")};
  grid-template-columns: ${props => (props.templateColumn ? props.templateColumn : "auto")};
  width: ${props => (props.width ? props.width : "auto")};
  height: ${props => (props.height ? props.height : "auto")};
  grid-gap: ${props => (props.gridGap ? props.gridGap : "0px")};
  padding: ${props => (props.padding ? props.padding : "0px")};
  place-content: ${props => (props.placeContent ? props.placeContent : "normal")};
  margin: ${({ margin }) => (margin ? margin : "auto")};
  place-items: ${({ placeItems }) => (placeItems ? placeItems : "normal")};
`;

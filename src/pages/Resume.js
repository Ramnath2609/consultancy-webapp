import styled from "styled-components";
import { FlexBox } from "../components/common-styles";
import { GridLayout } from "../components/common-styles";
import Profilepic from "../assets/profilepic.jpg";
import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { Header } from "../components";

const aboutItems = [
  { label: "Location", text: "Victoria, BC", Icon: MapIcon },
  { label: "Age", text: "29", Icon: CalendarIcon },
  { label: "Nationality", text: "Canadian / Irish", Icon: FlagIcon },
  { label: "Interests", text: "Motorcycles, Music", Icon: SparklesIcon },
  { label: "Study", text: "University of Victoria", Icon: AcademicCapIcon },
  { label: "Employment", text: "Instant Domains, inc.", Icon: BuildingOffice2Icon },
];

export const skills = [
  {
    name: "Spoken languages",
    skills: [
      {
        name: "English",
        level: 10,
      },
      {
        name: "French",
        level: 4,
      },
      {
        name: "Spanish",
        level: 3,
      },
    ],
  },
  {
    name: "Frontend development",
    skills: [
      {
        name: "React",
        level: 9,
      },
      {
        name: "Typescript",
        level: 7,
      },
      {
        name: "GraphQL",
        level: 6,
      },
    ],
  },
  {
    name: "Backend development",
    skills: [
      {
        name: "Node.js",
        level: 8,
      },
      {
        name: "Rust",
        level: 5,
      },
      {
        name: "Golang",
        level: 4,
      },
    ],
  },
  {
    name: "Mobile development",
    skills: [
      {
        name: "React Native",
        level: 9,
      },
      {
        name: "Flutter",
        level: 4,
      },
      {
        name: "Swift",
        level: 3,
      },
    ],
  },
];

const ResumeSection = styled.section`
    padding: 6rem 2rem;
`;

const ResumeContent = styled.div`
    margin: auto;
    max-width: 1024px;
    height: 100%;
    width: 100%;
`;

const SectionHeading = styled.h2`
    text-transform: uppercase;
    margin: 0;
    text-decoration: underline;
    text-decoration-color: rgb(251 146 60);
    margin-bottom: 20px;
`;

const About = styled.section`
    padding: 6rem 2rem;
    background: rgb(38 38 38);
    width: 100%;
    box-sizing: border-box;
`;

const AboutContent = styled.div`
    max-width: 1024px;
    margin: auto;
    width: 100%;
`;

const ImageHolder = styled(FlexBox)`
    justify-content: flex-start;
    align-items: start;
    border-radius: 14px;
    height: auto;
    @media (max-width: 768px) {
        justify-content: center;
    }
    @media (max-width: 960px) {
        justify-content: center;
    }
`;

const Page = styled.div`
    height: 100vh;
`;

const AboutText = styled(FlexBox)`
    color: white;
    @media (max-width: 768px) {
        margin-top: 20px;
        align-items: center;
    }
    @media (max-width: 960px) {
        margin-top: 20px;
        align-items: center;
    }
`;

const Styledh2 = styled.h2`
    margin: 0;
`;

const ProfileImage = styled.img`
    width: 8rem;
    height: 8rem;
    overflow: hidden;
`;

const StyledUL = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 1rem;
    padding: 0;
    width: 100%;
    @media (max-width: 768px) {
        grid-template-columns: 100%;
    }
`;

const ListItem = styled.li`
    display: grid;
    grid-template-columns: 30px min-content auto;
    color: white;
    grid-gap: 12px;
    align-items: center;
`;

const LowMargintitle = styled.h2`
    margin: 0;
`;

const StyledPara = styled.p`
    margin: 0;
`;

const IndividualBlock = styled(FlexBox)`
    padding: 30px 0;
    border-bottom: 1px solid black;
`;

const Range = styled.div`
    background-color: rgb(212 212 212);
    height: 20px;
    border-radius: 999px;
    margin-bottom: 16px;
`;

const Indicator = styled.div`
    height: 100%;
    background-color: rgb(251 146 60);
    width: ${(props) => `${props.width}%`};
    border-radius: 999px;
`;

const SkillName = styled.span`
    display: inline-block;
    margin-bottom: 16px;
`;

const StyledGridLayout = styled(GridLayout)`
    @media (max-width: 768px) {
        grid-template-rows: auto auto;
        grid-template-columns: 100%;
    }
    @media (max-width: 960px) {
        grid-template-rows: auto auto;
        grid-template-columns: 100%;
    }
`;

const Block = styled(GridLayout)`
    @media (max-width: 768px) {
        grid-template-columns: 100%;
    }
`;

const SkillsBlock = styled(GridLayout)`
    @media (max-width: 768px) {
        grid-template-columns: 100%;
    }
`;

export function Resume() {
  return (
    <Page>
      <Header />
      <About>
        <AboutContent>
          <StyledGridLayout height="auto" templateColumn="30% 70%">
            <ImageHolder>
              <ProfileImage src={Profilepic} alt="profile-pic" width={64} />
            </ImageHolder>
            <FlexBox height="auto" flexDirection="column">
              <AboutText height="auto" flexDirection="column" alignItems="start">
                <Styledh2>About me</Styledh2>
                <p>I am a UX designer with interest towards designing interactive websites. User interaction is the driving force for traffic towards a website.</p>
              </AboutText>
              <StyledUL>
                {aboutItems.map(({ label, text, Icon }, idx) => (
                  <ListItem key={idx}>
                    {Icon && <Icon className="h-5 w-5 text-white" />}
                    <span>{label}:</span>
                    <span>{text}</span>
                  </ListItem>
                ))}
              </StyledUL>
            </FlexBox>
          </StyledGridLayout>
        </AboutContent>
      </About>
      <ResumeSection>
        <ResumeContent>
          <IndividualBlock flexDirection="column" height="auto">
            <Block templateColumn="30% 70%" height="auto" width="100%">
              <FlexBox height="auto" alignItems="flex-start">
                <SectionHeading>Education</SectionHeading>
              </FlexBox>
              <FlexBox flexDirection="column" height="auto">
                <FlexBox flexDirection="column" width="100%" height="auto" alignItems="start" margin="0 0 30px 0">
                  <LowMargintitle>Masters in Data science</LowMargintitle>
                  <StyledPara>University of Colorado•April 2007</StyledPara>
                </FlexBox>
                <FlexBox flexDirection="column" width="100%" height="auto" alignItems="start">
                  <LowMargintitle>Bachelor in Computer Science</LowMargintitle>
                  <StyledPara>University of Texas•April 2007</StyledPara>
                </FlexBox>
              </FlexBox>
            </Block>
          </IndividualBlock>
          <IndividualBlock flexDirection="column" height="auto">
            <Block templateColumn="30% 70%" height="auto" width="100%">
              <FlexBox height="auto" alignItems="flex-start">
                <SectionHeading>Work</SectionHeading>
              </FlexBox>
              <FlexBox flexDirection="column" height="auto">
                <FlexBox flexDirection="column" width="100%" height="auto" alignItems="start" margin="0 0 30px 0">
                  <LowMargintitle>Senior UX Engineer</LowMargintitle>
                  <StyledPara>Awesome Development Company•March 2010 - Present</StyledPara>
                  <StyledPara>Developed well polished and interactive designs, which helped the organization have a good value in the market.</StyledPara>
                </FlexBox>
                <FlexBox flexDirection="column" width="100%" height="auto" alignItems="start">
                  <LowMargintitle>Junior bug fixer</LowMargintitle>
                  <StyledPara>Garage Startup Studio•March 2007 - February 2010</StyledPara>
                  <StyledPara>As a junior bug fixer, I was working on testing the product with end user in mind and finding out critical bugs that hinder the product flow.</StyledPara>
                </FlexBox>
              </FlexBox>
            </Block>
          </IndividualBlock>
          <IndividualBlock flexDirection="column" height="auto">
            <Block templateColumn="30% 70%" height="auto" width="100%">
              <FlexBox height="auto" alignItems="flex-start">
                <SectionHeading>Skills</SectionHeading>
              </FlexBox>
              <SkillsBlock height="auto" templateColumn="50% 50%" templateRow="auto" width="100%" gridGap="30px">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <SkillName>{skill.name}</SkillName>
                    {skill.skills.map((sub) => (
                      <div key={sub.name}>
                        <span>{sub.name}</span>
                        <Range>
                          <Indicator width={Math.round((sub.level / 10) * 100)} />
                        </Range>
                      </div>
                    ))}
                  </div>
                ))}
              </SkillsBlock>
            </Block>
          </IndividualBlock>
        </ResumeContent>
      </ResumeSection>
    </Page>
  );
}

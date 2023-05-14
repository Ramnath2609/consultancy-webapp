import styled from 'styled-components';
import { FlexBox, GridLayout } from './common-styles';
import Contact from '../assets/contact.jpg';

const ContactUsWrapper = styled(GridLayout)`
    height: 550px;
    grid-template: 100% / 50% 50%;
    justify-content: center;
`;

const FormBlock = styled.div`
    width: 100%;
    background-color: #bff0ff;
`;

const StyledLabel = styled.label`
    font-family: Prompt,Montserrat,sans-serif;
    font-size: 16px;
    font-weight: 400;
    left: 25px;
    line-height: 1.5625;
    padding: 0;
    pointer-events: none;
    top: 30px;
    transform: translateY(-50%);
    z-index: 0;
    color: rgba(25,25,25,.5);
    display: block;
    height: auto;
    margin: 0;
    max-width: calc(100% - 40px);
    overflow: hidden;
    position: absolute;
    text-overflow: ellipsis;
    transition: all .3s ease-in-out;
    white-space: nowrap;
`;

const StyledInput = styled.input`
    background-color: #e6f9ff;
    border: 1px solid #bff0ff;
    border-radius: 10px;
    color: #0e0f11;
    font-family: Prompt,Montserrat,sans-serif;
    font-size: 16px;
    font-weight: 400;
    height: 60px;
    line-height: 1.5625;
    padding: 15px;
    box-sizing: border-box;
    outline: none;
    width: 100%;
    &:focus {
        background-color: #f9fafb;
        border-color: #dde1e6;
        box-shadow: 0 1px 3px rgba(0,0,0,.08);
        color: #0e0f11;
        ${StyledLabel} {
            top: 0;
            z-index: -1;
            left: 20;
            padding: 14px 0 2px;
        }
        
    }
`;

const FieldWrapper = styled.div`
    display: block;
    position: relative;
    height: 60px;
    margin-bottom: 20px;
`;

const FullHeightForm = styled.form`
    /* height: 100%; */
    margin-top: 50px;
`;

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    width: 430px;
    padding: 20px;
`;

const Button = styled.button`
    background-color: #00c2ff;
    border: none;
    border-radius: 45px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: Prompt,Montserrat,sans-serif;
    font: 500 16px/1 Prompt,Montserrat,sans-serif;
    padding: 14px 45px;
    margin-top: 45px;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition: background-color .2s ease-in-out;
    width: 130px;
    &:hover {
        background-color: #26aed9;
    }
`;

const ImageBlock = styled(FlexBox)`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    > img {
        width: 50%;
    }
`;


export function ContactUs() {
    return (
        <ContactUsWrapper>
            <FormBlock>
                <Wrapper>
                <p>Start a conversation</p>
                <p>We’d like to hear from you. Use the contact form below and we’ll get back to you shortly.</p>
                <FullHeightForm>
                    <FieldWrapper>
                        <StyledLabel htmlFor='fullName'><span>Full name</span></StyledLabel>
                        <StyledInput type='text' name="fullName" />
                    </FieldWrapper>
                    <FieldWrapper>
                        <StyledLabel htmlFor='emailAddress'><span>Email address</span></StyledLabel>
                        <StyledInput type='text' name="emailAddress" />
                    </FieldWrapper>
                    <FieldWrapper>
                        <StyledLabel htmlFor='message'><span>Message</span></StyledLabel>
                        <StyledInput type='text' name="message" />
                    </FieldWrapper>
                    <FieldWrapper>
                        <Button>Send</Button>
                    </FieldWrapper>
                </FullHeightForm>
                </Wrapper>
            </FormBlock>
            <ImageBlock>
                <img src={Contact} />
            </ImageBlock>
        </ContactUsWrapper>
    );
}
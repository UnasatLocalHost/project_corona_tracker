import React from "react";
import styled, { createGlobalStyle, css } from "styled-components";
import Label from "./PageForm/PageFormComponents/Label";

const StyledBody = styled.div`
  background: url("https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29ya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80");
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
}
`;

const GlobalStyle = createGlobalStyle`
   
`;

const sharedStyle = css`
 background-color: #eee;
 height: 40px;
 border-radius: 5px;
 border: 1px solid #ddd;
 margin: 10px 0 20 20px 0;
 padding 20px;
 

`;

const StyledFormWrapper = styled.div`
 
  display:flex;
  justify-content: center;
  align-items: center:
  
  padding: 0 20px;
  


`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  box-sizing: border-box;
  background-color: #fff;

  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rbga(0, 0, 0, 0.2);
  margin-top: 200px;
`;

const StyledInput = styled.input``;

const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyle}
`;

const StyledButton = styled.button`
  display: block;
  background-color: #f7797d;
  color: #fff;
  font-size: 0.9rem;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;

  legend {
    padding: 0 10px;
  }

  label {
    padding-right: 20px;
  }

  input {
    margin-right: 10px;
  }
`;

const styledError = styled.div`
color: red;
font-weight: 800;
margin: 0 0 40px 0;
`;

export default function Dispensatie() {
  return (
    <StyledBody>
      <GlobalStyle />
      <StyledFormWrapper>
        <StyledForm>
          <h2>Dispensatie Form</h2>
          <Label htmlFor="name">Name</Label>
          <StyledInput type="text" name="name" />
          <Label htmlFor="email">Email</Label>
          <StyledInput type="email" name="email" />
          <Label htmlFor="name">Company</Label>
          <StyledInput type="name" name="name2" />
          <StyledFieldset>
            <legend>Gender</legend>
            <Label>
              <input type="radio" value="female" name="gender" />
              Female
            </Label>
            <Label>
              <input type="radio" value="male" name="gender" />
              Male
            </Label>
            <Label>
              <input type="radio" value="other" name="gender" />
              Other
            </Label>
          </StyledFieldset>
          <Label htmlFor="message">Reden voor dispensatie</Label>
          <StyledTextArea name="message" />
          <styledError>
            <p></p>
          </styledError>
          <StyledButton type="submit">Request Dispensatie</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </StyledBody>
  );
}

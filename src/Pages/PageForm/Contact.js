import React from "react";
import Styled from "styled-components";

import Container from "./PageFormComponents/Container";
import Title from "../PageForm/PageFormComponents/Title";
import CompanyInfo from "./PageFormViews/CompanyInfo";
import ContactForm from "./PageFormViews/ContactForm";

const StyledBody = Styled.div`
background : url('https://i.pinimg.com/originals/74/99/d3/7499d36931199baf23250ea3ba0655e2.jpg');
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

export default function Contact() {
  return (
    <StyledBody>
      <Container>
        <Title text="Our Contact Info" />
        <Container wrapper>
          <CompanyInfo />
          <ContactForm />
        </Container>
      </Container>
    </StyledBody>
  );
}

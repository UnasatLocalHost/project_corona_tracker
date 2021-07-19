import React from "react";
import Styled from "styled-components";

import Container from "./PageFormComponents/Container";
import Title from "../PageForm/PageFormComponents/Title";
import CompanyInfo from "./PageFormViews/CompanyInfo";
import ContactForm from "./PageFormViews/ContactForm";

const StyledBody = Styled.div`
background : url('https://www.ncsc.org/__data/assets/image/0023/32954/educ-careers.jpg');
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

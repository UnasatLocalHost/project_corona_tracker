import React from "react";
import styled from "styled-components";

const StyledBody = styled.div`
background: url("https://www.bareeqalbronze.com/wp-content/uploads/2019/01/faq-background-1-1.jpg");
  background-size: cover;
  
  position: fixed;
  
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
}
`;

const StyledFormWrapper = styled.div`
display:flex;
  justify-content: center;
  align-items: center:
  padding: 0 20px;`;

const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;

  legend {
    padding: 0 10px;
  }

  Label {
    padding-right: 20px;
  }

  input {
    margin-right: 10px;
  }
`;

const StyledForm = styled.form`
  background: url("");
  font-size: 1.3em;
  background: #5f2c82; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #49a09d,
    #5f2c82
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #49a09d,
    #5f2c82
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  background-size: auto;
  width: 100%;
  max-width: 600px;
  padding: 40px;
  box-sizing: border-box;
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rbga(0, 0, 0, 0.2);
  margin-top: 200px;
`;

export default function Nieuws() {
  return (
    <StyledBody>
      <StyledFormWrapper>
        <StyledForm>
          <StyledFieldset>
            <h1>Basics</h1>
            <h3>What is Covid 19</h3>
            <p1>
              COVID-19 is a disease caused by a virus called SARS-CoV-2. Most
              people with COVID-19 have mild{" "}
              <a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">
                symptoms
              </a>
              , but some people can become severely ill. Although most people
              with COVID-19 get better within weeks of illness, some people
              experience post-COVID conditions. Post-COVID conditions are a wide
              range of new, returning, or ongoing health problems people can
              experience more than four weeks after first being infected with
              the virus that causes COVID-19. Older people and those who have
              certain underlying medical conditions are more likely to get
              severely ill from COVID-19. Vaccines against COVID-19 are safe and
              effective
            </p1>
          </StyledFieldset>

          <StyledFieldset>
            <h1>Spread</h1>
            <h3>How does the virus spread</h3>
            <p>
              COVID-19 spreads when an infected person breathes out droplets and
              very small particles that contain the virus. These droplets and
              particles can be breathed in by other people or land on their
              eyes, noses, or mouth. In some circumstances, they may contaminate
              surfaces they touch. People who are closer than 6 feet from the
              infected person are most likely to get infected. COVID-19 is
              spread in three main ways: Breathing in air when close to an
              infected person who is exhaling small droplets and particles that
              contain the virus. Having these small droplets and particles that
              contain virus land on the eyes, nose, or mouth, especially through
              splashes and sprays like a cough or sneeze. Touching eyes, nose,
              or mouth with hands that have the virus on them. For more
              information about how COVID-19 spreads, visit the{" "}
              <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/how-covid-spreads.html">
                {" "}
                How COVID-19 Spreads page to learn how COVID-19 spreads and how
                to protect yourself.{" "}
              </a>{" "}
            </p>
          </StyledFieldset>
          <StyledFieldset>
            <h1>Prevention</h1>

            <h3>How can I protect myself</h3>
            <p>
              Vist the{" "}
              <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">
                How to project yourself & Others
              </a>
              page to learn about how to protect yourself from respiratory
              illnesses, like COVID-19.
            </p>
          </StyledFieldset>
        </StyledForm>
      </StyledFormWrapper>
    </StyledBody>
  );
}

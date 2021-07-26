import React from "react";
import styled from "styled-components";
import Label from "./PageForm/PageFormComponents/Label";
import Iframe from "react-iframe";

const StyledBody = styled.div`
  background: url("https://www.unc.edu/wp-content/uploads/2021/03/vaccine.jpg");
  background-size: cover;
  filter: blur(8px);
  -webkit-filter: blur(0px);

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

// const sharedStyle = css`
//  background-color: #eee;
//  height: 40px;
//  border-radius: 5px;
//  border: 1px solid #ddd;
//  margin: 10px 0 20 20px 0;
//  padding 20px;

// `;

const StyledFormWrapper = styled.div`
 
  display:flex;
  justify-content: center;
  align-items: center:
  
  
  padding: 0 20px;
  


`;

const StyledForm = styled.form`
  background: url("https://static.vecteezy.com/system/resources/previews/001/882/906/non_2x/close-up-doctor-with-stethoscope-background-vector.jpg");
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

const StyledInput = styled.input``;

// const StyledTextArea = styled.textarea`
//   background-color: #eee;
//   width: 100%;
//   min-height: 100px;
//   resize: none;
//   ${sharedStyle}
// `;

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

  Label {
    padding-right: 20px;
  }

  input {
    margin-right: 10px;
  }
`;

// const styledError = styled.div`
//   color: red;
//   font-weight: 800;
//   margin: 0 0 40px 0;
// `;

export default function Registratie() {
  return (
    <StyledBody>
      <Iframe
        width="1920x"
        height="1080"
        margin="auto"
        url="https://forms.office.com/Pages/ResponsePage.aspx?id=FOkoYZsMhE24SPMY__cUAjsbI9YzR0NLotG3RE8g5_tUMUNHVkU0NlpPR0pSS0tRVDBIMU5MVzY4Ri4u&embed=true"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        style="border: none; max-width:100%; max-height:100vh"
        allowfullscreen
        webkitallowfullscreen
        mozallowfullscreen
        msallowfullscreen
      ></Iframe>

      {/* <StyledFormWrapper>
        <StyledForm>
          <h2>Registratie Form</h2>
          <Label htmlFor="name">Voornaam</Label>
          <StyledInput type="text" F_name="name" />
          <Label htmlFor="name">Familie naam</Label>
          <StyledInput type="text" L_name="name" />
          <Label htmlFor="text">Geboortedatum</Label>
          <StyledInput type="text" text="dob" />
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
          <StyledFieldset>
            <legend>Contact Informatie</legend>
            <Label htmlFor="text">Adress(straatnaam en huisnummer/dorp)</Label>
            <StyledInput htmlFor="text" text="adress" />
            <Label htmlFor="text">Woonplaats/District</Label>
            <StyledInput htmlFor="text" text="woonplaats" />
            <Label htmlFor="text">ID nr/Paspoortnummer</Label>
            <StyledInput htmlFor="text" text="id" />
            <Label htmlFor="email">Email</Label>
            <StyledInput htmlFor="email" text="email" />
            <Label htmlFor="text">Mobiel telefoonnummer</Label>
            <StyledInput htmlFor="text" text="nummer" />
            <StyledFieldset>
              <legend>Ethniciteit</legend>
              <Label>
                <input type="radio" value="Inheems" name="race" />
                Inheems
              </Label>
              <Label>
                <input type="radio" value="Creool" name="race" />
                Creool
              </Label>
              <Label>
                <input type="radio" value="Marron" name="race" />
                Marron
              </Label>
              <Label>
                <input type="radio" value="Hindustaan" name="race" />
                Hindustaan
              </Label>
              <Label>
                <input type="radio" value="Javaan" name="race" />
                Javaan
              </Label>
              <Label>
                <input type="radio" value="Chinees" name="race" />
                Chinees
              </Label>
              <Label>
                <input type="radio" value="Kaukasisch" name="race" />
                Kaukasisch
              </Label>
              <input type="radio" value="Gemengd" name="race" />
              Gemengd
              <Label>
                <input type="radio" value="Other" name="race" />
                Other
              </Label>
            </StyledFieldset>
          </StyledFieldset>
          <StyledFieldset>
            <Label htmlFor="name">Uw Huisarts</Label>
            <StyledInput type="text" text="name" />
          </StyledFieldset>

          <StyledFieldset>
            <legend>Bent u ooit getest op het Covid-19 virus?</legend>
            <Label>
              <input type="radio" value="Ja" name="antwoord" />
              Ja
            </Label>
            <Label>
              <input type="radio" value="nee" name="antwoord" />
              Nee
            </Label>
          </StyledFieldset>
          <StyledFieldset>
            <legend>Indien ja, hoelang geleden bent u positief getest</legend>
            <Label>
              <input type="radio" value="nope" name="multi" />
              Minder dan 4 weken, u komt niet in aanmerking voor het vaccin
            </Label>
            <Label>
              <input type="radio" value="yep" name="multi" />
              Tussen 4 weken en 6 maanden geleden, 1 prike is voldoende
            </Label>
            <Label>
              <input type="radio" value="yep 2" name="multi" />
              Meer dan 6 maanden, u heeft dan 2 prikjes nodig
            </Label>
          </StyledFieldset>
          <StyledFieldset>
            <legend>Bent u bekend met ernstige allergieën? </legend>
            <Label>
              <input type="radio" value="yeah" name="multi" />
              Ja, bij u zal na de vaccinatie een langere observatieperiode
              gelden
            </Label>

            <Label>
              <input type="radio" value="nah" name="multi" />
              Nee
            </Label>
          </StyledFieldset>
          <StyledFieldset>
            <legend>Indien ja, welke?</legend>
            <StyledInput type="text"></StyledInput>
          </StyledFieldset>
          <StyledFieldset>
            <legend>
              Heeft u 1 of meerdere van de onsterstaande riscofactoren{" "}
            </legend>
            <Label>
              <input
                type="checkbox"
                name="sickness"
                value="Chronolische dialyse"
              />
              Chronolische dialyse
            </Label>
            <Label>
              <input type="checkbox" name="sickness" value="Hoge Bloeddruk" />
              Hoge Bloeddruk
            </Label>
            <Label>
              <input type="checkbox" name="sickness" value="Overgewicht" />
              Overgewicht
            </Label>
            <Label>
              <input type="checkbox" name="sickness" value="Suikerziekte" />
              Suikerziekte
            </Label>
            <Label>
              <input type="checkbox" name="sickness" value="Hartziekte" />
              Hartziekte
            </Label>
            <Label>
              <input
                type="checkbox"
                name="sickness"
                value="Longziekte z.a asma, bronchitis etc"
              />
              Longziekte z.a asma, bronchitis etc
            </Label>
            <Label>
              <input type="checkbox" name="sickness" value="Sikkelcelziekte" />
              Sikkelcelziekte
            </Label>
            <Label>
              <input
                type="checkbox"
                name="sickness"
                value="Geen van de bovennoemde"
              />
              Geen van de bovennoemde
            </Label>
            <Label>
              <input type="checkbox" name="sickness" value="Other" />
              Other
            </Label>
            <StyledInput type="text" />
          </StyledFieldset>
          <StyledFieldset>
            <legend>
              Heeft u, of is bij u 1 of meerdere van de onderstaande condities
              van toepassing?
            </legend>
            <Label>
              <input type="checkbox" name="condities" value="a"></input>
              Een aandoening met een verlaagd immuunsysteem (weerstand)
            </Label>
            <Label>
              <input type="checkbox" name="condities" value="b"></input>
              Epilepsie oftewel vallende ziekte uitgelokt door koorts
            </Label>
            <Label>
              <input type="checkbox" name="condities" value="c"></input>
              Zwangerschap (momenteel in verwachting), vooralsnog komt u niet in
              aanmerking voor het vaccin
            </Label>
            <Label>
              <input type="checkbox" name="condities" value="d"></input>
              Gebruik van immuunonderdrukkende middelen of chemotherapie
            </Label>
            <Label>
              <input type="checkbox" name="condities" value="e"></input>
              Geen van bovengenoemde
            </Label>
            <Label>
              <input type="checkbox" name="condities" value="f"></input>
              Other
            </Label>
            <StyledInput type="text" />
          </StyledFieldset>
          <StyledButton
            onClick={() => {
              alert.show("", {
                title: "",
              });
            }}
            type="submit"
          >
            Register
          </StyledButton>
        </StyledForm>
      </StyledFormWrapper> */}
    </StyledBody>
  );
}

import React from "react";
import styled from "styled-components";
import Iframe from "react-iframe";

const StyledBody = styled.div`

// background: url("");
background-size: cover;
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
width: 100%;
height: 100%;

}
`;

export default function Fill() {
  return (
    <StyledBody>
      <Iframe
        width="1920px"
        height="1080px"
        url="https://forms.office.com/Pages/ResponsePage.aspx?id=FOkoYZsMhE24SPMY__cUAjsbI9YzR0NLotG3RE8g5_tUQkJTSE1IUkcyVTBHNTk4MEJLTURHREhLVy4u&embed=true"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        style="border: none; max-width:100%; max-height:100vh"
        allowfullscreen
        webkitallowfullscreen
        mozallowfullscreen
        msallowfullscreen
      ></Iframe>
    </StyledBody>
  );
}

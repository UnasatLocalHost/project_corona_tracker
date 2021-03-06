import React from "react";
import styled from "styled-components";
import Iframe from "react-iframe";

const StyledBody = styled.div`
 width: 100%;
  height: 100%;

  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

}
`;

export default function Dispensatie() {
  return (
    <StyledBody>
      <Iframe
        width="1920px"
        height="1030px"
        url="https://forms.office.com/Pages/ResponsePage.aspx?id=FOkoYZsMhE24SPMY__cUAjsbI9YzR0NLotG3RE8g5_tURVJJOVpKVldXTFNMNUtYQjBNRTBDRllXRC4u&embed=true"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        style="border: none; max-width:90%; max-height:90vh"
        allowfullscreen
        webkitallowfullscreen
        mozallowfullscreen
        msallowfullscreen
      ></Iframe>
    </StyledBody>
  );
}

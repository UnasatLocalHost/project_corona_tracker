import React from "react";
import styled from "styled-components";

const WrapperCompanyInfo = styled.div`
  background: #1d4350; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #a43931,
    #1d4350
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #a43931,
    #1d4350
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  margin-top: 90px;
`;

const CompanyName = styled.h3`
  margin: 0 0 1rem 0;
  text-align: center;
  color: #fff;
  @media (min-width: 700px) {
    text-align: left;
  }
`;

const WrapperList = styled.ul`
  list-style: none;
  margin: 0 0 1rem 0;
  padding: 0;
  text-align: center;
  @media (min-width: 700px) {
    text-align: left;
  }
`;

const CompanyInfo = () => (
  <WrapperCompanyInfo>
    <CompanyName>Covid19Su</CompanyName>
    <WrapperList>
      <li>Address: GroovesStreet</li>
      <li>Phone Number: 597 563713 </li>
      <li>Email : covid19suTeam5@gmail.com</li>
    </WrapperList>
  </WrapperCompanyInfo>
);

export default CompanyInfo;

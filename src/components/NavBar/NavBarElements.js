import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

export const Nav = styled.nav`
background: #0F2027;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */



height: 70px;
display: flex;
justify-content: space-between;
padding: 0.5 rem calc((100vw-1000ox) /2);
z-index:10;

`;

export const NavLink = styled(Link)`
color : #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
cursor: pointer:

&.active {
    color: #15cdfc:
}

`;

export const Bars = styled(FaBars)`
display: none;
color: #fff;
@media screen and (max-width: 767px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%,75%);
    font-size: 1.8.rem;
    cursor: pointer:
    
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;


@media screen and (max-width: 768px) {
    display: none;
}
`;
export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;

 @media screen and (max-width 768px) {
     display: none;
 }
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #256ce1;
padding: 18px 22px;
color: #fff;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`;
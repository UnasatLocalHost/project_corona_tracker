import React from 'react'
import {Nav, NavLink, Bars ,NavMenu,NavBtn} from './NavBarElements';

const NavBar = () => {
    return (
        <>
            <Nav>
                <NavLink to ="/">Home
                 
                </NavLink>
                <Bars/>
                <NavMenu>
                
                <NavLink to="/dispensatie" activeStyle>Dispensatie Aanvraag</NavLink>
                <NavLink to="/registratie" activeStyle>Registratie Vaccine</NavLink>
                <NavLink  to="/nieuws" activeStyle>FAQ</NavLink>
                <NavLink to="/contact" activeStyle>Contact Us</NavLink>
                </NavMenu>
                <NavBtn>
                   
                </NavBtn>


            </Nav>
        </>
    )
}

export default NavBar

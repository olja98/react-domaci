import React from 'react';
import styled, { css} from 'styled-components/macro';
import {Link} from 'react-router-dom'
import { MenuData } from '../data/MenuData';
import { Button } from './Button';
import {GiWindowBars} from 'react-icons/gi'

const Nav= styled.nav`
height: 60px;
display:flex;
justify-content: space-between;
padding: 1rem 2rem;
z-index:100;
position:fixed;
width:100%;
background: #544C4A;

`;

const NavLink=css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo=styled(Link)`
${NavLink}
   color:#fff;

`;

const MenuBars=styled(GiWindowBars)`
  display:none;
  @media screen and (max-width:768px){
    display:block;
    background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%,25%);
    color:#efb6b2
}

`;


const NavMenu= styled.div`
 display:flex;
 align-items:center;
 margin-right: -48px;


 @media only screen and (max-width:768px){
     display:none;
 }

 
`;

const NavMenuLinks= styled(Link)`
 ${NavLink}
`;

const NavBtn=styled.div`
  display:flex;
  align-items:center;
  margin-right:24px;

  @media screen and (max-width:760px){
    display:none;
    
}

`;

const Navbar = ({toggle}) => {
    return (
        <Nav>
            <Logo> Plamen </Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>
                {MenuData.map((item,index) => (
                 <NavMenuLinks to={item.link} key={index}>
                     {item.title}
                 </NavMenuLinks>


                ))}
            </NavMenu>

            <NavBtn>
                <Button to="/contact">
                    Contact 
                </Button>
               
            </NavBtn>
        </Nav>
    )
}

export default Navbar

import React from 'react';
import { GiFloatingPlatforms } from 'react-icons/gi';
import styled from 'styled-components'
import { MenuData } from '../data/MenuData';
import { Button } from './Button';
import {Link} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';



const DropdownContainer = styled.div`
position:fixed;
z-index:999;
width:100%;
height:100%;
background: #c08e80;
display:grid;
align-items: center;
top:0;
left:0;
transition: 0.3s ease-in-out;
opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
top:${({isOpen}) => (isOpen ? '0' : '-100%')};

`;

const Icon= styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
background:transparent;
font-size:2rem;
cursor:pointer;
outline:none;
`;
const CloseIcon= styled(FaTimes)``;
const DropdownWrapper= styled.div``;
const DropdownMenu= styled.div`
display:grid;
grid-template-columns:1fr;
grid-template-rows:repeat(4, 80px);
text-align:center;
margin-bottom:4rem;
`;
const DropdownLink= styled(Link)`
display:flex;
align-items:center;
justify-content:center;
color: #000d1a;
text-decoration: none;
font-size:1.5rem;
list-style:none;
cursor:pointer;
transition: 0.2s ease-in-out;

&: hover{
    color: #544C4A;
}
`;
const BtnWrap= styled.div`
display:flex;
justify-content:center;
`;

function Dropdown({isOpen,toggle}) {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {MenuData.map((item,index)=>(
                        <DropdownLink to={item.link} key={index}>
                            {item.title}
                        </DropdownLink>
                    ))}
                </DropdownMenu>
                <BtnWrap>
                    <Button primary="true" round="true" to="/contacts">
                        Contact
                    </Button>
                </BtnWrap>
            </DropdownWrapper>

        </DropdownContainer>
            
        
    )
}

export default Dropdown

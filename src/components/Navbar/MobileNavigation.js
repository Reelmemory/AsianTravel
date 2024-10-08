import React from "react";
import styled from "styled-components";

const Nav  = styled.ul`
     display: none;
     flex-direction: column;
     transition: 1s ease;
     align-items: center;
     flex:1;
     border-radius: 1rem;
     height: vh;
     width: 40%;
     background-color:white;
     position: fixed;
     right: 0rem;
     top:10vh;
     margin: 0 1rem;
     
     @media (max-width:600px) {
        display: flex;
     }
` 
const List  = styled.li`
      width: 100%;
    text-align: start;
    cursor: pointer ;
    font-weight: 700;
    padding: 0.4rem  0.7rem;
    border: 3px solid transparent;
    :hover{
        border: 3px solid white;
        border-radius:1rem;
        
    }
    @media (max-width:600px) {
        margin-top: 0.5rem;
    }
`

const MobileNavigation = () => {
    return ( 
        <Nav>
            <List >
                 <a  href='/'>Home</a>
            </List>
           <List >
              <a href='/'>About Us</a>
           </List>
           <List>
              <a href='/'>Package</a>
          </List>
        </Nav>
     );
}
 
export default MobileNavigation; 


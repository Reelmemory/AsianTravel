import React from 'react'
import styled from 'styled-components'
import Att from '../assets/ATT.png'
import appStore from '../assets/appstore.svg'
import playStore from '../assets/playstore.svg'
import '../styles/footer.css'
import { Facebook } from '@mui/icons-material'

function Footer() {
  return (
    <Container style={{background: '#333'}}>

        <Left>
          <Logo src={Att} alt='' /> 
          <LeftText></LeftText>
        </Left>

        <Mid className='links'>
          <List className="list">
            <ListTitle className="m-2">Company</ListTitle>
            <a href='#home'  className="m-2">Home</a>
            <a href='#about-us'  className="m-2">About Us</a>
          </List>
          <List className='list'>
            <ListTitle className="m-2">Contact</ListTitle>
            <a href='#home'  className="m-2">Help/FAQs</a>
            <a href='#home'  className="m-2">Press</a>
            <a href='#home'  className="m-2">Affiliates</a>
          </List>
          <List className='list'>
            <ListTitle className="m-2">More</ListTitle>
            <a href='#home'  className="m-2">Airline Fees</a>
            <a href='#home'  className="m-2">Airline</a>
          </List>
        </Mid>
        <p className='copyRight'> @ 2018 - 2024 TravelGO, inc.</p>

        <Right>
          <RightText>Discover Our App</RightText>
          <Logos>
            <RightLogo src={appStore} alt='' />
            <RightLogo src={playStore} alt='' />
          </Logos>
        </Right>

    </Container>
  )
}

export default Footer

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    // overflow: hidden;
    padding: 32px 16px;
    width: 100%;
    display: grid;
  }
`;

const Left = styled.div`
  padding: 1vh 2vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0.2;
  height: 50vh;
  font-size: 14px;
  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
    grid-column: 1 / 5;
  }
`;
const Mid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0.6;
  height: 50vh;
  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
    align-items:  flex-start;
    justify-content: space-around;
    grid-column: 1 / 5;
    grid-row: 3;
  }
`;
const Right = styled.div`
  padding: 1vh 2vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0.2;
  height: 50vh;
  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
    text-align: center;
    grid-column: 1 / 5;
    grid-row: 2 / 3;
  }
`;

const Logo = styled.img`
  height: 30vh;
  width: 70%;
  @media (max-width: 480px) {
    height: 20vh;
   width: 60%;
    margin: 0;
  }
`;

const LeftText = styled.p`
  margin-top: 0vh;
  width: 20vw;
  color: #647696;
  @media (max-width: 480px) {
    margin: 0;
    width: 100%;
    text-align: center;
  }
`;

const RightText = styled.p`
  font-size: 14px;
  width: 100%;
  color: #5E6282;
  margin-top: 4vh;
  padding-left: 0.8vw;
  @media (max-width: 480px) {
    padding: 16px 0;
    margin: 0;
  }
`;

const List = styled.ul`
  margin: 0 1.3vw;
  @media (max-width: 480px) {
    padding: 16px 0;
    margin: 0;
  }
`;

const ListTitle = styled.li`
  font-weight: 700;
  margin-bottom: 6vh;
  color: #f0f0f0;
  font-size: 18px;
  @media (max-width: 480px) {
    margin: 0;
  }
`;

// const ListItem = styled.li`
//   margin-bottom: 3vh;
//   color: #5E6282;
//   font-weight: 400;
//   color: #c0ded9;
//   @media (max-width: 480px) {
//     margin: 0;
//   }
// `

const RightLogo = styled.img`
  margin: 0 8px;
  width: 8vw;
  @media (max-width: 480px) {
    margin: 0;
    width: 125px;
    height: 37px;
  }
`;

const Logos = styled.div`
  display: flex;
`;

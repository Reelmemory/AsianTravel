import React, { useState } from 'react';
import styled from 'styled-components';
import cover from '../assets/cover.jpg';
import { Link } from 'react-router-dom';
import { LoginAPI } from '../Api/AuthApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({});

  const login = async () => {
    try {
      let res = await LoginAPI(credentials.email, credentials.password);
      toast.success('Signed in');
      localStorage.setItem('userEmail', res.user.email);
      navigate('/');
    } catch (err) {
      toast.error('Check your credentials');
    }
  };

  return (
    <Container>
      <InnerContainer>
        <LoginContainer>
          <Heading>
            Welcome back to <TitleName>AsianTravel</TitleName>
          </Heading>
          <InputField
            placeholder='Enter your email'
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
            value={credentials.email}
          />
          <InputField
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            value={credentials.password}
            type='password'
            placeholder='Enter your password'
          />
          <LoginButton onClick={login}>LOGIN</LoginButton>
          <SignInOption>
            Don't have an account?{' '}
            <Link to='/signup' style={{ color: '#035d2f' }}>
              Sign Up
            </Link>
          </SignInOption>
        </LoginContainer>
        <BackgroundImage style={{ backgroundImage: `url(${cover})` }} />
      </InnerContainer>
    </Container>
  );
};

export default SignIn;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f9;
`;

const InnerContainer = styled.div`
  display: flex;
  width: 80%;
  height: 80%;
  max-width: 1200px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    height: 90%;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 50%;
  background-color: #fff;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
  }
`;

const BackgroundImage = styled.div`
  width: 50%;
  background-size: cover;
  background-position: center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Heading = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const TitleName = styled.span`
  font-family: 'Acme', sans-serif;
  color: #035d2f;
`;

const InputField = styled.input`
  width: 80%;
  padding: 12px;
  margin: 8px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: #035d2f;
    box-shadow: 0 0 8px rgba(0, 165, 81, 0.3);
  }
`;

const LoginButton = styled.button`
  width: 80%;
  padding: 12px;
  margin-top: 1rem;
  background-color: #00a651;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, background-color 0.3s;

  &:hover {
    transform: scale(1.05);
    background-color: #038c48;
  }
`;

const SignInOption = styled.p`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #333;
  text-align: center;

  a {
    font-weight: bold;
    text-decoration: none;
  }
`;

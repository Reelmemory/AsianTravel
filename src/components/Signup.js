import React, { useState } from 'react';
import { RegisterAPI } from '../Api/AuthApi';
import { postUserData } from '../Api/FirestoreApi';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const Signup = () => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const validatePasswords = () => {
    return credentials.password === credentials.confirmPassword;
  };

  const Register = async (e) => {
    e.preventDefault();
    if (!validatePasswords()) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    try {
      let res = await RegisterAPI(credentials.email, credentials.password);
      toast.success('Account created successfully');
      postUserData({
        name: credentials.name,
        email: credentials.email,
      });
      localStorage.setItem('userEmail', res.user.email);
      navigate('/');
    } catch (err) {
      console.log(err);
      toast.error('Error creating account');
    }
  };

  return (
    <Container maxWidth='xs'>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        minHeight='100vh'>
        <Typography variant='h4' component='h1' gutterBottom>
          Sign Up
        </Typography>
        <form onSubmit={Register}>
          <TextField
            label='Name'
            type='text'
            value={credentials.name}
            onChange={(e) =>
              setCredentials({
                ...credentials,
                name: e.target.value,
              })
            }
            required
            fullWidth
            margin='normal'
          />
          <TextField
            label='Email'
            type='email'
            value={credentials.email}
            onChange={(e) =>
              setCredentials({
                ...credentials,
                email: e.target.value,
              })
            }
            required
            fullWidth
            margin='normal'
          />
          <TextField
            label='Password'
            type='password'
            value={credentials.password}
            onChange={(e) =>
              setCredentials({
                ...credentials,
                password: e.target.value,
              })
            }
            required
            fullWidth
            margin='normal'
          />
          <TextField
            label='Confirm Password'
            type='password'
            value={credentials.confirmPassword}
            onChange={(e) =>
              setCredentials({
                ...credentials,
                confirmPassword: e.target.value,
              })
            }
            required
            fullWidth
            margin='normal'
          />
          {error && (
            <Typography color='error' variant='body2'>
              {error}
            </Typography>
          )}
          <Button
            type='submit'
            variant='contained'
            color='primary'
            fullWidth
            style={{ marginTop: '16px' }}>
            Sign Up
          </Button>
        </form>
        <Typography variant='body2' style={{ marginTop: '16px' }}>
          Already have an account? <Link to='/login'>Login</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Signup;

import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'



const Register = () => {
    const [loginData, setLoginData] = useState({});

    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLogin = e => {
        if (loginData.password !== loginData.password2) {
            alert('wrong');
        }
        registerUser(loginData.email, loginData.password)
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    {!isLoading && <form onSubmit={handleLogin}>
                        <TextField sx={{ width: '75%', m: 1 }}
                            name="email"
                            onChange={handleOnChange} id="standard-basic" label="Mail" variant="standard" />
                        <br />
                        <TextField sx={{ width: '75%', m: 1 }}
                            name="password"
                            onChange={handleOnChange} id="standard-basic" label="Password" variant="standard" type="password" />
                        <br />
                        <TextField sx={{ width: '75%', m: 1 }}
                            name="password2"
                            onChange={handleOnChange} id="standard-basic" label="Repeat Password" variant="standard" type="password" />
                        <br />
                        <NavLink
                            style={{ textDecoration: 'none' }} to="/login"><Button variant="text">Already have an account?</Button></NavLink>
                        <br />
                        <Button variant='contained' type='submit'>Register</Button>
                    </form>}
                    {
                        isLoading && <CircularProgress />
                    }
                    {
                        user?.email && <Alert severity="success">User Created Succesfully — check it out!</Alert>
                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;
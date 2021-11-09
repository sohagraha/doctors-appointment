import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { set } from 'date-fns/esm';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import login from '../../images/login.png'
import useAuth from '../../hooks/useAuth'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation()
    const history = useHistory()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLogin = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={handleLogin}>
                        <TextField sx={{ width: '75%', m: 1 }}
                            name="email"
                            onChange={handleOnChange} id="standard-basic" label="Mail" variant="standard" />
                        <br />
                        <TextField sx={{ width: '75%', m: 1 }}
                            name="password"
                            onChange={handleOnChange} id="standard-basic" label="Password" variant="standard" type="password" />
                        <br />
                        <NavLink
                            style={{ textDecoration: 'none' }} to="/register"><Button variant="text">New user please register</Button></NavLink>
                        <br />
                        <Button variant='contained' type='submit'>log in</Button>
                    </form>
                    {
                        isLoading && <CircularProgress />
                    }
                    {
                        user?.email && <Alert severity="success">Succesfully Login — check it out!</Alert>
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

export default Login;
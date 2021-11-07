import { Button, Grid, TextField, Typography } from '@mui/material';
import { set } from 'date-fns/esm';
import React, { useState } from 'react';
import login from '../../images/login.png'

const Login = () => {
    const [loginData, setLoginData] = useState({});

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLogin = e => {
        alert('hello')
        e.preventDefault();
    }
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Typography variant="body1" gutterBottom>Login</Typography>
                <form onSubmit={handleLogin}>
                    <TextField sx={{ width: '75%', m: 1 }}
                        name="email"
                        onSubmit={handleOnChange} id="standard-basic" label="Mail" variant="standard" />
                    <br />
                    <TextField sx={{ width: '75%', m: 1 }}
                        name="password"
                        onSubmit={handleOnChange} id="standard-basic" label="Password" variant="standard" type="password" />
                    <br />
                    <Button variant='contained' type='submit'>log in</Button>
                </form>
            </Grid>
            <Grid item xs={12} md={6}>
                <img style={{ width: '100%' }} src={login} alt="" />
            </Grid>
        </Grid>
    );
};

export default Login;
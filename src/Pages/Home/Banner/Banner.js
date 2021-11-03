import React from 'react';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { border, fontWeight } from '@mui/system';

const bannerBg = {
    background: `url(${bg})`,
    height: 400
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{ ...verticalCenter, textAlign: 'left' }}>
                    <Box>
                        <Typography variant='h3'>
                            Your new smile <br />
                            Starts here
                        </Typography>
                        <Typography variant='h6' sx={{ my: 3, fontSize: 14, color: 'gray', fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat omnis consequatur aliquid quia laboriosam, quam odit ea possimus voluptatem modi iste quos voluptatum ullam impedit nisi aliquam necessitatibus ratione. Animi!
                        </Typography>
                        <Button style={{ backgroundColor: 'aquamarine', color: 'black', fontWeight: '100' }} variant="contained">Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={4} md={6} style={verticalCenter}>
                    <img style={{ width: '350px' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;
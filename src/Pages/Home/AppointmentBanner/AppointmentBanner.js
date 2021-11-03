import { Button, Grid, Typography } from '@mui/material';
import { Box, margin } from '@mui/system';
import React from 'react';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,74,0.75)',
    backgroundBlendMode: 'darken,luminosity',
    marginTop: 200,
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: 400, marginTop: -110 }} src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center' }}>
                    <Box>
                        <Typography variant='h6' sx={{ mb: 5 }} style={{ color: "aquamarine" }}>
                            Appointment
                        </Typography>
                        <Typography variant='h4' sx={{ mb: 5 }} style={{ color: 'white', fontWeight: 700 }}>
                            Make an appointment today
                        </Typography>
                        <Typography variant='h6' sx={{ mb: 5 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ut, deserunt aliquam natus maiores culpa. Aut odio cum excepturi vitae similique iste voluptas, hic quod, fuga, pariatur dicta nulla dolores?
                        </Typography>
                        <Button style={{ backgroundColor: 'aquamarine', color: 'black', fontWeight: '100' }} variant="contained">
                            Learn More
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;
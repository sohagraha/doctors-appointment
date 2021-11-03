import { Container, Grid } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';
import { Typography } from '@mui/material';

// Demo Data 
const bookings = [
    {
        id: 1,
        name: 'name',
        time: '11.00-08.00',
        space: 5
    },
    {
        id: 2,
        name: 'name',
        time: '11.00-08.00',
        space: 5
    },
    {
        id: 3,
        name: 'names',
        time: '11.00-08.00',
        space: 5
    }
]


const AvailableAppointments = ({ date }) => {

    return (
        <Container>
            <Typography variant='h5' sx={{ color: 'info.main', fontWeight: 600, my: 2 }}>Available appointments {date?.toDateString()}</Typography>
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking key={booking.id} booking={booking} date={date}></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;
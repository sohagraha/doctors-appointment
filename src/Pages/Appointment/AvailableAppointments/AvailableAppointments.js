import { Alert, Container, Grid } from '@mui/material';
import React, { useState } from 'react';
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

    const [bookingSuccess, setBookingSuccess] = useState(false);

    return (
        <Container>
            <Typography variant='h5' sx={{ color: 'info.main', fontWeight: 600, my: 2 }}>Available appointments {date?.toDateString()}</Typography>
            {
                bookingSuccess && <Alert severity='success'>Apointment Successfully</Alert>
            }
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    >

                    </Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;
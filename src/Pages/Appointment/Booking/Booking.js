import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { fontWeight } from '@mui/system';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking }) => {
    const { name, time, space } = booking;

    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }} >
                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant='h5' gutterBottom component='div'>
                        {name}
                    </Typography>
                    <Typography variant='h6' gutterBottom component='div'>
                        {time}
                    </Typography>
                    <Typography variant='caption' gutterBottom component='div'>
                        {space} Spaces Available
                    </Typography>
                    <Button onClick={handleBookingOpen} sx={{ my: 1 }} variant="contained">Booking Now</Button>
                </Paper>
            </Grid>
            <BookingModal booking={booking} handleBookingClose={handleBookingClose} openBooking={openBooking}></BookingModal>
        </>
    );
};

export default Booking;
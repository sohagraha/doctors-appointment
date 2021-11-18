import { Fade, Modal, Typography, Box, Button } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import useAuth from '../../../hooks/useAuth'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, booking, date, setBookingSuccess }) => {
    const { name, time } = booking;
    const { user } = useAuth();

    const initialInfo = {
        patientName: user.displayName,
        email: user.email, phone: ''
    }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        // console.log(newInfo);
        setBookingInfo(newInfo);
    }

    const handleBookSubmit = e => {
        alert('submitted')
        // collect data send to server 
        const appointment = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: date.toLocaleDateString()
        }
        // fetch 
        fetch('http://localhost:5000/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true)
                    handleBookingClose();
                }
            })
        e.preventDefault();
    }

    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style} style={{ backgroundColor: 'white' }}>
                    <Typography id="transition-modal-title" variant="h2" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={handleBookSubmit}>
                        <TextField
                            // label="Size"
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            //defaultValue='Your Name'
                            placeholder="yOUR nMAE"
                            defaultValue={user.displayName}
                            name='patientName'
                            onBlur={handleOnBlur}
                            size="small"
                        />
                        <TextField
                            type='email'
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            //defaultValue='Your Name'
                            // placeholder="Email"
                            defaultValue={user.email}
                            name='email'
                            onBlur={handleOnBlur}
                            size="small"
                        />
                        <TextField
                            type='number'
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            //defaultValue='Your Name'
                            placeholder="Phone Number"
                            name='phone'
                            onBlur={handleOnBlur}
                            size="small"
                        />
                        {/* Date  */}
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            //defaultValue='Your Name'
                            defaultValue={date.toDateString()}
                            size="small"
                        />
                        <Button type='submit' variant='contained'>Submit</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;
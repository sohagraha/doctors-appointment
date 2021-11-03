import { Fade, Modal, Typography, Box, Button } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import React from 'react';
import TextField from '@mui/material/TextField';

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

const BookingModal = ({ openBooking, handleBookingClose, booking, date }) => {
    const { name, time } = booking;

    const handleBookSubmit = e => {
        alert('submitted')

        // collect data send to server 

        handleBookingClose();
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
                            size="small"
                        />
                        <TextField
                            type='email'
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            //defaultValue='Your Name'
                            placeholder="Email"
                            size="small"
                        />
                        <TextField
                            type='number'
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            //defaultValue='Your Name'
                            placeholder="Phone Number"
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
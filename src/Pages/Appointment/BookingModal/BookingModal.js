import { Fade, Modal, Typography } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import { Box } from '@mui/system';
import React from 'react';

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

const BookingModal = ({ openBooking, handleBookingClose, booking }) => {
    const { name, time } = booking;
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
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {time}
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;
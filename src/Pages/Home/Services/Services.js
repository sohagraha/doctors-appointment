import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../../src/images/fluoride.png'
import cavity from '../../../../src/images/cavity.png'
import whitening from '../../../../src/images/whitening.png'
import Typography from '@mui/material/Typography';

const services = [
    {
        name: 'Fluride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sint quam ratione? Vero culpa in accusantium, tenetur excepturi voluptate animi nulla architecto ratione consequatur quis? Corrupti at consequuntur debitis in!',
        image: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sint quam ratione? Vero culpa in accusantium, tenetur excepturi voluptate animi nulla architecto ratione consequatur quis? Corrupti at consequuntur debitis in!',
        image: cavity
    },
    {
        name: 'Fluride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sint quam ratione? Vero culpa in accusantium, tenetur excepturi voluptate animi nulla architecto ratione consequatur quis? Corrupti at consequuntur debitis in!',
        image: whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, color: 'success.main', m: 2 }} color="text.secondary" variant="h6">
                    Our Services
                </Typography>
                <Typography sx={{ fontWeight: 600, color: 'success.secondary', m: 1 }} color="text.secondary" variant="h4">
                    Services we provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {services.map((service, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Service service={service}>
                            </Service>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;
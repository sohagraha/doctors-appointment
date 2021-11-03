import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Service = (props) => {
    const { name, description, image } = props.service;
    return (
        <div>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    style={{
                        width: 'auto',
                        height: '80px', margin: '0 auto'
                    }}
                    image={image}
                    alt="green iguana"
                />
                <CardContent>

                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {name}
                    </Typography>
                    <Typography color="text.secondary" variant="body2">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default Service;
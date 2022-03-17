import React from 'react';
// import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Title from '../Title/Title';

// const preventDefault = (event) => {
//     event.preventDefault();
// }

const Deposit = () => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Title>Recent Deposits</Title>
                <Typography component="p" variant="h4">
                    $3,024.00
                </Typography>
                <Typography color="text.secondary" sx={{ flex: 1 }}>
                    on 15 March, 2019
                </Typography>
            </CardContent>
            <CardActions>
                <Button>View balance</Button>
            </CardActions>
        </Card>
    );
}

export default Deposit;
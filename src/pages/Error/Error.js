import { Typography } from '@mui/material';
import React from 'react'
import Layout from '../../components/Layout/Layout';

const Error = () => {
    return (
        <Layout>
            <Typography sx={{ color: 'rgb(18,18,18)', fontWeight: 'bold', }} variant="h5" component="div" gutterBottom>
                Working on this page! it will be added soon!
            </Typography>
        </Layout>
    )
}

export default Error
import { Typography, Box } from '@mui/material'
import React from 'react'

const Error = () => {
    return (
        <Box sx={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: 'url(https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)', }}>
            <Typography sx={{ color: 'black', fontWeight: 'bold', backgroundColor: 'white', padding: '20px' }} variant="h3" component="div" gutterBottom>
                Working on this page! it will be added soon!
            </Typography>
        </Box>
    )
}

export default Error
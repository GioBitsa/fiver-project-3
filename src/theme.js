import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#44519e',
        },
        secondary: {
            main: '#cc3366',
        },
        background: {
            default: '#f1f1f9',
            paper: '#ffffff',
        },
        text: {
            primary: '#191f5d',
            secondary: '#a7b0c2',
        },
        info: {
            main: '#54c5eb',
        },
        boxShadow: {
            default: '0 0 1px 0 #cc3366'
        }
    },
});

export default theme;
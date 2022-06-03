import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
    return (
        <Typography align="center" variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="">
                My Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function StickyFooter() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <CssBaseline />
            <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
                <Typography align='center' variant="body1" component="h2" gutterBottom>
                    {'#This is a react redux-thunk unit-test boilerplate. This app was'}
                    {'created with Material-ui and the fake-json API.'}
                </Typography>
            </Container>
            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[200]
                            : theme.palette.grey[800],
                }}
            >
                <Container maxWidth="sm">
                    <Typography align='center' variant="body1">
                        @All rights reserved to Tanvir Hasan
                    </Typography>
                    <Copyright />
                </Container>
            </Box>
        </Box>
    );
}
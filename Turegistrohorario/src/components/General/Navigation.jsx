"use client";
import React, { useState } from 'react';

import { 
    Avatar, 
    Box,
    Button,
    Typography,
    useMediaQuery
} from '@mui/material';

import { 
    Menu as MenuIcon,
} from '@mui/icons-material';

import DrawerUI from './Drawer/Drawer';

export default function Navigation() {
    const [open, setOpen] = useState(false);

    const isLargeScreen = useMediaQuery('(min-width:501px)');
    const isSmallScreen = useMediaQuery('(max-width:500px)'); 

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <Box className="navbar navbar-expand-lg bg-body-tertiary">
            <Box className="container-fluid" display="flex" alignItems="center">
                <Avatar variant="circular" src="/logo.webp" alt="logo" sx={{ height: 50, width: 50, marginLeft: 2 }} />
                
                <Typography
                    align="center"
                    color="textPrimary"
                    sx={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        ml: isLargeScreen ? 2 : 'auto', 
                        mr: isLargeScreen ? 'auto' : 0,
                    }}
                >
                    Tu Registro Horario
                </Typography>
                <Button onClick={toggleDrawer(true)} sx={{ ml: 'auto' }}>
                    <MenuIcon />
                </Button>
                <DrawerUI 
                    isLargeScreen={isLargeScreen}
                    isSmallScreen={isSmallScreen}
                    toggleDrawer={toggleDrawer}
                    open={open}
                />
            </Box>
        </Box>
    );
}

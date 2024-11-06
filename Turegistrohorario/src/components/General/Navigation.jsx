"use client";

import DrawerUI from './Drawer/Drawer';

import React, { useState } from 'react';
import Link from 'next/link';

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
                <Link href="/">
                    <Avatar variant="circular" src="/logo.webp" alt="logo" sx={{ height: 50, width: 50 }} />
                </Link>
                <Link href="/" legacyBehavior>
                    <Typography
                        align="center"
                        color="textPrimary"
                        sx={{
                            fontSize: '20px',
                            fontWeight: 'bold',
                            textDecoration: 'none',
                            ml: 2,
                        }}
                    >
                        Tu Registro Horario
                    </Typography>
                </Link>
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

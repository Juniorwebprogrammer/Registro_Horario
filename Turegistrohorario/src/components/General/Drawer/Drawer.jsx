"use client";

import DrawerOptions from './drawerOptions';

import Link from 'next/link';

import { 
    Avatar, 
    Box,
    Button,
    Drawer, 
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Typography,
    useMediaQuery
} from '@mui/material';

export default function DrawerUI({
    isLargeScreen,
    isSmallScreen,
    toggleDrawer,
    open
}) {

    const DrawerList = (
        <Box sx={{ width: isLargeScreen ? 60 : 250 }} role="presentation">
            <List>
                {DrawerOptions.map((option) => (
                    <ListItem key={option.label} disablePadding>
                        <Link href={option.href} passHref legacyBehavior>
                            <ListItemButton component="a" onClick={toggleDrawer(false)}>
                                {option.icon}
                                {(isSmallScreen) && ( // Muestra el texto tanto en pantallas pequeñas como grandes
                                    <ListItemText primary={option.label} sx={{ ml: 2 }} />
                                )}
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return(
        <>
            <Drawer
                anchor="right" // Establecer el Drawer en el lado derecho
                open={open}
                onClose={toggleDrawer(false)}
                variant={isLargeScreen ? 'permanent' : 'temporary'} // Cambia entre permanente y temporal
                PaperProps={{
                    sx: {
                        backgroundColor: '#f5f5f5', // Color de fondo del Drawer
                        width: isLargeScreen ? 70 : 250, // Ancho del Drawer
                    },
                }}
            >
                {DrawerList}
            </Drawer>
        </>
    )
}
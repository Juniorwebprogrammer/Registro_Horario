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
    Tooltip, // Importa Tooltip de Material-UI
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
                                {/* Agrega Tooltip para mostrar el nombre de la opción */}
                                <Tooltip title={option.label} placement="right">
                                    <span>{option.icon}</span> {/* Asegura que el icono esté dentro de un elemento inline */}
                                </Tooltip>
                                {(isSmallScreen) && ( 
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
                anchor="right"
                open={open}
                onClose={toggleDrawer(false)}
                variant={isLargeScreen ? 'permanent' : 'temporary'} 
                PaperProps={{
                    sx: {
                        backgroundColor: '#f5f5f5', 
                        width: isLargeScreen ? 70 : 250, 
                    },
                }}
            >
                {DrawerList}
            </Drawer>
        </>
    )
}

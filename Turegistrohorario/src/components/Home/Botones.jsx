import Link from 'next/link';
import { Button, Grid2 as Grid, Typography } from '@mui/material';

const botonRegistroEntrada = {
    variant: 'contained',
    color: 'success',
    sx: {
        height: 50,
        width: 200,
        marginRight: "50px" 
    }
};

const botonRegistroSalida = {
    variant: 'contained',
    color: 'white',
    sx: {
        height: 50,
        width: 200,
    }
};

const textoBoton = {
    fontSize: 14,
    fontWeight: 600
};

const textoBoton2 = {
    fontSize: 15,
    fontWeight: 600,
    color: 'black'
};

const contenedorGrid = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '35px'
};

export default function Botones({
    link1,
    link2,
    text1,
    text2
}) {
    return (
        <Grid container sx={contenedorGrid}>
            <Link href={link1}>
                <Button {...botonRegistroEntrada}>
                    <Typography sx={textoBoton}>{text1}</Typography>
                </Button>
            </Link>

            <Link href={link2}>
                <Button {...botonRegistroSalida}>
                    <Typography sx={textoBoton2}>{text2}</Typography>
                </Button>
            </Link>
        </Grid>
    );
}

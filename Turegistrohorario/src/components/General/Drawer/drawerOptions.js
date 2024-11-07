import { 
    EventAvailable as EventAvailableIcon,
    EventBusy as EventBusyIcon,
    Group as GroupIcon,
    Home as HomeIcon,
} from '@mui/icons-material';

const DrawerOptions = [
    {
        label: 'Home', 
        icon: <HomeIcon />, 
        href: "/"
    }, 
    {
        label: 'Consulta de usuarios', 
        icon: <GroupIcon />, 
        href: "/Usuarios"
    }, 
    {
        label: 'Registrar Entrada', 
        icon: <EventAvailableIcon />,
        href: "/RegistroEntrada"
    },
    {
        label: 'Registrar Salida',
        icon: <EventBusyIcon />,
        href: "/RegistroSalida"
    }
];

export default DrawerOptions;
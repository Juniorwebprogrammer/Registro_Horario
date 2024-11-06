import { 
    Menu as MenuIcon,
    Group as GroupIcon,
    EventAvailable as EventAvailableIcon,
    EventBusy as EventBusyIcon,
} from '@mui/icons-material';

const DrawerOptions = [
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
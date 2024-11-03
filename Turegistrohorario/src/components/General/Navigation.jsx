import Link from 'next/link';
import Image from 'next/image';

import { 
    Avatar, 
    Button,
    Drawer, 
    Grid as Grid2,
    Typography 
} from '@mui/material';

export default function Navigation(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link href="/">
                    <Image className="navbar-brand ms-5 " src="/logo.png" alt="logo" width={70} height={70}/>
                </Link>
                <Link href="/" legacyBehavior>
                    <a className="navbar-brand d-flex alig-items-center" href="/">Tu Registro Horario</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav container-fluid d-flex justify-content-end me-5">
                    <li className="nav-item">
                        <Link href="/Usuarios" legacyBehavior>
                            <a className="nav-link active" aria-current="page">Consultas de Usuarios</a>
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Registros
                    </a>
                    <ul className="dropdown-menu">
                        <li>
                            <Link href="/RegistroEntrada" legacyBehavior>
                                <a className="dropdown-item">Registrar Entrada</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/RegistroSalida" legacyBehavior>
                                <a className="dropdown-item">Registrar Salida</a>
                            </Link>
                        </li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}
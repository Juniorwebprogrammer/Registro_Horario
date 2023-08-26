import styles from '@/styles/Home/Botones.module.css';
import Link from 'next/link';

export default function Botones(){
    return(
        <div className={styles.botonContainer}>
            <Link href="/RegistroEntrada">
                <button className="btn btn-lg btn-success mt-3" style={{height: 50, width: 200}}>Registrar entrada</button>
            </Link>
            <Link href="/RegistroSalida">
                <button className="btn btn-lg btn-warning mt-3" style={{height: 50, width:200}}>Registrar salida </button>
            </Link>
        </div>
    )
}
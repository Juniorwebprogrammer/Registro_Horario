import styles from '@/styles/Home/Info.module.css';

export default function InfoPanel(){
    return(
        <div className={styles.infoPanel}>
                <h2 className={styles.titulo}>Tu registro horario app</h2>
                <h4 className={styles.parrafo}>
                    Si desea registrar su entrada ingrese las credenciales que le han ofrecido en el boton Registrar entrada.
                </h4>
                <h4 className={styles.parrafo}>
                Si desea registrar su entrada ingrese las credenciales que le han ofrecido en el boton Registrar salida.
                </h4>
        </div>
    )
}
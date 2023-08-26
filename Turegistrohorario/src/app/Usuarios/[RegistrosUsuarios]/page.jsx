import Link from "next/link";

async function loadDataRegistroEntrada(fk_registroEntrada_Usuarios) {
    const res = await fetch(`http://localhost:4000/api/v1/registroEntrada/${fk_registroEntrada_Usuarios}`, {cache: 'no-cache'})
    if(!res.ok){
        throw new Error("Hay un error con el estado de la api");
    }

    const json = await res.json();

    return json;
}

async function loadDataRegistroSalida(fk_registroSalida_Usuarios){
    const res = await fetch(`http://localhost:4000/api/v1/registroSalida/${fk_registroSalida_Usuarios}`, {cache: 'no-cache'});

    if(!res.ok){
        throw new Error("Hay un error con el estado de la api");
    }

    const json = await res.json();

    return json;
}

export default async function Page({params}) {
    const registroEntrada = await loadDataRegistroEntrada(params.RegistrosUsuarios);

    const registroSalida = await loadDataRegistroSalida(params.RegistrosUsuarios);

    return(
        <div>
            <Link href={"/Usuarios"}>
                <button className="btn btn-secondary mt-3 ms-5">Volver a usuarios</button>
            </Link>
            <div className="container text-center">
                <div className="row">
                    <div className="d-flex flex-column align-items-center mt-3">
                        <h2>Registros de Entrada</h2>
                        {registroEntrada.map(dataRegistroEntrada => {
                            return(
                                <ul className="list-group active" key={dataRegistroEntrada.idRegistroEntrada}>
                                    <li className="list-group-item">{dataRegistroEntrada.DateTiem}</li>
                                </ul>
                            )
                        })}
                    </div>
                </div>
                <div className="row">
                    <div className="container-fluid d-flex flex-column align-items-center mt-3 me-3">
                        <h2>Registros de Salida</h2>
                        {registroSalida.map(dataRegistroSalida => {
                            return(
                                <ul className="list-group active" key={dataRegistroSalida.idRegistroSalida}>
                                    <li className="list-group-item">{dataRegistroSalida.DateTime}</li>
                                </ul>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
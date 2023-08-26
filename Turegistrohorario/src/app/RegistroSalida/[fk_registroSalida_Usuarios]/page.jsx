"use client"
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Page({params}){

    let data = [params.fk_registroSalida_Usuarios];
    
    const {push} = useRouter();

    const [registroSalida, setRegistroSalida] = useState({
        fk_registroSalida_Usuarios : data
    })

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const res = await axios.post('/api/RegistroSalida', registroSalida);
        alert("Se ha registrado su salida correctamente")
        push('/')
    }

    return(
        <div className="container-fluid d-flex justify-content-center mt-5">
            <form className="d-flex row" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="CodigodeRegistro" className="form-label d-flex justify-content-center fs-2">Código de Registro</label>
                    <input type="number" className="form-control" name="registroSalida" value={data} required readOnly disabled/>
                </div>
                <button type="submit" className="btn btn-primary">Registrar salida</button>
            </form>
        </div>
    )
}
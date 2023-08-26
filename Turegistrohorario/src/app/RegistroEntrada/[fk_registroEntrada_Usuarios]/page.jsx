"use client"
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Page({params}){

    let data = [params.fk_registroEntrada_Usuarios];
    
    const {push} = useRouter();

    const [registroEntrada, setRegistroEntrada] = useState({
        fk_registroEntrada_Usuarios : data
    })

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const res = await axios.post('/api/RegistroEntrada', registroEntrada);
        alert("Se ha registrado su entrada correctamente")
        push('/')
    }

    return(
        <div className="container-fluid d-flex justify-content-center mt-5">
            <form className="d-flex row" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="CodigodeRegistro" className="form-label d-flex justify-content-center fs-2">Código de Registro</label>
                    <input type="number" className="form-control" name="registroEntrada" value={data} required readOnly disabled/>
                </div>
                <button type="submit" className="btn btn-primary">Registrar entrada</button>
            </form>
        </div>
    )
}
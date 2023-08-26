import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request){
    const data = await request.json();

    const newRegistro = data;

    const response = await axios.post('http://localhost:4000/api/v1/registroEntrada', newRegistro)
    return NextResponse.json(newRegistro)
}
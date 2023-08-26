import Link from "next/link";
import Image from "next/image";

async function UserData(){
    const response = await fetch('http://localhost:4000/api/v1/usuarios', {cache: 'no-store'});

    const json = response.json();

    return json;
}

export default async function TarjetaRegistroSalida(){

    const dataUser = await UserData();

    console.log(dataUser);

    return(
        <div className="container-fluid d-flex row row-cols-3 justify-content-evenly mt-5">
            {dataUser.map(User => {
                return(
                    <div className="card border-light" style={{width: 200}} key={User.idUsuario}>
                        <div className="d-flex justify-content-center">
                            <Image src="/logo-registros.png" className="card-img" alt="User image" width={200} height={180}/>
                        </div>
                        <div className="card-body">
                            <Link href={`/RegistroSalida/${User.idUsuario}`} legacyBehavior>
                                <a className="d-flex justify-content-center card-text fs-3 text-reset" style={{textDecoration: "none"}}>{User.nombreUsuario}</a>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
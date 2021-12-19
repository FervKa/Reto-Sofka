import {connect} from 'mongoose';

const conectadBD = async () =>{
    return await connect(process.env.URL_DATABASE).then(()=>{
            console.log("Conexión exitosa con la BD");
        }).catch((e)=>{
            console.error("Error al conectar la base de datos", e);
        });
}


export default conectadBD;
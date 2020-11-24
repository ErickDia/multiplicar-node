const fs = require('fs');
var colors = require('colors');


let listarTabla = (base,limite = 10) =>{
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`.green);
    }
    
}


let crearArchivo = (base,limite=10)=>{

    return new Promise((resolve,reject)=>{

        if (!Number(base)){
            reject(`el valor introducido "${base}" No es un numero`);
            return
        }
        let data = ''

        for (i = 1; i<=limite;i++){
            data +=`${base} * ${i} = ${base*i}\n`
        }


        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`archivo creado: `+`${base}.txt`.blue);
        });
    })
    

}




module.exports = {
       crearArchivo,
       listarTabla
}


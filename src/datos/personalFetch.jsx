let isOk = true;

const personalFetch = (task, idCat) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            if(isOk){
                resolve(idCat? task.filter(bebida=> bebida.categoria===idCat) : task);
            } else {
                reject ('error')
            }
        }, 2000)
    })
}
export default personalFetch;


let isOk2 = true;

export const getItem = (vinos, id) => {

    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            if(isOk2){
                console.log(id)
                let valor = vinos.find(item => item.id === parseInt(id)); 
                console.log(valor)
                resolve(valor);
            } else {
                reject ('error')
            }
        }, 2000)
    })
}
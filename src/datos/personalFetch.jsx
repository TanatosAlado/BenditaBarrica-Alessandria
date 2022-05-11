let isOk = true;

const personalFetch = (time, task) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            if(isOk){
                resolve(task);
            } else {
                reject ('error')
            }
        }, time)
    })
}
export default personalFetch;


let isOk2 = true;

export const getItem = (time, unProducto) => {

    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            if(isOk2){
                resolve(unProducto);
            } else {
                reject ('error')
            }
        }, time)
    })
}
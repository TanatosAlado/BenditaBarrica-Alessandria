let isOk = true;

    const CustomFetch = (time, task) => {
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
    export default CustomFetch;
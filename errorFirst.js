async function addition(callback){
    try{
        let c = await 1 + b;
        callback(null ,c)
    }catch(error){
        callback(error, null);
    }
}

addition((error, data)=>{
    if (error){
        console.error(error);
        return false;
    }
    console.log(data);
})

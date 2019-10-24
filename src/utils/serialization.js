export const unserialization = (data)=>{
    let jsonStr = JSON.stringify(data);
    return JSON.parse(jsonStr);
}

export const serialization = (data) =>{
    return JSON.stringify(data);
}

export const realserialization = (data) =>{
    return JSON.parse(data);
}
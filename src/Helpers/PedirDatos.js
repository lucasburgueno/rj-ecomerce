import { stock } from '../Data/Data';

export const PedirDatos =()=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve(stock)
        },1000)
    })
}
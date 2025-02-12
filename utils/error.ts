"use client"
export const getErrorMessage=(response:any)=>{
if(response.message){
if(Array.isArray(response.message)){
    return formErrorMessage(response.message(0))
} 
return formErrorMessage(response.message)

}
return "unkown error occured"
}
const formErrorMessage=(message:string)=>{
return message.charAt(0).toUpperCase()+message.slice(1)
}
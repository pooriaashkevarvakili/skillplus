
import { useState,useEffect } from "react";
import instance from "@/axios/axios"
interface users{
    img:string;
    titleOne:string;
    titleTwo:string;
}
export default function Call(){
    const [users, setUsers] = useState<users|null>(null);
    useEffect(() => {
          instance.get('/call')
                .then(response => {
                      setUsers(response.data);
                  
                })
                .catch(error => {
                      console.error('Error fetching users:', error);
                });
    }, []);
    return(
        <div className="flex items-center justify-center mt-12">
         <img src={
            
            users?.img} alt="call" className="relative w-[80px] h-[80px] right-[-10rem]"/> 
        <div className="flex flex-col ">
            <div className="relative space-y-3 ">
            <div className="yekan-bold text-2xl">{
            
            users?.titleOne}</div>
            <div dir="rtl" className="text-center relative right-[1rem] text-[#0b8ae1]">{
            
            users?.titleTwo}</div>
            <div>
              <button style={{borderRadius:"40px"}} className="w-[139px] h-[60px] relative -right-[5rem] text-lg yekan-bold text-white bg-[#0b8ae1]"> تماس بگیرید</button>
            </div>
            </div>
            
        </div>
           </div>
    )
}
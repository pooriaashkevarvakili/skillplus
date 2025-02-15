import { useState, useEffect } from "react";
import instance from "@/axios/axios";
interface users{
    img:string;
    titleOne:string;
    title:string
}
export default function WebinarLearn() {
    const [users, setUsers] = useState<users|null>(null);
    useEffect(() => {
        instance.get('/webinarLearn')
            .then(response => {
                setUsers(response.data);
             
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);
    return (
        <div dir="rtl" className="xl:flex laptopmini:block xlg:block  laptop:block lg:mr-20 md:mr-10   xl:mr-20 mt-12 sm:mr-32">

            <img className="xl:w-[472px] sm:w-[500px] md:w-[700px] lg:w-[800px] xl:h-[174px]" src={
                
                users?.img} alt="user" />

            <div className="p-2 space-y-3">
                <div className="text-[32px] yekan-bold">{
                
                users?.titleOne}</div>
                <div>
                    <p className="text-justify text-sm text-[#5B5B5B] sm:w-[30rem] md:w-[43rem] xl:w-[40rem] laptop:w-[40rem] lg:w-[50rem] lgg:w-[50rem] laptopmini:w-[40rem] xlg:w-[10rem]">

                        {
                            
                            users?.title}
                    </p>

                </div>
              
            </div>


        </div>
    )
}
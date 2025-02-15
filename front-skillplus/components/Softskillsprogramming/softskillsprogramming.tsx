import { useState, useEffect } from "react";
import instance from "@/axios/axios";
interface users{
    img:string;
    titleOne:string;
    title:string
}
export default function Softskillsprogramming() {
    const [users, setUsers] = useState<users|null>(null);
    useEffect(() => {
        instance.get('/softSkillProgramming')
            .then(response => {
                setUsers(response.data);
                
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);
    return (
        <div dir="rtl" className="xl:flex laptopmini:block xlg:block  laptop:block lg:mr-20 md:mr-10   xl:mr-20 mt-12 sm:mr-32">

            <img className="xl:w-[472px] laptop:w-[472px] w-[200px] xl:h-[174px]" src={
                
                users?.img} alt="user" />

            <div className="p-2 space-y-3">
                <div className="text-[32px] yekan-bold">{
                
                users?.titleOne}</div>
                <div>
                    <p className="text-justify text-sm text-[#5B5B5B] xl:w-[40rem] laptop:w-[30rem] lg:w-[30rem] w-[20rem]">

                        {
                            
                            users?.title}
                    </p>

                </div>
                <button style={{ borderRadius: "40px" }} className="bg-[#EE2556] yekan-bold text-sm w-[300px] h-[54px] text-center text-white">
                اطلاعات خود را جهت تماس با مشاوره ثبت کنید
                </button>
            </div>


        </div>
    )
}
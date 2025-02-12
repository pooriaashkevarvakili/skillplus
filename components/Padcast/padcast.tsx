import UserImage from "@/public/Images/user.png"
import Image from "next/image"
import { useState, useEffect } from "react";
import instance from "@/axios/axios";
interface users{
    titleOne:string;
    titleTwo:string;
    img:string;
}
export default function Padcast() {
    const [users, setUsers] = useState<users|null>(null);
    useEffect(() => {
        instance.get('/padcast')
            .then(response => {
                setUsers(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);
    return (
        <div dir="rtl" className="xl:flex laptopmini:block xlg:block  laptop:block lg:mr-20 md:mr-10  xl:mr-20 mt-10 sm:mr-32">


            <div className="p-2 space-y-3 ">
                <div className="text-[32px] yekan-bold">{users?.titleOne}</div>
                <div>
                    <p className="text-justify text-sm text-[#5B5B5B] sm:w-[30rem] md:w-[43rem] xl:w-[40rem] laptop:w-[40rem] lg:w-[50rem] lgg:w-[50rem] laptopmini:w-[40rem] xlg:w-[10rem]">

                        {users?.titleTwo}
                    </p>

                </div>
                <button style={{ borderRadius: "40px" }} className="bg-[#EE2556] yekan-bold text-sm w-[300px] h-[54px] mr-48 text-center text-white">
لینک گوش دادن به پادکست

                </button>
            </div>

            <img className="xl:w-[430px] sm:w-[500px] md:w-[700px] lg:w-[800px] xl:h-[371px] mr-10" src={users?.img} alt="user" />

        </div>
    )
}
import UserImage from "@/public/Images/user.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import instance from "@/axios/axios";

interface Users {
    titleOne: string;
    titleTwo: string;
    img: string;
}

export default function Podcast() {
    const [users, setUsers] = useState<Users | null>(null);

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
        <div dir="rtl" className="flex flex-col xl:flex-row items-center xl:items-start justify-center xl:justify-between p-4 xl:p-10 space-y-6 xl:space-y-0 xl:space-x-6">
            <div className="space-y-4 max-w-xl">
                <div className="text-3xl xl:text-4xl font-bold yekan-bold">
                    {users?.titleOne}
                </div>
                <p className="text-justify text-sm text-[#5B5B5B]">
                    {users?.titleTwo}
                </p>
                <button 
                    style={{ borderRadius: "40px" }} 
                    className="bg-[#EE2556] yekan-bold text-sm w-full xl:w-[300px] h-[54px] text-center text-white"
                >
                    لینک گوش دادن به پادکست
                </button>
            </div>

            <div className="w-full xl:w-auto">
                <img 
                    className="w-full xl:w-[430px] xl:h-[371px] rounded-lg" 
                    src={users?.img} 
                    alt="user" 
                />
            </div>
        </div>
    );
}
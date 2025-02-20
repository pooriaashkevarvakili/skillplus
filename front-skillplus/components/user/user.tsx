import { useState, useEffect } from "react";
import instance from "@/axios/axios";
import Image from "next/image";
import elan from "@/public/Images/elan.png";
import { AxiosResponse } from "axios";

interface UserData {
    title?: string;
    description?: string;
}

interface ApiResponse {
    data: UserData;
}

export default function User() {
    const [users, setUsers] = useState<UserData | null>(null);

    useEffect(() => {
        instance.get<ApiResponse>('/learnonline')
            .then((response: AxiosResponse<ApiResponse>) => {
                setUsers(response.data.data);
            })
            .catch(error => {
                console.error('خطا در دریافت داده‌ها:', error);
            });
    }, []);

    return (
        <div dir="rtl" className="xl:flex laptopmini:block xlg:block laptop:block lg:mr-20 md:mr-10 sm:mr-20 xl:mr-20 mt-5">
            <Image 
                className="xl:w-[472px] sm:w-[500px] md:w-[700px] lg:w-[800px] xl:h-[174px]"
                src={elan}
                alt="user"
            />
            <div className="p-2 space-y-3">
                <div className="text-[32px] yekan-bold">{users?.title}</div>
                <div>
                    <p className="text-justify text-sm text-[#5B5B5B] sm:w-[30rem] md:w-[43rem] xl:w-[40rem] laptop:w-[40rem] lg:w-[50rem] lgg:w-[50rem] laptopmini:w-[40rem] xlg:w-[10rem]">
                        {users?.description}
                    </p>
                </div>
                <button 
                    style={{ borderRadius: "40px" }}
                    className="bg-[#EE2556] relative xl:right-[50px] yekan-bold text-sm w-[280px] h-[54px] text-center text-white"
                >
                    اطلاعات خود را جهت تماس با مشاوره ثبت کنید
                </button>
            </div>
        </div>
    )
}
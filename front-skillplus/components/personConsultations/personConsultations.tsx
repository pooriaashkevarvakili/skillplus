import UserImage from "@/public/Images/user.png"
import Image from "next/image"
import { useState, useEffect } from "react";
import instance from "@/axios/axios";
import Group from "@/public/Images/Group.png"
import { AxiosResponse } from "axios";

interface User {
    title?: string;
    description?: string;
    img?: string;
}

interface ApiResponse {
    data: User[];
}

export default function PersonConsultations() {
    const [users, setUsers] = useState<User[] | null>(null);

    useEffect(() => {
        instance.get<ApiResponse>('/personConsulations')
            .then((response: AxiosResponse<ApiResponse>) => {
                setUsers(response.data.data);
            })
            .catch(error => {
                console.error('خطا در دریافت داده‌ها:', error);
            });
    }, []);

    return (
        <div dir="rtl" className="xl:flex laptop:flex xlg:flex block justify-between mt-10 xl:p-20 laptop:px-20 xlg:px-20 px-2">
            <div className="p-2 space-y-3">
                <div className="text-[32px] yekan-bold">{users?.[0]?.title}</div>
                <div>
                    <p className="text-justify text-sm text-[#5B5B5B] sm:w-[30rem] md:w-[43rem] xl:w-[36rem] laptop:w-[40rem] lg:w-[50rem] lgg:w-[50rem] laptopmini:w-[40rem] xlg:w-[10rem]">
                        {users?.[0]?.description}
                    </p>
                </div>
                <button 
                    style={{ borderRadius: "40px" }}
                    className="bg-[#EE2556] yekan-bold text-sm w-[300px] h-[54px] text-center text-white"
                >
                    اطلاعات خود را جهت تماس با مشاوره ثبت کنید
                </button>
            </div>
            <div>
                <Image 
                    className="xl:w-[400px] laptop:w-[400px] xlg:w-[400px] w-[300px] xl:h-[371px]"
                    src={Group}
                    alt="user"
                />
            </div>
        </div>
    )
}
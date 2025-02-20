import UserImage from "@/public/Images/user.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import instance from "@/axios/axios";
import Group from '@/public/Images/Group.png'
import axios from "axios";

// تعریف interface برای داده‌های کاربر
interface UserData {
  title: string;
  description: string;
  img: string;
}

// تعریف interface برای ساختار پاسخ API
interface ApiResponse {
  data: UserData[];
}

export default function Podcast() {
  // استفاده از نوع صحیح برای state
  const [users, setUsers] = useState<UserData[] | null>(null);

  useEffect(() => {
    // استفاده از generic type برای درخواست axios
    axios.get<ApiResponse>('http://92.119.57.159:3000/user/padcast')
      .then(response => {
        setUsers(response.data.data);
      })
      .catch(error => {
        console.error('خطا در دریافت اطلاعات:', error);
      });
  }, []);

  return (
    <div dir="rtl" className="flex flex-col xl:flex-row items-center xl:items-start justify-center xl:justify-between p-4 xl:p-10 space-y-6 xl:space-y-0 xl:space-x-6">
      <div className="space-y-4 max-w-xl">
        <div className="text-3xl xl:text-4xl font-bold yekan-bold">
          {users?.[0]?.title}
        </div>
        <p className="text-justify text-sm text-[#5B5B5B]">
          {users?.[0]?.description}
        </p>
        <button
          style={{ borderRadius: "40px" }}
          className="bg-[#EE2556] yekan-bold text-sm w-full xl:w-[300px] h-[54px] text-center text-white"
        >
          اطلاعات خود را جهت تماس با مشاوره ثبت کنید
        </button>
      </div>
      <div className="w-full xl:w-auto">
        <Image
          className="w-full xl:w-[430px] xl:h-[371px] rounded-lg"
          src={Group}
          alt="user"
        />
      </div>
    </div>
  );
}
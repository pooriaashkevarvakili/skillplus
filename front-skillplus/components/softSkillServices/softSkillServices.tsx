import { Card } from "flowbite-react";
import { useState, useEffect } from 'react';
import instance from "@/axios/axios";

interface User {
  title: string;
  img: string;
  description: string;
}

export default function SoftSkillServices() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    instance.get('/softSkillServices')
      .then(response => {
        setUsers(response.data.data || []);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl text-center font-bold yekan-bold mb-8">
        انواع خدمات سایت وب کلیک
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {users.slice(0, 2).map((user, index) => (
          <Card key={index} className="w-full max-w-[300px] h-[250px] mx-auto">
            <div className="flex items-center gap-2 rtl">
              <img 
                src={user.img} 
                alt={user.title} 
                className="w-10 h-10 object-contain"
              />
              <h3 className="text-base font-bold yekan-bold">
                {user.title}
              </h3>
            </div>
            <p className="text-sm text-[#5B5B5B] text-justify rtl">
              {user.description}
            </p>
            <button className="w-36 py-2 rounded-xl bg-[#EE2556] text-white hover:bg-[#d91e4a] transition-colors duration-200 mx-auto">
              ثبت سفارش
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}
import { useState, useEffect } from "react";
import instance from "@/axios/axios";

interface User {
  img: string;
  title: string;
}

export default function Skills() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    instance.get('/featuresMaharatNarm')
      .then(response => {
        setUsers(response.data.data || []);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-8 yekan-bold">ویژگی مهارت های نرم</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {users.slice(0, 7).map((user, index) => (
          <div key={index} className="flex flex-col items-center justify-center p-4 hover:transform hover:scale-105 transition-transform duration-300">
            <div className="mb-4">
              <img 
                src={user.img} 
                alt={user.title}
                className="w-20 h-20 object-contain"
              />
            </div>
            <h3 className="text-center text-lg font-medium max-w-[140px]">
              {user.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
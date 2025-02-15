import { Card } from "flowbite-react";
import { useState, useEffect } from 'react';
import instance from "@/axios/axios";

interface User {
  img: string;
  title: string;
}

export default function Article() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    instance.get('/article')
      .then(response => {
        setUsers(response.data.data || []);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div className="mt-12 container mx-auto px-4">
      <div className="flex items-center justify-center text-2xl yekan-bold mb-8">مقالات مرتبط</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {users.map((user, index) => (
          <Card
            key={index}
            className="max-w-sm w-full hover:shadow-lg transition-shadow duration-300"
            imgAlt={user.title}
            imgSrc={user.img}
          >
            <h5 className="text-lg text-center font-bold tracking-tight text-gray-900 dark:text-white">
              {user.title}
            </h5>
          </Card>
        ))}
      </div>
    </div>
  );
}
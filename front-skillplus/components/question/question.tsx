import { Accordion } from "flowbite-react";
import { useState, useEffect } from "react";
import instance from "@/axios/axios";

interface User {
  title: string;
}

export default function Question() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    instance.get('/question')
      .then(response => {
        setUsers(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-8 yekan-bold">سوالات متداول</h2>
      <div className="max-w-3xl mx-auto" dir="rtl">
        <Accordion collapseAll>
          {users.slice(0, 3).map((user, index) => (
            <Accordion.Panel key={index}>
              <Accordion.Title className="text-right">
                {user.title}
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-600 dark:text-gray-400 text-right">
                  Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                  dropdowns, modals, navbars, and more.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
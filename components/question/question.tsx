import { Accordion } from "flowbite-react";
import { useState,useEffect } from "react";
import instance from "@/axios/axios";
interface users{
  titleOne:string;
  titleTwo:string;
  titleThree:string;
  titleFour:string;
  titleFive:string;
}
export default function Question() {
    const [users, setUsers] = useState<users |null>(null);
    useEffect(() => {
        instance.get('/question')
            .then(response => {
                setUsers(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);
  return (
    <div>
        <div className="flex items-center justify-center text-2xl yekan-bold mt-8">سوالات متداول</div>
    <div className="mt-8" dir="rtl">
    <Accordion collapseAll  >
      <Accordion.Panel>
        <Accordion.Title>{users?.titleOne}</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
            dropdowns, modals, navbars, and more.
          </p>
         
        </Accordion.Content>
      </Accordion.Panel >
      <Accordion.Panel className="mt-6">
        <Accordion.Title>
        {users?.titleTwo}
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
            has a design equivalent in our Figma file.
          </p>

        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel className="mt-6">
        <Accordion.Title>{users?.titleThree}</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
            components, whereas Tailwind UI offers sections of pages.
          </p>

          
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel className="mt-6">
        <Accordion.Title>{users?.titleFour }</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
            dropdowns, modals, navbars, and more.
          </p>
         
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel className="mt-6">
        <Accordion.Title>{users?.titleFive}</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
            dropdowns, modals, navbars, and more.
          </p>
         
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
    </div>
    </div>
 
  );
}
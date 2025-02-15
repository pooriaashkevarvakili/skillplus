import instance from "@/axios/axios"
import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
interface User {
    img: string;
    title: string;
}

export default function ApplicationMaharatNarm() {
    const [users, setUsers] = useState<User[]>([]);
    const boxShadow = {
        boxShadow: "0px 10px 50px 0px #EEEEEE"
    }

    useEffect(() => {
        instance.get('/applicationMaharatNarm')
            .then(response => {
                setUsers(response.data.data);
           
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    return (
        <>
            <div className="flex items-center justify-center text-2xl yekan-bold mt-8">کاربرد مهارت های نرم</div>
            <div className="flex flex-wrap items-center justify-center gap-12 mt-4 px-4">
                {users.slice(0, 7).map((user, index) => (
                    <Card key={index} style={boxShadow} className="w-40 h-40">
                        <div className="flex flex-col">
                            <div className="items-center flex justify-center">
                                <img className="w-14 h-14" src={user.img} alt={user.title} />
                            </div>
                            <div className="-ml-3 text-center w-[140px] mt-3">{user.title}</div>
                        </div>
                    </Card>
                ))}
            </div>
        </>
    )
}
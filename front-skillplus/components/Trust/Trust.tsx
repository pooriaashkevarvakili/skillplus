import { useState, useEffect } from 'react';
import instance from '@/axios/axios';

interface Users {
    imgOne: string;
    imgTwo: string;
    imgThree: string;
    imgFour: string;
    imgFive: string;
    imgSix: string;
    imgSeven: string;
    imgEight: string;
}

export default function Trust() {
    const [users, setUsers] = useState<Users | null>(null);

    useEffect(() => {
        instance.get('/trust')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    return (
        <div className="mt-12">
            <div className="flex text-3xl yekan-bold items-center justify-center">
                به ما اعتماد کرده اند
            </div>

            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 p-4">
                <img className="w-full h-auto object-cover" src={users?.imgOne} alt="Trusted User 1" />
                <img className="w-full h-auto object-cover" src={users?.imgTwo} alt="Trusted User 2" />
                <img className="w-full h-auto object-cover" src={users?.imgThree} alt="Trusted User 3" />
                <img className="w-full h-auto object-cover" src={users?.imgFour} alt="Trusted User 4" />
                <img className="w-full h-auto object-cover" src={users?.imgFive} alt="Trusted User 5" />
                <img className="w-full h-auto object-cover" src={users?.imgSix} alt="Trusted User 6" />
                <img className="w-full h-auto object-cover" src={users?.imgSeven} alt="Trusted User 7" />
                <img className="w-full h-auto object-cover" src={users?.imgEight} alt="Trusted User 8" />
            </div>
        </div>
    );
}
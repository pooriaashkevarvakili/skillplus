import { useState, useEffect } from 'react'
import instance from '@/axios/axios';
import { Footer } from "flowbite-react";
interface users{
    address:string;
    iconOne:string;
    telOne:string;
    telTwo:string;
    iconTwo:string;
    iconThree:string;
}
export default function Legend() {
    const [users, setUsers] = useState<users|null>(null);

    useEffect(() => {
        instance.get('/callAddress')
            .then(response => {
                setUsers(response.data);
              
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);
    return (
        <div className='mt-3 '>
            <div className='flex gap-4'>
                <div className='w-[170px] text-sm md:text-xs'>{
                    
                    users?.address}</div>
                <img className='w-6 h-6 xl:-right-14 laptop:right-0 lg:right-0 xlg:right-0 relative md:right-[-60px]' src={
                    
                    users?.iconOne} />
            </div>
            <div className='flex gap-4'>
                <div className='flex flex-col'>
                    <div className='w-[230px]'>{
                        
                        users?.telOne}</div>
                    <div className='w-[230px] '>{
                        
                        users?.telTwo}</div>
                </div>

                <img className='w-6 h-6' src={
                
                    users?.iconTwo} />
            </div>
            <div className='flex gap-4'>
                
                <Footer.Link className='list-none' href="#"> تلگرام </Footer.Link>
                <Footer.Link className='list-none' href="#">واتس اپ</Footer.Link>
                <img src={
                    
                    users?.iconThree} className="w-6 relative -right-[60px] h-6" />
            </div>
        </div>
    )
}
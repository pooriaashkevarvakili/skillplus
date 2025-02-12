import { Card } from "flowbite-react";
import {useState,useEffect} from 'react'
import instance from "@/axios/axios";
interface users{
    titleTwo:string;
    imgTwo:string;
    descriptionTwo:string;
    titleOne:string;
    imgOne:string;
    descriptionOne:string
}
export default function SoftSkillServices(){
    const [users, setUsers] = useState<users|null>(null);
    useEffect(() => {
        instance.get('/softSkillServices')
            .then(response => {
                setUsers(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);
    return(
    <div className="mt-12">
    <div className="flex items-center justify-center text-2xl yekan-bold">انواع خدمات سایت مهارت نرم</div>
    <div className="xl:flex laptop:flex lg:flex xl:ml-10 lg:ml-10 laptop:ml-10 md:ml-64 ml-52  block items-center mt-4 gap-4 justify-center">
    <Card className="w-[300px] h-[250px]">
            <div className="flex relative -right-[20px] items-center gap-2">
            <div className="text-base yekan-bold">{
                
                users?.titleTwo}</div>
                <img className="w-10 h-10" src={
                    
                    users?.imgTwo}/>
              
            </div>
            <p className="text-sm ml-2 w-[250px] text-justify text-[#5B5B5B]">
                {
               
                users?.descriptionTwo}
            </p>
            <button className="w-[140px] h-[200px] ml-24 rounded-xl bg-[#EE2556] text-white">ثبت سفارش</button>
        </Card>        
        <Card className="w-[300px] xl:mt-0 lg:mt-0 xlg:mt-0 laptop:mt-0 sm:mt-5 md:mt-5 h-[250px]">
            <div className="flex items-center gap-2">
            <div className="text-base yekan-bold">{
                
                users?.titleOne}</div>
                <img className="w-10 h-10" src={
                    
                    users?.imgOne}/>
              
            </div>
            <p className="text-sm text-justify text-[#5B5B5B]">
                {
               
                users?.descriptionOne}
            </p>
            <button className="w-[140px] h-[200px] ml-24 rounded-xl bg-[#EE2556] text-white">ثبت سفارش</button>
        </Card>
    </div>
    </div>
    )
}
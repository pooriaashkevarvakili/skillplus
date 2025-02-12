import { Card } from "flowbite-react";
import {useState,useEffect} from 'react'
import instance from "@/axios/axios";
interface users{
  imgOne:string;
  titleOne:string;
  titleTwo:string;
  imgTwo:string;
  imgThree:string;
  titleThree:string;
}
export default function Article(){
    const [users, setUsers] = useState<users|null>(null);
    useEffect(() => {
        instance.get('/article')
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
    <div className="flex items-center justify-center text-2xl yekan-bold"> مقالات مرتبط</div>
    <div className="xl:flex laptop:flex lg:flex xl:ml-10 lg:ml-10 laptop:ml-10 md:ml-64 ml-52  block items-center mt-8 gap-4 justify-center">
    <Card
      className="max-w-sm"
      imgSrc={
        
        users?.imgOne}
    >
      <h5 className="text-lg text-center font-bold tracking-tight text-gray-900 dark:text-white">
        {
        
        users?.titleOne}
      </h5>
      
    </Card>       
    <Card
      className="max-w-sm"
      imgSrc={
        
        users?.imgTwo}
    >
      <h5 className="text-lg text-center font-bold tracking-tight text-gray-900 dark:text-white">
{

users?.titleTwo}
      </h5>
    
    </Card>
    <Card
      className="max-w-sm"
      imgSrc={
        
        users?.imgThree}
    >
      <h5 className="text-sm text-center font-bold tracking-tight text-gray-900 dark:text-white">
{

users?.titleThree}
      </h5>
    
    </Card>
    </div>
    </div>
    )
}
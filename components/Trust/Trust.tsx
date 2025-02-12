import {useState,useEffect} from 'react'
import instance from '@/axios/axios';
interface users{
    imgOne:string;
    imgTwo:string;
    imgThree:string;
    imgFour:string;
    imgFive:string;
    imgSix:string;
    imgSeven:string;
    imgEight:string;
}
export default function Trust(){
        const [users, setUsers] = useState<users|null>(null);
    
    useEffect(() => {
        instance.get('/trust')
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
            <div className="flex text-3xl yekan-bold items-center justify-center ">به ما اعتماد کرده اند</div>
        
             <div className="grid xl:grid-cols-4 laptop:grid-cols-4 xlg:grid-cols-4 lg:grid-cols-2 grid-cols-1 ">
                <img className='w-64 h-64' src={
                    
                    users?.imgOne}/>
                <img className='w-64 h-64' src={
                
                    users?.imgTwo}/>
                <img className='w-64 h-64' src={
                    
                    users?.imgThree}/>
                <img className='w-64 h-64' src={
                    
                    users?.imgFour}/>
               
                <img className='w-72 h-64' src={
                    
                    users?.imgFive}/>
                <img className='w-64 h-64' src={
                    
                    users?.imgSix}/>
                <img className='w-64 h-64' src={
                    
                    users?.imgSeven}/>
                <img className='w-64 h-64' src={
                    
                    users?.imgEight}/>
                </div> 
                <div>

               
            </div>
        </div>
    )
}
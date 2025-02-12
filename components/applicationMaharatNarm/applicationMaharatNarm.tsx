
import instance from "@/axios/axios"
import { Card } from "flowbite-react";
interface users{
    imgOne:string;
    titleOne:string;
titleTwo:string;
imgTwo:string;
imgThree:string;
titleThree:string;
imgFour:string;
titleFour:string;
imgFive:string;
titleFive:string;
imgSix:string;
titleSix:string;
}
import { useEffect, useState } from "react"
export default function ApplicationMaharatNarm() {
    const [users, setUsers] = useState<users|null>(null);
    const boxShadow={
        boxShadow: "0px 10px 50px 0px #EEEEEE"

    }
    useEffect(() => {
        instance.get('/applicationMaharatNarm')
            .then(response => {
                setUsers(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);
    return (
        <>
            <div className="flex items-center justify-center text-2xl yekan-bold mt-8">کاربرد مهارت های نرم</div>
            <div className="xl:flex   lg:grid lg:grid-cols-4  relative ml-52 xl:ml-0 laptop:ml-0 laptopmini:ml-0 lg:ml-0  block  items-center justify-center gap-12 mt-4">
                <Card style={boxShadow} className="w-40 h-40">
                    <div className="flex flex-col">
                        <div className="items-center flex justify-center">
                            <img className="w-14 h-14 " src={
                                
                                users?.imgOne} />
                        </div>
                        <div className="-ml-3 text-center w-[140px] mt-3">{
                        
                            users?.titleOne}</div>
                    </div>
                </Card>
                <Card style={boxShadow} className="w-40 h-40">
                    <div className="flex flex-col">
                        <div className="items-center flex justify-center">
                            <img className="w-14 h-14 " src={
                                
                                users?.imgTwo} />
                        </div>
                        <div className="-ml-1 text-center mt-3 w-[110px]">{
                            
                            users?.titleTwo}</div>
                    </div>
                </Card>
                <Card style={boxShadow} className="w-40 h-40">
                    <div className="flex flex-col">
                        <div className="items-center flex justify-center">
                            <img className="w-14 h-14 " src={
                                
                                users?.imgThree} />
                        </div>
                        <div className="-ml-3 text-center w-[130px] mt-3">{
                            
                            users?.titleThree}</div>
                    </div>
                </Card>
                <Card style={boxShadow} className="w-40 h-40">
                    <div className="flex flex-col">
                        <div className="items-center flex justify-center">
                            <img className="w-14 h-14" src={
                                
                                users?.imgFour} />
                        </div>
                        <div className="-ml-3 text-center mt-3 w-[130px]">{
                            
                            users?.titleFour} </div>
                    </div>
                </Card>
                <Card style={boxShadow} className="w-40 h-40">
                    <div className="flex flex-col">
                        <div className="items-center flex justify-center">
                            <img className="w-14 h-14" src={
                                
                                users?.imgFive} />
                        </div>
                        <div className="-ml-3 text-center mt-3 w-[110px]"> {
                            
                            users?.titleFive}</div>
                    </div>
                </Card>
                <Card style={boxShadow} className="w-40 h-40">

                    <div className="flex flex-col">
                        <div className="items-center flex justify-center">
                            <img className="w-14 h-14" src={
                                
                                users?.imgSix} />
                        </div>
                        <div className="-ml-3 w-[120px] text-center mt-3">{
                            
                            users?.titleSix}</div>
                    </div>
                </Card>
            </div>
        </>
    )
}
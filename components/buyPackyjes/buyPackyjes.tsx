
import instance from "@/axios/axios"
import { GoDeviceCameraVideo } from "react-icons/go";
import {  Timeline } from "flowbite-react";
import { TiTick } from "react-icons/ti";
import { useEffect, useState } from "react"
import { AiFillWallet } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
import { GrTask } from "react-icons/gr";
import { CgClipboard } from "react-icons/cg";
interface users{
  titleOne:string;
  discriptionOne:string;
  titleTwo:string;
  discriptionTwo:string;
  titleThree:string;
  discriptionThree:string;
  titleFour:string;
  discriptionFour:string;
  titleFive:string;
  discriptionFive:string;
  titleSix:string;
  discriptionSix:string;
}
export default function BuyPackayjes() {
    const [users, setUsers] = useState<users|null>(null);

    useEffect(() => {
        instance.get('/buyPackyjes')
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
            <div className="flex items-center justify-center text-2xl yekan-bold mt-8"> روند انجام خرید  پکیج</div>
     <div className="flex items-center justify-center mt-12">
     <Timeline>
      <Timeline.Item>
        <Timeline.Point icon={TiTick}/>
           
            
        <Timeline.Content>
          <Timeline.Time className="text-base yekan-bold text-black">{
          
          users?.titleOne}</Timeline.Time>
          <Timeline.Title className="text-sm yekan-light text-[#5b5b5b]">{
          
          users?.discriptionOne}</Timeline.Title>
         
          
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point  icon={GoDeviceCameraVideo} />
        <Timeline.Content>
          <Timeline.Time className="text-base yekan-bold text-black">{
          
          users?.titleTwo}</Timeline.Time>
          <Timeline.Title className="text-sm yekan-light text-[#5b5b5b]">{
            
            users?.discriptionTwo
            }</Timeline.Title>

        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={AiFillWallet} />
        <Timeline.Content>
        <Timeline.Time className="text-base yekan-bold text-black">{
          
          users?.titleThree}</Timeline.Time>
 <Timeline.Title className="text-sm yekan-light text-[#5b5b5b]">{
            
            users?.discriptionThree
            }</Timeline.Title>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point  icon={GoDeviceCameraVideo} />
        <Timeline.Content>
          <Timeline.Time className="text-base yekan-bold text-black">{
          
          users?.titleTwo}</Timeline.Time>
          <Timeline.Title className="text-sm yekan-light text-[#5b5b5b]">{
            
            users?.discriptionTwo
            }</Timeline.Title>

        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={AiFillWallet} />
        <Timeline.Content>
        <Timeline.Time className="text-base yekan-bold text-black">{
          
          users?.titleThree}</Timeline.Time>
 <Timeline.Title className="text-sm yekan-light text-[#5b5b5b]">{
            
            users?.discriptionThree
            }</Timeline.Title>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point  icon={IoIosCall} />
        <Timeline.Content>
          <Timeline.Time className="text-base yekan-bold text-black">{
          
          users?.titleFour}</Timeline.Time>
          <Timeline.Title className="text-sm yekan-light text-[#5b5b5b]">{
            
            users?.discriptionFour
            }</Timeline.Title>

        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={GrTask} />
        <Timeline.Content>
        <Timeline.Time className="text-base yekan-bold text-black">{
          
          users?.titleFive}</Timeline.Time>
 <Timeline.Title className="text-sm yekan-light text-[#5b5b5b]">{
            
            users?.discriptionFive
            }</Timeline.Title>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point  icon={CgClipboard} />
        <Timeline.Content>
          <Timeline.Time className="text-base yekan-bold text-black">{
          
          users?.titleSix}</Timeline.Time>
          <Timeline.Title className="text-sm yekan-light text-[#5b5b5b]">{
            
            users?.discriptionSix
            }</Timeline.Title>

        </Timeline.Content>
      </Timeline.Item>
      
    </Timeline>
     </div>
        </>
    )
}
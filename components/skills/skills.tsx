
import instance from "@/axios/axios"
import { useEffect, useState } from "react"
interface users{
      imgOne:string;
      titleOne:string;
      imgTwo:string;
      titleTwo:string;
      imgThree:string;
      titleThree:string
      imgFour:string;
      titleFour:string;
      imgFive:string;
      titleFive:string;
      imgSix:string;
      titleSix:string;
      imgSeven:string;
      titleSeven:string;
}
export default function Skills() {
      const [users, setUsers] = useState<users|null>(null);
      useEffect(() => {
            instance.get('/featuresMaharatNarm')
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
                  <div className="flex items-center justify-center text-2xl yekan-bold mt-8">ویژگی مهارت های نرم</div>
                  <div className="xl:flex lg:grid-cols-4 lg:grid   relative ml-52 xl:ml-0 laptop:ml-0 laptopmini:ml-0 lg:ml-0  block  items-center justify-center gap-12 mt-8">
                        <div className="flex flex-col">
                              <div className="items-center flex ml-4">
                                    <img className="w-20 h-20 " src={
                                          
                                           users?.imgOne} />
                              </div>
                              <div className="-ml-3 text-center w-[140px] mt-3">{
                                    
                                    users?.titleOne}</div>
                        </div>
                        <div className="flex flex-col">
                              <div className="items-center flex ml-4">
                                    <img className="w-20 h-20 " src={
                                          
                                          users?.imgTwo} />
                              </div>
                              <div className="-ml-3 text-center mt-3 w-[110px]">{
                                    
                                    users?.titleTwo}</div>
                        </div>
                        <div className="flex flex-col">
                              <div className="items-center flex ml-4">
                                    <img className="w-20 h-20 " src={
                                          
                                          users?.imgThree} />
                              </div>
                              <div className="-ml-3 text-center w-[130px] mt-3">{
                                    
                                    users?.titleThree}</div>
                        </div>
                        <div className="flex flex-col">
                              <div className="items-center flex ml-4">
                                    <img className="w-20 h-20" src={
                                          
                                          users?.imgFour} />
                              </div>
                              <div className="-ml-3 text-center mt-3 w-[130px]">{
                                    
                                    users?.titleFour} </div>
                        </div>
                        <div className="flex flex-col">
                              <div className="items-center flex ml-2">
                                    <img className="w-20 h-20" src={
                                          
                                          users?.imgFive} />
                              </div>
                              <div className="-ml-3 text-center mt-3 w-[110px]"> {
                                    
                                    users?.titleFive}</div>
                        </div>
                        <div className="flex flex-col">
                              <div className="items-center flex ml-2">
                                    <img className="w-20 h-20" src={
                                          
                                          users?.imgSix} />
                              </div>
                              <div className="-ml-3 w-[120px] text-center mt-3">{
                                    
                                    users?.titleSix}</div>
                        </div>
                        <div className="flex flex-col">
                              <div className="items-center flex ml-2">
                                    <img className="w-20 h-20" src={
                                          
                                          users?.imgSeven} />
                              </div>
                              <div className="-ml-3 text-center w-[130px] mt-3">{
                                    
                                    users?.titleSeven}</div>
                        </div>
                  </div>
            </>
      )
}
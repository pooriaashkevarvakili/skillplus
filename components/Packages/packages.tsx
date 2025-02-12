import { Card, Select } from "flowbite-react";
import { useState, useEffect } from 'react'
import instance from "@/axios/axios";
interface PackageTitle {
    titleOne: string;
    titleTwo: string;
  }
export default function Packages() {
    const [PackageTitle , setPackageTitles] = useState<PackageTitle| null>(null);
    useEffect(() => {
        instance.get('/packages')
            .then(response => {
                setPackageTitles(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);
    return (
        <div dir="rtl" className="mr-20 mt-8">
            <Card className="xl:w-[1100px] laptopmini:w-[700px] laptop:w-[700px] lgg:w-[200px] smOne:w-[500px] sm:w-[500px] md:w-[700px] lg:w-[800px]  ">
                <div className="xl:flex justify-between laptop:flex laptopmini:flex xlg:block lg:block  ">
                    <div>
                        <div className="flex flex-col gap-y-2">
                            <div className="text-2xl yekan-bold">
                        {PackageTitle?.titleOne}
                            </div>
                            <div className="text-sm text-[#919191]">
                                {PackageTitle?.titleTwo}
                            </div>
                        </div>

                    </div>
                    <div  >
                        <button className="w-[150px] yekan-bold h-[56px] text-white rounded-full bg-[#0B8AE1]">سفارش پکیج</button>
                    </div>
                </div>

            </Card>
        </div>
    )
}
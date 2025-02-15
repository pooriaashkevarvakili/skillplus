import { Card,Select } from "flowbite-react";
export default function Packes(){
    return(
     <div dir="rtl" className="xl:mr-20 lg:mr-20 laptop:mr-20 md:mr-20 mr-2 mt-4">
           <Card  className="xl:w-[1100px] laptop:w-[1200px] lg:w-[1200px] md:w-[700px] w-[450px]  ">
        <div className="xl:flex laptop:flex justify-between laptopmini:flex xlg:block lg:block  ">
       <div className="text-[#08BA6D] flex gap-4 ">
       قیمت پکیج آموزشی یا مشاوره
       <Select 
  id="countries" 
  required 
  className="w-[256px] mr-10 h-[56px]" 
  

>
  <option>
    یک ساعت
  </option>
  <option>
     نصف روز 
  </option>
  <option>
     کل روز
  </option>
</Select>
       </div>
 
<div className="flex mr-5">
        <div className="block">
        <div>120000</div>
        <div>تومان</div>
        </div>
        <div className="block mr-5">
        <div>120000</div>
        <div>تومان</div>
        </div>
        <div className="block mr-5">
        <div>120000</div>
        <div>تومان</div>
        </div>
        </div>
        </div>
     
      </Card>
     </div>
    )
}
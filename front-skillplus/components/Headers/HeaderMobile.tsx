import { Button, Drawer } from "flowbite-react";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import trandis from "@/public/Images/trandis.png";
import Image from 'next/image'
import Link from 'next/link'
export default function HeaderMobile(){
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => setIsOpen(false);
    return(
      <>
<div dir="rtl" className="flex  justify-between">
    <div>
    <div  className="">
        <Button className="bg-yellow-400 hover:bg-yellow-400  text-black" onClick={() => setIsOpen(true)}><FaBars /></Button>
      </div>
      <Drawer open={isOpen} onClose={handleClose} position="right">
        <Drawer.Header />
        <Drawer.Items>
        
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Link
              href="#"
              className=" px-2 py-2  text-lg font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              صفحه اصلی
            </Link>
            <Link
              href="#"
              className=" px-2 py-2  text-lg font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
             خدمات
            </Link>
            <Link
              href="#"
              className=" px-2 py-2  text-lg font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
             قیمت مشاوره
            </Link>
            <Link
              href="#"
              className=" px-2 py-2  text-lg font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
            راهنما
            </Link>
            <Link
              href="#"
              className=" px-2 py-2  text-lg font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
            درباره روانشناسی 
            </Link>
            <Link
              href="#"
              className=" px-2 py-2  text-lg font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
             وبلاگ
            </Link>
           
            <Link
              href="/login"
              className=" px-2 py-2  text-lg font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
            ورود
            </Link>
           
            <Link
              href="/signup"
              className=" px-2 py-2  text-lg font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
             ثبت نام
            </Link>
          </div>
        </Drawer.Items>
      </Drawer> 
    </div>  
    
    <div>
        <Image alt="trandis" src={trandis} className="w-20 h-10" />
    </div>
    <div>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.97 18.3315C21.97 18.6915 21.89 19.0615 21.72 19.4215C21.55 19.7815 21.33 20.1215 21.04 20.4415C20.55 20.9815 20.01 21.3715 19.4 21.6215C18.8 21.8715 18.15 22.0015 17.45 22.0015C16.43 22.0015 15.34 21.7615 14.19 21.2715C13.04 20.7815 11.89 20.1215 10.75 19.2915C9.6 18.4515 8.51 17.5215 7.47 16.4915C6.44 15.4515 5.51 14.3615 4.68 13.2215C3.86 12.0815 3.2 10.9415 2.72 9.81147C2.24 8.67147 2 7.58146 2 6.54146C2 5.86146 2.12 5.21147 2.36 4.61146C2.6 4.00146 2.98 3.44146 3.51 2.94146C4.15 2.31146 4.85 2.00146 5.59 2.00146C5.87 2.00146 6.15 2.06146 6.4 2.18146C6.66 2.30146 6.89 2.48146 7.07 2.74146L9.39 6.01147C9.57 6.26147 9.7 6.49146 9.79 6.71146C9.88 6.92146 9.93 7.13147 9.93 7.32147C9.93 7.56147 9.86 7.80146 9.72 8.03146C9.59 8.26146 9.4 8.50146 9.16 8.74146L8.4 9.53146C8.29 9.64146 8.24 9.77147 8.24 9.93147C8.24 10.0115 8.25 10.0815 8.27 10.1615C8.3 10.2415 8.33 10.3015 8.35 10.3615C8.53 10.6915 8.84 11.1215 9.28 11.6415C9.73 12.1615 10.21 12.6915 10.73 13.2215C11.27 13.7515 11.79 14.2415 12.32 14.6915C12.84 15.1315 13.27 15.4315 13.61 15.6115C13.66 15.6315 13.72 15.6615 13.79 15.6915C13.87 15.7215 13.95 15.7315 14.04 15.7315C14.21 15.7315 14.34 15.6715 14.45 15.5615L15.21 14.8115C15.46 14.5615 15.7 14.3715 15.93 14.2515C16.16 14.1115 16.39 14.0415 16.64 14.0415C16.83 14.0415 17.03 14.0815 17.25 14.1715C17.47 14.2615 17.7 14.3915 17.95 14.5615L21.26 16.9115C21.52 17.0915 21.7 17.3015 21.81 17.5515C21.91 17.8015 21.97 18.0515 21.97 18.3315Z" stroke="#4AAE20" strokeWidth="1.5" strokeMiterlimit="10"/>
</svg>

    </div>
    </div>
    </>
    )
}
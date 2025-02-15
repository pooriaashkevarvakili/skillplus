import { Footer } from "flowbite-react";
import Image from "next/image";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import Logo from "@/public/Images/LOGO.png"
import Legend from "./Legend";
import Namad from "@/public/Images/namad.png"
export default function FooterSkillPlus() {
  return (
    <div className="mt-8 ">
        <footer  className="">
      <div className="w-full ">
        <div className=" flex justify-between    ">
        
          <div className="grid xl:ml-[200px] xlg:w-[100px] laptop:w-[100px] ml-[200px] lg:ml-[200px]  xl:grid-cols-4 laptop:grid-col-4 lg:grid-cols-3 grid-cols-1">
          <div className="  " dir="">
              <Footer.Title className="text-[#EE2556] md:w-[100px]" title="درباره ترنسیس" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="relative -right-[40px]">درباره ما</Footer.Link>
                <Footer.Link className="relative right-[-30px]" href="#">تماس با ما</Footer.Link>
                <Footer.Link className="relative right-[-15px]" href="#">اخبار مهارت من</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="relative xl:right-0 laptop:right-0 lg:right-0 xlg:right-0 ">
              <Footer.Title className="text-[#EE2556]" title="بیشتر بدانید" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">قیمت مشاور</Footer.Link>
                <Footer.Link href="#" className="relative -right-[40px]">راهنما</Footer.Link>
                <Footer.Link className="relative right-[15px]" href="#">سوالات متداول</Footer.Link>
                <Footer.Link className="relative -right-[40px]" href="#">وبلاگ</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="relative xl:right-0  laptop:right-0 lg:right-0 xlg:right-0 ">
              <Footer.Title className="text-[#EE2556]" title="خدمات" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">مشاوره تخصصی</Footer.Link>
                <Footer.Link href="#">مشاوره فوری</Footer.Link>
                <Footer.Link href="#">مشاوره کتاب</Footer.Link>
                <Footer.Link href="#">مشاوره فیلم</Footer.Link>

              </Footer.LinkGroup>
              <Image alt="" className="w-16 h-16 mt-4" src={Namad}/>
            </div>
            <div>
            <div className="xl:right-0 laptop:right-0 xlg:right-0 lg:right-0 relative ">
                <Image alt="" src={Logo}/>
                <Legend/>
            </div>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full px-8 sm:flex sm:items-center sm:justify-between">
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
       <div>
       تمامی حقوق متعلق به مهارت است. ©‏ 1402-۱403
       </div>
         
        </div>
      </div>
    </footer>
    </div>
  );
}
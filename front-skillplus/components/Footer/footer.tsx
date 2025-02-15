import { Footer } from "flowbite-react";
import Image from "next/image";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import Logo from "@/public/Images/LOGO.png";
import Legend from "./Legend";
import Namad from "@/public/Images/namad.png";

export default function FooterSkillPlus() {
  return (
    <div className="mt-8">
      <footer>
        <div className="w-full">
          <div className="flex flex-wrap justify-between px-4 md:px-8">
            <div className="w-full md:w-1/2 lg:w-1/4 mb-8 lg:mb-0">
              <Footer.Title className="text-[#EE2556]" title="درباره ترنسیس" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">درباره ما</Footer.Link>
                <Footer.Link href="#">تماس با ما</Footer.Link>
                <Footer.Link href="#">اخبار مهارت من</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 mb-8 lg:mb-0">
              <Footer.Title className="text-[#EE2556]" title="بیشتر بدانید" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">قیمت مشاور</Footer.Link>
                <Footer.Link href="#">راهنما</Footer.Link>
                <Footer.Link href="#">سوالات متداول</Footer.Link>
                <Footer.Link href="#">وبلاگ</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 mb-8 lg:mb-0">
              <Footer.Title className="text-[#EE2556]" title="خدمات" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">مشاوره تخصصی</Footer.Link>
                <Footer.Link href="#">مشاوره فوری</Footer.Link>
                <Footer.Link href="#">مشاوره کتاب</Footer.Link>
                <Footer.Link href="#">مشاوره فیلم</Footer.Link>
              </Footer.LinkGroup>
              <Image alt="" className="w-16 h-16 mt-4" src={Namad} />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 mb-8 lg:mb-0">
              <div className="flex justify-center lg:justify-start">
                <Image alt="" src={Logo} />
              </div>
              <Legend />
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full px-4 md:px-8 py-4 sm:flex sm:items-center sm:justify-between">
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={BsGithub} />
              <Footer.Icon href="#" icon={BsDribbble} />
            </div>
            <div className="mt-4 text-center sm:mt-0">
              تمامی حقوق متعلق به مهارت است. ©‏ 1402-۱403
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
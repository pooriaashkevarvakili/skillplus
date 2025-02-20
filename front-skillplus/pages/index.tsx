import {useEffect,useState} from 'react'
import instance from "@/axios/axios";
import tarjomeOne from "@/public/Images/tarjomeOne.png"
import Header from "@/components/Headers/Headers";
import Tarjome from "@/public/Images/tarjome.png";
import Image from 'next/image';
import Skills from "@/components/skills/skills";
import Call from "@/components/call/call"
import {  toast } from 'react-toastify';
import User from "@/components/user/user"
import Mask from "@/public/Images/Mask.png"
import MaskMobile from "@/public/Images/maskMobile.png"
import Packes from "@/components/packes/Packes"
import Moshaver from "@/public/Images/Moshaver.png"
import MoshaverMobile from "@/public/Images/moshaverMobile.png"
import ApplicationMaharatNarm from "@/components/applicationMaharatNarm/applicationMaharatNarm"
import PersonConsultations from "@/components/personConsultations/personConsultations"
import Softskillsprogramming from "@/components/Softskillsprogramming/softskillsprogramming"
import SoftSkillServices from "@/components/softSkillServices/softSkillServices"
import WebinarLearn from "@/components/webinarLearn/webinarLearn"
import Padcast from "@/components/Padcast/padcast"
import BuyPackayjes from "@/components/buyPackyjes/buyPackyjes"
import Trust from "@/components/Trust/Trust"
import VideoLearn from "@/components/videoLearn/videoLearn"
import Article from "@/components/Article/article";
import Question from "@/components/question/question"
import Packages from "@/components/Packages/packages";
import FooterSkillPlus from "@/components/Footer/footer"
export default function Home() {
  const [users, setUsers] = useState([]);

  const notify = () => toast(`${
    //@ts-ignore
    users.name}`);
  return (
  <div>

    <Header/>
    <div className="flex mt-3 items-center justify-center">
    <Image className="  xl:block laptop:block laptopmini:block lg:block  hidden xl:w-[1046px] lg:w-[800px] md:w-[800px] laptop:[800px]" src={Tarjome} alt="tarjome"/>
    <Image className="xl:hidden lg:hidden block "  src={tarjomeOne} alt="tarjomeOne"/>
    </div>
    <Skills/>
    <Call/>
    <Packes/>
    <ApplicationMaharatNarm/>
    <Softskillsprogramming/>
    <User/> 
    <SoftSkillServices/>
    <WebinarLearn/>
    {/* <VideoLearn/> */}
    <div className="flex mt-8 items-center justify-center">
    <Image className=" xl:block laptop:block laptopmini:block lg:block  hidden xl:w-[1046px] laptop:w-[1046px] w-[800px]" src={Moshaver} alt="tarjome"/>
    <Image className="xl:hidden lg:hidden block w-[1000px]" src={MoshaverMobile} alt="tarjomeOne"/>
    </div>
    <div className="flex mt-10 items-center justify-center">
    <Image className="xl:w-[1046px] xl:block laptopmini:block laptopmini:w-[1046px]  laptop:block relative xl:right-0 laptop:right-0 xlg:right-0 lgg:right-0 lg:-right-[50px] laptop:w-[1046px] xlg:block xlg:w-[1046px] lg:block hidden  w-[800px]" src={Mask} alt="tarjome"/>
    <Image className="xl:hidden laptopmini:hidden  laptop:hidden xlg:hidden lg:w-[1200px] lg:hidden  sm:block smone:block md:block " src={MaskMobile} alt="tarjomeOne"/>
    </div>
    <Question/>
     <FooterSkillPlus/>  
  </div>
  );
}

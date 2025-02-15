import { useState, useEffect,useRef } from "react";
import instance from "@/axios/axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode, Pagination } from 'swiper/modules';
import { Card } from "flowbite-react";
import 'swiper/css';
import 'swiper/css/navigation';

import VideoResponsive from "./videoResponsive"

// import required modules

export default function videoLearn() {
    const videoRef = useRef(null);
    useEffect(() => {
      if (videoRef.current) {
        const videoPlayer = videoRef.current;
        //@ts-ignore
        videoPlayer.addEventListener('play', handleVideoPlay);
        //@ts-ignore
        videoPlayer.controls = true;
        //@ts-ignore
        videoPlayer.disableRemotePlayback = true;
        //@ts-ignore
        videoPlayer.disablePictureInPicture = true;
        //@ts-ignore
        videoPlayer.controlsList = 'nodownload nofullscreen noremoteplayback';
    
        const isDownloadDisabled = localStorage.getItem('isDownloadDisabled');
        if (isDownloadDisabled !== 'true') {
            //@ts-ignore
          videoPlayer.controlsList = 'nodownload nofullscreen noremoteplayback';
          localStorage.setItem('isDownloadDisabled', 'true');
        }
//@ts-ignore    
        videoPlayer.addEventListener('contextmenu', (event) => {
          event.preventDefault();
        });
      }
    }, []);
    const handleVideoPlay = () => {
        console.log('Video started playing');
      };
    const [users, setUsers] = useState([]);
    useEffect(() => {
        instance.get('/softSkillProgramming')
            .then(response => {
                setUsers(response.data);
               
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);
    const boxShadow = {
        boxShadow: "0px 10px 50px 0px #EEEEEE"

    }
    return (
        <div>
            <div className="flex items-center text-2xl yekan-bold justify-center">
                ویدئو های آموزشی
            </div>
            <div className="xl:block xlg:block  laptop:block hidden gap-4 mt-8">
                <Swiper className="mySwiper"
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}

                    modules={[FreeMode, Pagination]}

                >
                    <SwiperSlide>
                        <Card style={boxShadow} className="w-[400px] h-[400px]">
                        <video muted width={1150} height={200} ref={videoRef} controls autoPlay >
          <source src="/Videos/alen.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
                          </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card style={boxShadow} className="w-[400px] h-[400px]">

                        <video muted width={1150} height={200} ref={videoRef} controls autoPlay >
          <source src="/Videos/khod.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card style={boxShadow} className="w-[400px] h-[400px]">

                        <video muted width={1150} height={200} ref={videoRef} controls autoPlay >
          <source src="/Videos/sobhaneh.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card style={boxShadow} className="w-[400px] h-[400px]">

                        <video muted width={1150} height={200} ref={videoRef} controls autoPlay >
          <source src="/Videos/sherkat.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card style={boxShadow} className="w-[400px] h-[400px]">

                        <video muted width={1150} height={200} ref={videoRef} controls autoPlay >
          <source src="/Videos/sherkat.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card  style={boxShadow} className="w-[400px] h-[400px]">

                        <video muted width={1150} height={200} ref={videoRef} controls autoPlay >
          <source src="/Videos/panguan.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
                        </Card>
                    </SwiperSlide>

                </Swiper>

            </div>
  <VideoResponsive/>
        </div>
    )
}
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import {useRef,useEffect} from 'react'
import { Card } from "flowbite-react";

export default function VideoResponsive(){
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
          const boxShadow = {
            boxShadow: "0px 10px 50px 0px #EEEEEE"
    
        }
    return (
        <div className="flex items-center justify-center xl:hidden xlg:hidden mt-8">
        <Swiper  navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
              <div className="flex items-center justify-center">
              <Card style={boxShadow} className="w-[400px] h-[400px]">
                    <video width={1150} height={200} ref={videoRef} controls autoPlay >
      <source src="/Videos/alen.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
                      </Card>
              </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="flex items-center justify-center">

                    <Card style={boxShadow} className="w-[400px] h-[400px]">

                    <video width={1150} height={200} ref={videoRef} controls autoPlay >
      <source src="/Videos/khod.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
                    </Card>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="flex items-center justify-center">

                    <Card style={boxShadow} className="w-[400px] h-[400px]">

                    <video width={1150} height={200} ref={videoRef} controls autoPlay >
      <source src="/Videos/sobhaneh.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
                    </Card>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="flex items-center justify-center mt-4">

                    <Card style={boxShadow} className="w-[400px] h-[400px]">

                    <video width={1150} height={200} ref={videoRef} controls autoPlay >
      <source src="/Videos/sherkat.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
                    </Card>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="flex items-center justify-center">

                    <Card style={boxShadow} className="w-[400px] h-[400px]">

                    <video width={1150} height={200} ref={videoRef} controls autoPlay >
      <source src="/Videos/sherkat.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
                    </Card>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="flex items-center justify-center">

                    <Card style={boxShadow} className="w-[400px] h-[400px]">

                    <video width={1150} height={200} ref={videoRef} controls autoPlay >
      <source src="/Videos/panguan.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
                    </Card>
                    </div>
                </SwiperSlide>
  </Swiper>
        </div>
    )
}
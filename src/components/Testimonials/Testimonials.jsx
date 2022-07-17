import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css"
import "./Testimonials.css";
import ProfilePic1 from "../../assets/img/profile1.jpg";
import ProfilePic2 from "../../assets/img/profile2.jpg";
import ProfilePic3 from "../../assets/img/profile3.jpg";
import ProfilePic4 from "../../assets/img/profile4.jpg";
import ProfilePic5 from "../../assets/img/profile5.jpg";
import ProfilePic6 from "../../assets/img/profile6.jpg";
import { Pagination } from 'swiper';
import "swiper/css/pagination";

const Testimonials = () => {
  const clients = [
    {
        img: ProfilePic1,
        review: 
          "I'm so thrilled to hear that you reached your goal. You inspire by having such ambitious dreams, then putting in the hard work to achieve them."
    },
    {
        img: ProfilePic2,
        review: 
        "I saw you work so hard every day to achieve this accomplishment, and I can't think of anyone who deserves it more. You set an amazing example for everyone at the company."
    },
    {
        img: ProfilePic3,
        review: 
        "Cheers to you for a job well done! No one can compare to your creativity and passion, and it's no surprise that you've become so successful."
    },
    {
        img: ProfilePic4,
        review: 
        "You worked so hard and pushed your abilities to the limit to make this success happen. Congratulations!"
    },
    {
        img: ProfilePic5,
        review: 
        "As you worked toward this victory, you behaved with such humility, grace and kindness to others. I appreciate how you always share your success with your team, and your love for your community is one of the reasons you rise to the top."
    },
    {
        img: ProfilePic6,
        review: 
        "This amazing accomplishment is just one step on your journey. Your ability to relentlessly search for solutions to problems and find innovative ways to improve the world is the key to this success and many to come."
    },
  ]
  return (
    <div class="testimonials" id="Testimonisals">
        <div className="t-heading">
            <span>Clients always get </span>
            <span>Exceptional Work </span>
            <span>from me...</span>
            <div className="blur t-blur1" style={{ background: "var(--purple)"}}></div>
            <div className="blur t-blur2" style={{ background: "skyblue"}}></div>
        </div>
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{clickable: true}}
        >
            {clients.map((client, index) => {
                return (
                    <SwiperSlide key={index}>
                      <div className="testimonial">
                        <img src={client.img} alt={index} />
                        <span>{client.review}</span>
                      </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default Testimonials
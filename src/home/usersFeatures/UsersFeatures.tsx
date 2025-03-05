import './UserFeatures.css'
import ava from '../../assets/userAva.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

export interface Review {
  avatar: string;
  quote: string;
  name: string;
  position: string;
}
const reviews: Review[] = [
  {
    avatar: "https://source.unsplash.com/100x100/?woman,face",
    quote: "This platform has helped me find reliable suppliers and scale my business effortlessly!",
    name: "Sophie Anderson",
    position: "E-commerce Entrepreneur @ TrendyMart"
  },
  {
    avatar: "https://source.unsplash.com/100x100/?man,face",
    quote: "Finding investors and partners was always a challenge, but Syndicat made it easy and efficient!",
    name: "David Patel",
    position: "Startup Founder @ GrowthHackers"
  },
  {
    avatar: "https://source.unsplash.com/100x100/?business,man",
    quote: "A must-have for any entrepreneur looking for high-quality partnerships in global trade.",
    name: "Michael Chen",
    position: "CEO @ Global Trade Hub"
  },
  {
    avatar: "https://source.unsplash.com/100x100/?tech,woman",
    quote: "This is the game-changing network I’ve been looking for. Highly recommend to business owners!",
    name: "Emma Roberts",
    position: "COO @ FutureTech Solutions"
  }
];

export const UsersFeatures = () => {
  return (
    <div className='userReviewsWrap'>
       <Swiper
   modules={[Navigation, Pagination, Scrollbar, A11y]}
   spaceBetween={50}
   slidesPerView={1}
   loop={true}
   navigation
   pagination={{ clickable: true }}
   scrollbar={{ draggable: true }}
   onSwiper={(swiper) => console.log(swiper)}
   onSlideChange={() => console.log('slide change')}
    >
       {reviews.map((review, index) => (
      <SwiperSlide key={index}> 
         <div className="reaviewsItem">
            <img src={ava} alt="userAva" className="userAva" />
            <div className="userReviewsText">
                <h2 className="userQuote">
                  {review.quote}
                </h2>

                <div className="userNameBlock">
                    <p className="userName">
                    {review.name}
                    </p>

                    <p className="userNamePosition">
                    {review.position}
                    </p>
                </div>
            </div>
        </div>
        </SwiperSlide>
    
       ))}
      </Swiper>
      
    </div>
  )
}

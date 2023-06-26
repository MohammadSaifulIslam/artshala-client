import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ClientReview.css';

// import required modules
import { Autoplay, Pagination } from 'swiper';

import { StarIcon } from '@heroicons/react/24/solid';
import Rating from 'react-rating';
import client1 from '../../../assets/images/review/client (1).jpg';
import client2 from '../../../assets/images/review/client (2).jpg';
import client3 from '../../../assets/images/review/client (3).jpg';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const ClientReview = () => {
    return (
        <div className='my-container mt-20'>
          <SectionTitle title={"Client's Say"}/>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                
                className="mySwiper mt-10"
            >
                <SwiperSlide>
                    <div className='p-5 mb-10'>
                        <img src={client1} alt="" className='img w-10 h-10 rounded-full' />
                        <h3 className=' text-2xl font-bold mb-4'>Yamin Amin</h3>
                        <Rating
                            placeholderRating={5}
                            emptySymbol={<StarIcon className='h-6 w-6'/>}
                            placeholderSymbol={<StarIcon className='h-6 w-6 text-warning'/>}
                            fullSymbol={<StarIcon className='h-6 w-6 text-warning'/>}
                            readonly
                        />
                        <p>"I recently dined at Chef's Magic and was blown away by the experience. The food was absolutely incredible, with each dish expertly prepared and bursting with flavor. The atmosphere was warm and inviting, and the staff were attentive and friendly, making me feel right at home. I also appreciated that they were able to accommodate my dietary needs without compromising on taste or quality. Overall,"</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-5 mb-10'>
                        <img src={client3} alt="" className='img w-10 h-10 rounded-full' />
                        <h3 className=' text-2xl font-bold mb-4'>Moin Ali</h3>
                        <Rating
                            placeholderRating={4.5}
                            emptySymbol={<StarIcon className='h-6 w-6 '/>}
                            placeholderSymbol={<StarIcon className='h-6 w-6 text-warning'/>}
                            fullSymbol={<StarIcon className='h-6 w-6 text-warning'/>}
                            readonly
                        />
                        <p>"Chef's Magic is hands down one of the best restaurants I've ever been to. The food is out of this world, with each dish surpassing the last in terms of taste and presentation. The ambiance is perfect for a romantic dinner or a night out with friends, and the staff are always friendly and accommodating."</p>
                   
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-5 mb-10'>
                        <img src={client2} alt="" className='img w-10 h-10 rounded-full' />
                        <h3 className=' text-2xl font-bold mb-4'>Sabbir Hossain</h3>
                        <Rating
                            placeholderRating={4.5}
                            emptySymbol={<StarIcon className='h-6 w-6 '/>}
                            placeholderSymbol={<StarIcon className='h-6 w-6 text-warning'/>}
                            fullSymbol={<StarIcon className='h-6 w-6 text-warning'/>}
                            readonly
                        />
                        <p className=''>"I was blown away by the level of expertise and attention to detail at Chef's Magic. The chefs truly work magic in the kitchen, creating dishes that are both visually stunning and incredibly delicious. The service was top-notch, and the staff were knowledgeable about the menu and wine pairings. I will definitely be back and can't recommend Chef's Magic enough!"</p>
                     
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ClientReview;
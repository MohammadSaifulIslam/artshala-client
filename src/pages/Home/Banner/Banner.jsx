import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = () => {
    return (
        <div className=''>
            <Carousel swipeable>
                <div className='h-screen relative'>
                    <img src="https://img.freepik.com/free-photo/woman-holding-picture_23-2148550781.jpg?w=740&t=st=1686204085~exp=1686204685~hmac=1eea2787c793631bb8785ba79a1a8102799e795f0ce74d32a53e7ab20fb844c5" className='w-full h-full object-cover' />
                    <div className='bg-black bg-opacity-40 h-full w-full absolute z-30 top-0 left-0 flex items-center'>
                        <div className='text-white space-y-3 text- my-container text-left'>
                            <h2 className='text-5xl font-bold uppercase'>Welcome to Artshala</h2>
                            <p className='md:w-1/2'> Unleash Your Creativity this Summer! Join us for an exciting range of art courses where you can explore painting, drawing, sculpture, and digital art. Learn from expert instructors, connect with fellow artists, and make this summer a masterpiece at Artshala!</p>
                            <button className='my-btn mt-5'>Enroll Now</button>
                        </div>
                    </div>
                </div>
                <div className='h-screen'>
                    <img src="https://img.freepik.com/free-photo/male-artist-painting-with-watercolor-studio_23-2150213691.jpg?w=740&t=st=1686204072~exp=1686204672~hmac=fb3148e48e544b5be40a4cf95909d78ee6118429a59163161bc829b355816632" className='w-full h-full object-cover' />
                    <div className='bg-black bg-opacity-40 h-full w-full absolute z-30 top-0 left-0 flex items-center'>
                        <div className='text-white space-y-3 text- my-container text-left'>
                            <h2 className='text-5xl font-bold uppercase'>Welcome to Artshala</h2>
                            <p className='md:w-1/2'> Unleash Your Creativity this Summer! Join us for an exciting range of art courses where you can explore painting, drawing, sculpture, and digital art. Learn from expert instructors, connect with fellow artists, and make this summer a masterpiece at Artshala!</p>
                            <button className='my-btn mt-5'>Enroll Now</button>
                        </div>
                    </div>
                </div>
                <div className='h-screen'>
                    <img src="https://img.freepik.com/free-photo/young-male-painter-drawing-beautiful-painting-white-background-art_140725-162439.jpg?w=740&t=st=1686205294~exp=1686205894~hmac=3c2662a13ea9d5969fab04de0d155ca80f9c17f7c039447996dcf1fc73af803c" className='w-full h-full object-cover' />
                    <div className='bg-black bg-opacity-40 h-full w-full absolute z-30 top-0 left-0 flex items-center'>
                        <div className='text-white space-y-3 text- my-container text-left'>
                            <h2 className='text-5xl font-bold uppercase'>Welcome to Artshala</h2>
                            <p className='md:w-1/2'> Unleash Your Creativity this Summer! Join us for an exciting range of art courses where you can explore painting, drawing, sculpture, and digital art. Learn from expert instructors, connect with fellow artists, and make this summer a masterpiece at Artshala!</p>
                            <button className='my-btn mt-5'>Enroll Now</button>
                        </div>
                    </div>
                </div>

            </Carousel>
        </div>
    );
};

export default Banner;
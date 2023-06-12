import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className=''>
            <Carousel swipeable>
                <div className='h-screen relative'>
                    <img src="https://img.freepik.com/free-photo/floral-patterns-depict-modern-wedding-celebration-generated-by-ai_188544-9728.jpg?w=826&t=st=1686244059~exp=1686244659~hmac=40dae6e8902fbf060cb409bfd5fdcb57b7faa33a142e87cc79bfc67cc0379ce0" className='w-full h-full object-cover' />
                    <div className='bg-black bg-opacity-40 h-full w-full absolute z-30 top-0 left-0 flex items-center'>
                        <div className='text-white space-y-3 text- my-container text-left'>
                            <h2 className='text-5xl font-bold uppercase'>Welcome to Artshala</h2>
                            <p className='md:w-1/2'> Unleash Your Creativity this Summer! Join us for an exciting range of art courses where you can explore painting, drawing, sculpture, and digital art. Learn from expert instructors, connect with fellow artists, and make this summer a masterpiece at Artshala!</p>
                            <Link to='/classes'><button className='my-btn mt-5'>Enroll Now</button></Link>
                        </div>
                    </div>
                </div>
                <div className='h-screen'>
                    <img src="https://img.freepik.com/free-photo/male-artist-painting-with-watercolor-studio_23-2150213691.jpg?w=740&t=st=1686204072~exp=1686204672~hmac=fb3148e48e544b5be40a4cf95909d78ee6118429a59163161bc829b355816632" className='w-full h-full object-cover' />
                    <div className='bg-black bg-opacity-40 h-full w-full absolute z-30 top-0 left-0 flex items-center'>
                        <div className='text-white space-y-3 text- my-container text-left'>
                            <h2 className='text-5xl font-bold uppercase'>Welcome to Artshala</h2>
                            <p className='md:w-1/2'> Unleash Your Creativity this Summer! Join us for an exciting range of art courses where you can explore painting, drawing, sculpture, and digital art. Learn from expert instructors, connect with fellow artists, and make this summer a masterpiece at Artshala!</p>
                            <Link to='/classes'><button className='my-btn mt-5'>Enroll Now</button></Link>
                        </div>
                    </div>
                </div>
                <div className='h-screen'>
                    <img src="https://img.freepik.com/free-photo/young-male-painter-drawing-beautiful-painting-white-background-art_140725-162439.jpg?w=740&t=st=1686205294~exp=1686205894~hmac=3c2662a13ea9d5969fab04de0d155ca80f9c17f7c039447996dcf1fc73af803c" className='w-full h-full object-cover' />
                    <div className='bg-black bg-opacity-40 h-full w-full absolute z-30 top-0 left-0 flex items-center'>
                        <div className='text-white space-y-3 text- my-container text-left'>
                            <h2 className='text-5xl font-bold uppercase'>Welcome to Artshala</h2>
                            <p className='md:w-1/2'> Unleash Your Creativity this Summer! Join us for an exciting range of art courses where you can explore painting, drawing, sculpture, and digital art. Learn from expert instructors, connect with fellow artists, and make this summer a masterpiece at Artshala!</p>
                            <Link to='/classes'><button className='my-btn mt-5'>Enroll Now</button></Link>
                        </div>
                    </div>
                </div>

            </Carousel>
        </div>
    );
};

export default Banner;
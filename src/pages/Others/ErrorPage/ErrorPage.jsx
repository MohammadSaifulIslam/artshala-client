import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import errorAnimation from '../../../assets/error/93899-error-404.json';
const ErrorPage = () => {
    
    return (
        <section className='h-screen w-full bg-[#e5f9ff] relative' >
        <Lottie className="h-full" animationData={errorAnimation} loop={true} />
          <div className=''>
            <Link to='/' className='my-btn w-fit absolute bottom-20 right-1/2 translate-x-1/2 text-center'>
              Back to homepage
            </Link>
          </div>
      </section>
    );
};

export default ErrorPage;
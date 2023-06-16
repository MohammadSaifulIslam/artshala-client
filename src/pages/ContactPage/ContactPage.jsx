
import contactAnimation from '../../../src/assets/lottie/contact-animation.json';

import Lottie from "lottie-react";
import Swal from 'sweetalert2';
import SectionBanner from '../Shared/SectionBanner/SectionBanner';

const ContactPage = () => {
    const handleSendMessage = event =>{
        event.preventDefault();
        Swal.fire({
            icon: 'success',
            title: 'You message successfully sent',
            showConfirmButton: false,
            timer: 1500
        })
        event.target.reset()
    }
    return (
        <div className=''>
            <SectionBanner title={'Contact Us'}/>
            
            <div className='my-container grid md:grid-cols-2 gap-5 items-center mt-10'>
                <Lottie className='h-[430px] ' animationData={contactAnimation} loop={true} />
                <form onSubmit={handleSendMessage} className=''>
                    <input type="text" name='name' placeholder="Your name" className="input input-bordered border-2 border-[#FFB347] bg-slate-50 w-full focus:outline-none" required />
                    <input type="email" name='email' placeholder="Your email" className="input input-bordered border-2 border-[#FFB347] bg-slate-50 w-full focus:outline-none mt-5" required />
                    <input type="number" name='phone' placeholder="Your phone number" className="input input-bordered border-2 border-[#FFB347] bg-slate-50 w-full focus:outline-none mt-5" required />
                    <textarea name='message' className="textarea h-40 textarea-bordered border-2 border-[#FFB347] bg-slate-50 w-full focus:outline-none mt-5" placeholder="Your message" required></textarea>
                    <button className='my-btn text-start mt-4'>Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
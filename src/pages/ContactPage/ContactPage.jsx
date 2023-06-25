

import Contact from '../Home/Contact/Contact';
import SectionBanner from '../Shared/SectionBanner/SectionBanner';

const ContactPage = () => {

    return (
        <div className=''>
            <SectionBanner title={'Contact Us'} description={'Feel free to reach out to Artshala with any inquiries, feedback, or support requests, and prompt assistance'} />

            <Contact title={false} />
        </div>
    );
};

export default ContactPage;
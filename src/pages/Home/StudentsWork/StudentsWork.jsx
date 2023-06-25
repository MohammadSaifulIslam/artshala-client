import ScrollRevealText from '../../../components/ScrollRevealText/ScrollRevealText';
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
// import styles
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lightgallery.css';


// import plugins if you need


const StudentsWork = () => {

    return (
        <section className="my-container mt-20">
            <SectionTitle title={"Student's Work"}></SectionTitle>
            <div className="mt-10 grid md:grid-cols-3 gap-5">
                <div className='flex flex-col justify-center '>
                    <ScrollRevealText>
                        <h4 className='text-2xl font-semibold mb-5'>  Our latest Collections of
                            Student's Artworks & Paintings</h4>
                        <p>
                            Artshala's student work section is a showcase of extraordinary talent and creativity. These budding artists have embraced their artistic journeys and produced breathtaking artwork that reflects their dedication and growth. From vivid paintings to intricate sculptures, the diverse range of art forms highlights the students' versatility and passion.
                        </p>
                    </ScrollRevealText>
                </div>
                <div className='md:col-span-2 grid grid-cols-4 gap-4' id='lightgallery'>

                    <figure className='col-span-2 row-span-2 overflow-hidden cursor-pointer'>
                        <img className='hover:scale-125 duration-300 w-full h-full object-cover overflow-hidden'  alt="img1" src="https://img.freepik.com/free-vector/hand-painted-watercolour-landscape-background-1603_1048-18535.jpg?size=626&ext=jpg&uid=R59828080&ga=GA1.2.562300066.1684249269&semt=sph" />
                    </figure>
                    <figure className='overflow-hidden cursor-pointer'>
                        <img className='hover:scale-125 duration-300 overflow-hidden w-full h-full object-cover'  alt="img2" src="https://img.freepik.com/free-photo/vibrant-colors-explode-messy-watercolor-blob-generated-by-ai_188544-9791.jpg?size=626&ext=jpg&uid=R59828080&ga=GA1.2.562300066.1684249269&semt=sph" />
                    </figure>
                  
                    <figure className='overflow-hidden cursor-pointer'>
                        <img className='hover:scale-125 duration-300 w-full h-full object-cover overflow-hidden'  alt="img2" src="https://img.freepik.com/free-photo/vintage-landscape-with-gondolas_1160-162.jpg?size=626&ext=jpg&uid=R59828080&ga=GA1.2.562300066.1684249269&semt=sph" />
                    </figure>
                    <figure className='col-span-2 row-span-2 overflow-hidden cursor-pointer'>
                        <img  className='hover:scale-125 duration-300 w-full h-full object-cover overflow-hidden'  alt="img1" src="https://img.freepik.com/free-vector/watercolor-chinese-style-background_52683-96100.jpg?size=626&ext=jpg&uid=R59828080&ga=GA1.2.562300066.1684249269&semt=sph" />
                    </figure>
                    <figure className='overflow-hidden cursor-pointer'>
                        <img className='hover:scale-125 duration-300 w-full h-full object-cover overflow-hidden'  alt="img2" src="https://img.freepik.com/free-photo/top-view-attractive-woman-hands-drawing-amazing-picture-canvas-modern-cozy-art-workshop_574295-563.jpg?size=626&ext=jpg&uid=R59828080&ga=GA1.2.562300066.1684249269&semt=sph" />
                    </figure>
                    <figure className='overflow-hidden'>
                        <img className='hover:scale-125 duration-300 w-full h-full object-cover overflow-hidden'  alt="img1" src="https://img.freepik.com/free-photo/dirty-coloured-palette-paint_23-2148660898.jpg?size=626&ext=jpg&uid=R59828080&ga=GA1.2.562300066.1684249269&semt=sph" />
                    </figure>

                </div>
            </div>

        </section>
    );
};

export default StudentsWork;
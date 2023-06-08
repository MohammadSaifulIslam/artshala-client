import workImg from '../../../assets/images/students-work/students-work.png';
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
const StudentsWork = () => {
    return (
        <section className="my-container mt-20">
            <SectionTitle title={"Student's Work"}></SectionTitle>
            <div className="mt-10 grid md:grid-cols-3 gap-5">
                <div className='flex flex-col justify-center '>
                    <h4 className='text-2xl font-semibold mb-5'>  Our latest Collections of
                        Student's Artworks & Paintings</h4>
                    <p>
                        Artshala's student work section is a showcase of extraordinary talent and creativity. These budding artists have embraced their artistic journeys and produced breathtaking artwork that reflects their dedication and growth. From vivid paintings to intricate sculptures, the diverse range of art forms highlights the students' versatility and passion.
                    </p>
                </div>
                <div className='col-span-2'>
                    <img src={workImg} alt="Students work image" className='w-full h-full object-contain' />
                </div>
            </div>
        </section>
    );
};

export default StudentsWork;
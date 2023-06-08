import { useEffect, useState } from "react";
import ClassCard from "../../../components/cards/ClassCard/ClassCard";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import './Class.css';

const Class = () => {
    const [classData, setClassData] = useState([])
    useEffect(() => {
        fetch('/class.json')
            .then(res => res.json())
            .then(data => setClassData(data.slice(0, 6)))
    }, [])
    return (
        <section className="my-container mt-20" >
            <SectionTitle title={'Popular Classes'}></SectionTitle>
            <div className=" mt-10">

                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
            
                 {
                        classData.map(data =>
                            <SwiperSlide key={data.id}>
                                <ClassCard data={data}></ClassCard>
                            </SwiperSlide>

                        )
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Class;
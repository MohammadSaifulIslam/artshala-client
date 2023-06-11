import { useEffect, useState } from "react";
import InstructorCard from "../../../components/cards/InstructorCard/InstructorCard";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Instructors = () => {
    const [instructorsData, setInstructorsData] = useState([]);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_LOCALHOST}/instructors`)
            .then(res => res.json())
            .then(data => setInstructorsData(data.slice(0, 6)))
    }, [])
    return (
        <section className="my-container mt-20">
            <SectionTitle title={'Our Instructors'}></SectionTitle>
            <div className="grid md:grid-cols-4 gap-5 mt-10">
                {
                    instructorsData.map(data =>
                        <InstructorCard key={data._id} data={data}></InstructorCard>
                    )
                }
            </div>
        </section>
    );
};

export default Instructors;
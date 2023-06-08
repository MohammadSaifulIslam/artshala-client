import { useEffect, useState } from "react";
import InstructorCard from "../../../components/cards/InstructorCard/InstructorCard";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Instructors = () => {
    const [instructorsData, setInstructorsData] = useState([]);
    useEffect(() => {
        fetch('/instructor.json')
            .then(res => res.json())
            .then(data => setInstructorsData(data))
    }, [])
    return (
        <section className="my-container mt-20">
            <SectionTitle title={'Our Instructors'}></SectionTitle>
            <div className="grid md:grid-cols-4 gap-5 mt-10">
                {
                    instructorsData.map(data =>
                        <InstructorCard key={data.id} data={data}></InstructorCard>
                   )
                }
            </div>
        </section>
    );
};

export default Instructors;
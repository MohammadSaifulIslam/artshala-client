import { useEffect, useState } from "react";
import InstructorCard from "../../../components/cards/InstructorCard/InstructorCard";
import SectionBanner from "../../Shared/SectionBanner/SectionBanner";

const InstructorHome = () => {
    const [instructorsData, setInstructorsData] = useState([]);
    useEffect(() => {
        fetch('/instructor.json')
            .then(res => res.json())
            .then(data => setInstructorsData(data))
    }, [])
    return (
        <div>
            <SectionBanner title={'Our Instrcutors'} description={'Our instructors page features a team of highly skilled and experienced artists who are passionate about teaching.'} />
            <div className="my-container">
                <div className="grid md:grid-cols-4 gap-5 mt-10">
                    {
                        instructorsData.map(data =>
                            <InstructorCard key={data.id} data={data} email={true}></InstructorCard>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default InstructorHome;
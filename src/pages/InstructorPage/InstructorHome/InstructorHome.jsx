import { useEffect, useState } from "react";
import InstructorCard from "../../../components/cards/InstructorCard/InstructorCard";
import websiteTitle from "../../../utility/websiteTitle";
import LoadingSpinner from "../../Others/LoadingSpinner/LoadingSpinner";
import SectionBanner from "../../Shared/SectionBanner/SectionBanner";

const InstructorHome = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [instructorsData, setInstructorsData] = useState([]);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_LOCALHOST}/instructors`)
            .then(res => res.json())
            .then(data => {
                setIsLoading(false)
                setInstructorsData(data)
            })
    }, [])

    websiteTitle('Instructors - Artshala')

    if (isLoading) {
        return <LoadingSpinner />
    }
    return (
        <div>
            <SectionBanner title={'Our Instrcutors'} description={'Our instructors page features a team of highly skilled and experienced artists who are passionate about teaching.'} />
            <div className="my-container">
                <div className="grid md:grid-cols-4 gap-5 mt-10">
                    {
                        instructorsData.map(data =>
                            <InstructorCard key={data._id} data={data} email={true}></InstructorCard>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default InstructorHome;
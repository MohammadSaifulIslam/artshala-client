import { useEffect, useState } from "react";
import SectionBanner from "../../Shared/SectionBanner/SectionBanner";
import ClassShowCard from "../ClassShowCard/ClassShowCard";

const ClassHome = () => {
    const [classData, setClassData] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_LOCALHOST}/classes`)
            .then(res => res.json())
            .then(data => setClassData(data))
    }, [])
    return (
        <div>
            <SectionBanner title={'Our Classes'} description={'The classes page on Artshala is a great place to find information about all of our art classes.'} />
            <div className="my-container grid md:grid-cols-2 gap-8 mt-10">
                {
                    classData.map(data =>
                       <ClassShowCard key={data._id} data={data}></ClassShowCard>
                    )
                }
            </div>
        </div>
    );
};

export default ClassHome;
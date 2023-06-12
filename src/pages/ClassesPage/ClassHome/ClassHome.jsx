import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import SectionBanner from "../../Shared/SectionBanner/SectionBanner";
import ClassShowCard from "../ClassShowCard/ClassShowCard";

const ClassHome = () => {
    const {user} = useAuth();
    const [classData, setClassData] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_LOCALHOST}/classes`)
            .then(res => res.json())
            .then(data => setClassData(data))
    }, [])
    const handleSelectClass = (data) =>{
        const {_id,  photo, class_name, instructor_email, price, available_seats}=data;

        const selectedClassInfo = {class_id: _id, photo,class_name,available_seats, instructor_email, price, student_email: user?.email}
        console.log(selectedClassInfo)
        axios.post(`${import.meta.env.VITE_LOCALHOST}/select-class`, selectedClassInfo)
        .then(res=>{
            if(res.data.acknowledged){
                Swal.fire({
                    icon: 'success',
                    title: 'You successfull select the class',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
        .catch(err=> console.log(err))
    }
    return (
        <div>
            <SectionBanner title={'Our Classes'} description={'The classes page on Artshala is a great place to find information about all of our art classes.'} />
            <div className="my-container grid md:grid-cols-2 gap-8 mt-10">
                {
                    classData.map(data =>
                       <ClassShowCard key={data._id} data={data} handleSelectClass={handleSelectClass}></ClassShowCard>
                    )
                }
            </div>
        </div>
    );
};

export default ClassHome;
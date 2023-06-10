import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MyClassesTableRow from "./MyClassesTableRow";

const MyClasses = () => {
const [classesData, setClassesData] = useState([])
    const {user} = useAuth();
    useEffect( ()=>{
        axios.get(`${import.meta.env.VITE_LOCALHOST}/class/${user?.email}`)
        .then(res => {
            console.log(res)
            setClassesData(res.data)
        })
        .catch(err => console.log(err))
    } ,[user])
    return (
        <div className="my-20 ">
            <SectionTitle title={'My Classes'} />

            <div className="overflow-x-auto mt-10 w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Photo</th>
                            <th>Class Name</th>
                            <th>Enrolled Students</th>
                            <th>Status</th>
                            <th>Feedback</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            classesData.map((classData, index) => <MyClassesTableRow key={classData.Id} classData={classData} index={index}></MyClassesTableRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;
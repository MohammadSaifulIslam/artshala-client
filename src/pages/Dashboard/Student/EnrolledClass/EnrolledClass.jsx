import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import EnrolledClassRow from "./EnrolledClassRow/EnrolledClassRow";

const EnrolledClass = () => {
    const { user } = useAuth();
    const [enrolledClasses, setEnrolledclasses] = useState([])

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_LOCALHOST}/payments/${user?.email}`)
            .then(res => {
                console.log(res.data)
                setEnrolledclasses(res.data)
            })
            .catch(err => console.log(err))
    }, [user])
    
    return (
        <div className="my-10">
            <SectionTitle title={'My Enrolled Classes'} />
            <div className="overflow-x-auto mt-10 w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className="text-white">
                            <th className="bg-primary">
                                #
                            </th>
                            <th className="bg-primary">Photo</th>
                            <th className="bg-primary">Class Name</th>
                            <th className="bg-primary">Price</th>
                            <th className="bg-primary" >Enrolled Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            enrolledClasses.map((classData, index) =>
                                <EnrolledClassRow key={classData._id} classData={classData} index={index}></EnrolledClassRow>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrolledClass;
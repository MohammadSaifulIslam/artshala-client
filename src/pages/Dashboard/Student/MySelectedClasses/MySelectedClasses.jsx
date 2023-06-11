import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import MySelectedClassRow from "./MySelectedClassRow/MySelectedClassRow";

const MySelectedClasses = () => {
    const { user } = useAuth()
    const { data: selectedClass = [],refetch } = useQuery(['select-class'], async () => {
        const res = await fetch(`${import.meta.env.VITE_LOCALHOST}/select-class/${user?.email}`)
        return await res.json()
    })
    const handleRemoveClass = (id) => {
        axios.delete(`${import.meta.env.VITE_LOCALHOST}/select-class/${id}`)
            .then(res => {
                if (res.data.deletedCount) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Class removed from select',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch()
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="my-10">
            <SectionTitle title={'My Selected Classes'} />
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
                            <th className="bg-primary" >Payment</th>
                            <th className="bg-primary">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            selectedClass.map((classData, index) => <MySelectedClassRow key={classData._id} classData={classData} index={index} handleRemoveClass={handleRemoveClass}></MySelectedClassRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClasses;
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";
import websiteTitle from "../../../../utility/websiteTitle";
import LoadingSpinner from "../../../Others/LoadingSpinner/LoadingSpinner";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import MySelectedClassRow from "./MySelectedClassRow/MySelectedClassRow";

const MySelectedClasses = () => {
    const { user } = useAuth()
    const { data: selectedClass = [],refetch , isLoading} = useQuery(['select-class'], async () => {
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

    websiteTitle('My Selected Classes - Artshala')

    if (isLoading) {
        return <LoadingSpinner />
    }
    return (
        <div className="my-10">
            <SectionTitle title={'My Selected Classes'} />
            <div className="overflow-x-auto mt-10 w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className="text-white">
                            <th className="bg-[#FFB347]">
                                #
                            </th>
                            <th className="bg-[#FFB347]">Photo</th>
                            <th className="bg-[#FFB347]">Class Name</th>
                            <th className="bg-[#FFB347]">Price</th>
                            <th className="bg-[#FFB347]" >Payment</th>
                            <th className="bg-[#FFB347]">Remove</th>
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
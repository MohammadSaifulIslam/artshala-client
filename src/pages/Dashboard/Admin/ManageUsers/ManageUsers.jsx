import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import websiteTitle from "../../../../utility/websiteTitle";
import LoadingSpinner from "../../../Others/LoadingSpinner/LoadingSpinner";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import UserTableRow from "./UserTableRow/UserTableRow";

const ManageUsers = () => {
    const { data: users = [], refetch , isLoading } = useQuery(['users'], async () => {
        const res = await fetch(`${import.meta.env.VITE_LOCALHOST}/users`)
        return await res.json()
    })

    // make user instructor
    const handleInstructor = (id, name) => {
        console.log(id)
        axios.patch(`${import.meta.env.VITE_LOCALHOST}/user-role/${id}?role=instructor`)
            .then(res => {
                Swal.fire({
                    icon: 'success',
                    title: `${name} is Instructor now`,
                    showConfirmButton: false,
                    timer: 1500
                })
                refetch()
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }
    // make user instructor
    const handleAdmin = (id, name) => {
        console.log(id)
        axios.patch(`${import.meta.env.VITE_LOCALHOST}/user-role/${id}?role=admin`)
            .then(res => {
                Swal.fire({
                    icon: 'success',
                    title: `${name} is Admin now`,
                    showConfirmButton: false,
                    timer: 1500
                })
                refetch()
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    websiteTitle('Manage Users - Artshala')

    if (isLoading) {
        return <LoadingSpinner />
    }
    return (
        <div className="my-10">
            <SectionTitle title={'Manage Users'}></SectionTitle>
            <div className="overflow-x-auto mt-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="bg-[#FFB347]">
                                #
                            </th>
                            <th className="bg-[#FFB347]">Photo</th>
                            <th className="bg-[#FFB347]">Name</th>
                            <th className="bg-[#FFB347]">Email</th>
                            <th className="bg-[#FFB347]">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) =>
                                <UserTableRow key={user._id} user={user} index={index} handleInstructor={handleInstructor} handleAdmin={handleAdmin}></UserTableRow>
                            )
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageUsers;
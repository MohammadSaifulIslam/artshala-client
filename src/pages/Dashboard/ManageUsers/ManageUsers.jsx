import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import UserTableRow from "./UserTableRow/UserTableRow";

const ManageUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch(`${import.meta.env.VITE_LOCALHOST}/users`)
        return res.json()
    })
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
    return (
        <div className="my-10">
            <SectionTitle title={'Manage Users'}></SectionTitle>
            <div className="overflow-x-auto mt-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="bg-primary">
                                #
                            </th>
                            <th className="bg-primary">Photo</th>
                            <th className="bg-primary">Name</th>
                            <th className="bg-primary">Email</th>
                            <th className="bg-primary">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) =>
                                <UserTableRow key={user._id} user={user} index={index} handleInstructor={handleInstructor}></UserTableRow>
                            )
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageUsers;
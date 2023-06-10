import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import UserTableRow from "./UserTableRow/UserTableRow";

const ManageUsers = () => {
    const { data: users = [], } = useQuery(['users'], async () => {
        const res = await fetch(`${import.meta.env.VITE_LOCALHOST}/users`)
        return res.json()


    })
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
                                <UserTableRow key={user.Id} user={user} index={index}></UserTableRow>
                            )
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageUsers;
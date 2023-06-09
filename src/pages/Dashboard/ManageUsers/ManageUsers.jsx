import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const ManageUsers = () => {
    const { data: users = [], } = useQuery(['users'], async() => {
        const res = await fetch(`${import.meta.env.VITE_LOCALHOST}/users`)
        return res.json()


    })
    return (
        <div className="my-10">
            <SectionTitle title={'Manage Users'}></SectionTitle>
           {
            users.map(user=> <div key={user._id}>{user.name}</div>)
           }
        </div>
    );
};

export default ManageUsers;
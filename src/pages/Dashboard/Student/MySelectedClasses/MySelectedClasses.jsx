import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import MySelectedClassRow from "./MySelectedClassRow/MySelectedClassRow";

const MySelectedClasses = () => {
    const {user}= useAuth()
    const {data : selectedClass = []}= useQuery(['select-class'], async()=>{
        const res = await fetch(`${import.meta.env.VITE_LOCALHOST}/select-class/${user?.email}`)
        return await res.json()
    })
    console.log({selectedClass})
    return (
        <div className="my-10">
            <SectionTitle title={'My Selected Classes'}/>
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
                        selectedClass.map((classData,index) => <MySelectedClassRow key={classData._id} classData={classData} index={index}></MySelectedClassRow>)
                     }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClasses;
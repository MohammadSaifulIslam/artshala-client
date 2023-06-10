
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ManageClassesTableRow from './ManageClassesTableRow/ManageClassesTableRow';

const ManageClasses = () => {

    const { data: allClassData = [] } = useQuery(['allClasses'], async () => {
        const res = await axios.get(`${import.meta.env.VITE_LOCALHOST}/all-class`)
        return res.data
    })

    return (
        <div className='my-10'>
            <SectionTitle title={'Manage Classes'} />
            <div className="overflow-x-auto mt-10" >
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="bg-primary">
                               #
                            </th>
                            <th className="bg-primary">Class Photo</th>
                            <th className="bg-primary">Class Name</th>
                            <th className="bg-primary">Intructor Info</th>
                            <th className="bg-primary">Seats</th>
                            <th className="bg-primary">Price</th>
                            <th className="bg-primary">Status</th>
                            <th className="bg-primary">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            allClassData.map((classData, index) => <ManageClassesTableRow key={classData._id} classData={classData} index={index}></ManageClassesTableRow>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;
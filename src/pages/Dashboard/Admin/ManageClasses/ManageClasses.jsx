
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Swal from 'sweetalert2';
import websiteTitle from '../../../../utility/websiteTitle';
import LoadingSpinner from '../../../Others/LoadingSpinner/LoadingSpinner';
import ManageClassesTableRow from './ManageClassesTableRow/ManageClassesTableRow';

const ManageClasses = () => {
    
    const { data: allClassData = [], refetch , isLoading} = useQuery(['allClasses'], async () => {
        const res = await axios.get(`${import.meta.env.VITE_LOCALHOST}/all-class`)
        
        return res.data;
    })

    const handleApproved = (id) => {
        axios.patch(`${import.meta.env.VITE_LOCALHOST}/class-status/${id}?status=Approved`)
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        icon: 'success',
                        title: `You successfully approve the class`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch()
                }
            })
    }
    const handleDeny = (id) => {
        axios.patch(`${import.meta.env.VITE_LOCALHOST}/class-status/${id}?status=Denied`)
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        icon: 'success',
                        title: `You successfully deny the class`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch()
                }
            })
    }

    websiteTitle('Manage Classes - Artshala')

    if (isLoading) {
        return <LoadingSpinner />
    }

    return (
        <div className='my-10'>
            <SectionTitle title={'Manage Classes'} />
            <div className="overflow-x-auto mt-10" >
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="bg-[#FFB347]">
                                #
                            </th>
                            <th className="bg-[#FFB347]">Class Photo</th>
                            <th className="bg-[#FFB347]">Class Name</th>
                            <th className="bg-[#FFB347]">Intructor Info</th>
                            <th className="bg-[#FFB347]">Seats</th>
                            <th className="bg-[#FFB347]">Price</th>
                            <th className="bg-[#FFB347]">Status</th>
                            <th className="bg-[#FFB347]">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            allClassData.map((classData, index) => <ManageClassesTableRow key={classData._id} classData={classData} index={index} handleApproved={handleApproved} handleDeny={handleDeny} ></ManageClassesTableRow>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;
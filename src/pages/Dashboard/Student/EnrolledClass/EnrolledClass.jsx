import usePaymentData from "../../../../hooks/usePaymentData";
import websiteTitle from "../../../../utility/websiteTitle";
import LoadingSpinner from "../../../Others/LoadingSpinner/LoadingSpinner";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import EnrolledClassRow from "./EnrolledClassRow/EnrolledClassRow";

const EnrolledClass = () => {
    const { paymentData, isLoading } = usePaymentData()

    websiteTitle('Enrolled Classes - Artshala')

    if (isLoading) {
        return <LoadingSpinner />
    }
    return (
        <div className="my-10">
            <SectionTitle title={'My Enrolled Classes'} />
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
                            <th className="bg-[#FFB347]" >Enrolled Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            paymentData.map((classData, index) =>
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
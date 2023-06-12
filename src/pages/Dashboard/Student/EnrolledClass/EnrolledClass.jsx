import usePaymentData from "../../../../hooks/usePaymentData";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import EnrolledClassRow from "./EnrolledClassRow/EnrolledClassRow";

const EnrolledClass = () => {
    const { paymentData } = usePaymentData()
    return (
        <div className="my-10">
            <SectionTitle title={'My Enrolled Classes'} />
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
                            <th className="bg-primary" >Enrolled Date</th>
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
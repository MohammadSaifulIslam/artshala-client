import usePaymentData from "../../../../hooks/usePaymentData";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const PaymentHistory = () => {
    const { paymentData } = usePaymentData()
    return (
        <div className="my-10">
            <SectionTitle title={'My Payment History'} />
            <div className="overflow-x-auto mt-10 w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className="text-white">
                            <th className="bg-primary">
                                #
                            </th>
                            <th className="bg-primary">Class Name</th>
                            <th className="bg-primary">Price</th>
                            <th className="bg-primary" >Payment Date</th>
                            <th className="bg-primary">Transection Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            paymentData.map((data, index) =>
                                <tr key={data._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        {data.class_name}
                                    </td>
                                    <td>BDT {data.price}</td>
                                    <td>
                                        {data.date}
                                    </td>
                                    <td>
                                        {data.transectionId}
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;
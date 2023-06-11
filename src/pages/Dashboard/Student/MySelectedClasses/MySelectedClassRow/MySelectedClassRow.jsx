import { AiTwotoneDelete } from "react-icons/ai";
const MySelectedClassRow = ({ classData, index }) => {
    const { photo, class_name, price} = classData;
    return (
        <tr >
            <th>
                {index + 1}
            </th>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={photo} alt="Class Photo" />
                    </div>
                </div>
            </td>
            <td>
                {class_name}
            </td>
            <td>BDT {price}</td>

            <td>
                <button className="btn-small">Pay Now</button>
            </td>
            <td>
                <button className="btn-small bg-error"><AiTwotoneDelete className="text-error w-6 h-6"/></button>
            </td>
        </tr>
    );
};

export default MySelectedClassRow;
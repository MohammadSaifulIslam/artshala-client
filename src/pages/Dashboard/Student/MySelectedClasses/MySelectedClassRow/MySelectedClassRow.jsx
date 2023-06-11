import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const MySelectedClassRow = ({ classData, index , handleRemoveClass}) => {
    const {_id, photo, class_name, price} = classData;
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
               <Link to={`/dashboard/payment/${_id}`}> <button className="btn-small">Pay Now</button></Link>
            </td>
            <td>
                <button onClick={()=>handleRemoveClass(_id)} className="btn-small bg-error"><AiTwotoneDelete className="text-error w-6 h-6"/></button>
            </td>
        </tr>
    );
};

export default MySelectedClassRow;
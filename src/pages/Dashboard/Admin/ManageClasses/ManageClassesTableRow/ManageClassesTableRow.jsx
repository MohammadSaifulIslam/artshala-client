import FeedbackModal from "../FeedbackModal/FeedbackModal";

const ManageClassesTableRow = ({ classData, index, handleApproved, handleDeny, handleFeedback }) => {

    const { photo, class_name, instructor_email, instructor_name, available_seats, price, status, _id } = classData
    return (
        <tr >
            <th>
                {index + 1}
            </th>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={photo} alt="Class photo" />
                    </div>
                </div>
            </td>
            <td>
                {class_name}
            </td>
            <td>
                {instructor_name}
                <br />
                <span className="badge badge-ghost badge-sm">{instructor_email}</span>
            </td>
            <td>{available_seats}</td>
            <td>{price}</td>
            <td>{status}</td>
            <th>
                <div className='flex gap-3'>
                    <button onClick={() => handleApproved(_id)} className={`text-sm font-medium bg-slate-200 p-2 rounded-md ${status === 'Approved' || status === "Denied" ? 'btn-disabled' : ''}`}>Approve</button>
                    <button onClick={() => handleDeny(_id)} className={`text-sm font-medium bg-slate-200 p-2 rounded-md ${status === 'Approved' || status === "Denied" ? 'btn-disabled' : ''}`}>Deny</button>
                    {/* admin feedback modal */}
                    <label htmlFor="my_modal_6" className={`text-sm font-medium bg-slate-200 p-2 rounded-md cursor-pointer`}>
                        Feadback
                    </label>
                    <FeedbackModal handleFeedback={handleFeedback} id={_id}/>
                </div>
            </th>
        </tr>
    );
};

export default ManageClassesTableRow;
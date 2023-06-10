const ManageClassesTableRow = ({ classData, index,handleApproved }) => {
    const {photo, class_name, instructor_email, instructor_name, available_seats, price, status, _id} =classData
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
                    <button onClick={()=>handleApproved(_id)} className={`text-sm font-medium bg-slate-200 p-2 rounded-md ${status === 'Approved' ? 'btn-disabled' : ''}`}>Approve</button>
                    <button className={`text-sm font-medium bg-slate-200 p-2 rounded-md ${status === 'Approved' ? 'btn-disabled' : ''}`}>Deny</button>
                    <button className={`text-sm font-medium bg-slate-200 p-2 rounded-md`}>Feadback</button>
                </div>
            </th>
        </tr>
    );
};

export default ManageClassesTableRow;
const ManageClassesTableRow = ({ classData, index }) => {
    return (
        <tr >
            <th>
               {index + 1}
            </th>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={classData.photo} alt="Class photo" />
                    </div>
                </div>
            </td>
            <td>
                {classData.class_name}
            </td>
            <td>
                {classData.instructor_name}
                <br />
                <span className="badge badge-ghost badge-sm">{classData.instructor_email}</span>
            </td>
            <td>{classData.available_seats}</td>
            <td>{classData.price}</td>
            <td>{classData.status}</td>
            <th>
                <div className='flex'>
                    <button className="btn btn-ghost btn-xs">Approve</button>
                    <button className="btn btn-ghost btn-xs">Deny</button>
                    <button className="btn btn-ghost btn-xs">Feadback</button>
                </div>
            </th>
        </tr>
    );
};

export default ManageClassesTableRow;

const MyClassesTableRow = ({ classData, index }) => {
    const {photo, class_name, enrolled_students,status} = classData;
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
            <td>{enrolled_students}</td>
            <td>{status}</td>
            <td>
                {classData.feedback && 
                <button className="btn btn-xs">View Feeback</button>
                }
            </td>
            <td>
                <button className="btn btn-xs">Update</button>
            </td>
        </tr>
    );
};

export default MyClassesTableRow;
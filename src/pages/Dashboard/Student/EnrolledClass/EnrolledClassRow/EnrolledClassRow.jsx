const EnrolledClassRow = ({ classData, index }) => {
    const { photo, class_name, price, date } = classData;
    console.log(classData)
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
                {date}
            </td>


        </tr>
    );
};

export default EnrolledClassRow;
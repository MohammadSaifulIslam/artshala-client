import instructorIcon from '../../../../assets/icons/driving-instructor.png';
import adminIcon from '../../../../assets/icons/setting.png';

const UserTableRow = ({ user, index, handleInstructor }) => {
const {_id, name, photo, email}=user
    return (
        <tr key={_id}>
            <th>
                {index + 1}
            </th>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={photo} alt="User photo" />
                    </div>
                </div>
            </td>
            <td>
                {name}
            </td>
            <td>{email}</td>
            <td>
                <div className='flex gap-5'>
                    <button onClick={()=> handleInstructor(_id)} className={`flex gap-2 items-center rounded-md text-sm font-medium bg-slate-200 p-2 ${user?.role === 'instructor' ? ' btn-disabled' :''}`} title="Make Instructor" >
                        <img src={instructorIcon} alt="" className="w-5 h-5 object-contain" /> Instructor
                    </button>
                    <button className='flex gap-2 items-center rounded-md text-sm font-medium bg-slate-200 p-2 ' title="Make Admin">
                        <img src={adminIcon} alt="" className="w-5 h-5 object-contain" /> Admin
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default UserTableRow;
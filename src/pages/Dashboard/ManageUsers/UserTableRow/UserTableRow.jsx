import instructorIcon from '../../../../assets/icons/driving-instructor.png';
import adminIcon from '../../../../assets/icons/setting.png';

const UserTableRow = ({ user, index }) => {

    return (
        <tr key={user._id}>
            <th>
                {index + 1}
            </th>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={user.photo} alt="User photo" />
                    </div>
                </div>
            </td>
            <td>
                {user.name}
            </td>
            <td>{user.email}</td>
            <td>
                <div className='flex gap-5'>
                    <button className='flex gap-2 items-center rounded-md text-sm font-medium bg-slate-200 p-2' title="Make Instructor" >
                        <img src={instructorIcon} alt="" className="w-5 h-5 object-contain" /> Instructor
                    </button>
                    <button className='flex gap-2 items-center rounded-md text-sm font-medium bg-slate-200 p-2' title="Make Admin">
                        <img src={adminIcon} alt="" className="w-5 h-5 object-contain" /> Admin
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default UserTableRow;
import instructorIcon from '../../../../assets/icons/driving-instructor.png';
import adminIcon from '../../../../assets/icons/setting.png';

const UserTableRow = ({ user, index, handleInstructor, handleAdmin }) => {
    const { _id, name, photo, email } = user
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
                    <button onClick={() => handleInstructor(_id, name)} className={`flex gap-2 items-center rounded-md text-sm font-medium bg-slate-200 p-2 ${user?.role === 'instructor' ? ' btn-disabled opacity-70' : ''}`} title="Make Instructor" >
                        <img src={instructorIcon} alt="" className="w-5 h-5 object-contain" /> Instructor
                    </button>
                    <button onClick={() => { handleAdmin(_id, name) }} className={`flex  gap-2 items-center rounded-md text-sm font-medium bg-slate-200 p-2 ${user?.role === 'admin' ? ' btn-disabled opacity-70' : ''}`} title="Make Admin">
                        <img src={adminIcon} alt="" className="w-5 h-5 object-contain" /> Admin
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default UserTableRow;
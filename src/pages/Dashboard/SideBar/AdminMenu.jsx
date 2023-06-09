import { BsFillHouseAddFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
    return (
        <div>
            <NavLink
                to='/'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-white   hover:text-black ${isActive ? 'bg-white  text-black' : 'text-black'
                    }`
                }
            >
                <BsFillHouseAddFill className='w-5 h-5' />
                <span className='mx-4 font-medium'>Manage Classes</span>
            </NavLink>
            <NavLink
                to='/dashboard/manage-users'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-white   hover:text-black ${isActive ? 'bg-white  text-black' : 'text-black'
                    }`
                }
            >
                <BsFillHouseAddFill className='w-5 h-5' />
                <span className='mx-4 font-medium'>Manage Users</span>
            </NavLink>
        </div>
    );
};

export default AdminMenu;
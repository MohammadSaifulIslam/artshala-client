import { BsFillHouseAddFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const StudentMenu = () => {
    return (
        <>
        <NavLink
            to='/dashboard/my-selected-classes'
            className={({ isActive }) =>
                `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-white   hover:text-black ${isActive ? 'bg-white  text-black' : 'text-black'
                }`
            }
        >
            <BsFillHouseAddFill className='w-5 h-5' />
            <span className='mx-4 font-medium'>Selected Classes</span>
        </NavLink>
        <NavLink
            to='\'
            className={({ isActive }) =>
                `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-white   hover:text-black ${isActive ? 'bg-white  text-black' : 'text-black'
                }`
            }
        >
            <BsFillHouseAddFill className='w-5 h-5' />
            <span className='mx-4 font-medium'>Enrolled Classes</span>
        </NavLink>
    </>
    );
};

export default StudentMenu;
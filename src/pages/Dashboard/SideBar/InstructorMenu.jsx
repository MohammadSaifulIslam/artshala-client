import { BsFillHouseAddFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const InstructorMenu = () => {
    return (
        <>
        <NavLink
            to='/dashboard/add-class'
            className={({ isActive }) =>
                `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-white   hover:text-black ${isActive ? 'bg-white  text-black' : 'text-black'
                }`
            }
        >
            <BsFillHouseAddFill className='w-5 h-5' />
            <span className='mx-4 font-medium'>Add Class</span>
        </NavLink>
        <NavLink
            to='\'
            className={({ isActive }) =>
                `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-white   hover:text-black ${isActive ? 'bg-white  text-black' : 'text-black'
                }`
            }
        >
            <BsFillHouseAddFill className='w-5 h-5' />
            <span className='mx-4 font-medium'>My Classes</span>
        </NavLink>
    </>
    );
};

export default InstructorMenu;
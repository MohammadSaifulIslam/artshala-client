import { useState } from 'react'
import { AiOutlineBars } from 'react-icons/ai'
import { FcSettings } from 'react-icons/fc'
import { GrLogout } from 'react-icons/gr'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import useAdmin from '../../../hooks/useAdmin'
import useAuth from '../../../hooks/useAuth'
import AdminMenu from './AdminMenu'


const Sidebar = () => {
    const navigate = useNavigate()
    const { user, logOut } = useAuth()
    const [isActive, setActive] = useState('false')

    // TODO: make admin dynamic
    const [isAdmin] = useAdmin()
    console.log(isAdmin)
    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    const handleLogOut = () => {
        logOut()
        navigate('/')
    }
    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-primary bg-opacity-90 text-white flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4'>
                        <Link to='/' className="font-bold text-xl md:text-3xl" style={{ fontFamily: ['Bruno Ace SC', 'cursive'] }}>Artshala</Link>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-primary'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>
            {/* Sidebar */}
            <div
                className={`z-50 md:fixed flex flex-col justify-between overflow-x-hidden bg-primary text-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    {/* Branding & Profile Info */}
                    <div>
                        <div className='w-full hidden md:flex py-2 justify-center items-center  mx-auto'>
                            <Link to='/' className="font-bold text-xl md:text-3xl" style={{ fontFamily: ['Bruno Ace SC', 'cursive'] }}>Artshala</Link>

                        </div>
                        <div className='flex flex-col items-center mt-6 -mx-2'>
                            <Link to='/dashboard'>
                                <img
                                    className='object-cover w-24 h-24 mx-2 rounded-full'
                                    src={user?.photoURL}
                                    alt='avatar'
                                    referrerPolicy='no-referrer'
                                />
                            </Link>
                            <Link to='/dashboard'>
                                <h4 className='mx-2 mt-2 font-medium text-black  hover:underline'>
                                    {user?.displayName}
                                </h4>
                            </Link>
                            <Link to='/dashboard'>
                                <p className='mx-2 mt-1 text-sm font-medium text-black  hover:underline'>
                                    {user?.email}
                                </p>
                            </Link>
                        </div>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        <nav>
                            <>
                                {/* Menu Links */}
                                {
                                    isAdmin && <AdminMenu></AdminMenu>
                                }
                            </>
                        </nav>
                    </div>
                </div>

                <div>
                    <hr />
                    <NavLink
                        to='/dashboard/profile'
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-white   hover:text-black ${isActive ? 'bg-gray-300  text-black' : 'text-black'
                            }`
                        }
                    >
                        <FcSettings className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Profile</span>
                    </NavLink>
                    <button
                        onClick={handleLogOut}
                        className='flex w-full items-center px-4 py-2 mt-5 text-black hover:bg-white   hover:text-black transition-colors duration-300 transform'
                    >
                        <GrLogout className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar
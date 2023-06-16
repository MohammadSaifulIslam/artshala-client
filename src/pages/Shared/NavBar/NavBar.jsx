import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import UserAvater from '../../../components/UserAvater/UserAvater';
import useAuth from '../../../hooks/useAuth';

const NavBar = () => {
    const [theme, setTheme] = useState('light');
    const { user } = useAuth();

    // on scroll bg change
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 100) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);


    // toggle theme
    // theme toggle

    const toggleTheme = () => {
        setTheme(theme === 'forest' ? 'light' : 'forest');
    };

    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);


    return (
        <div className={` w-full fixed border-b-2 border-[#FFB347] left-1/2 -translate-x-1/2 duration-300 top-0 z-50 ${colorChange && theme === 'light' ? 'bg-white shadow-md' : colorChange && theme === 'forest' ? 'bg-black' : 'bg-transparent bg-black'}`}>
            <nav className={`my-container duration-300 navbar py-5 ${colorChange && theme === 'light' ? 'text-black' : colorChange && theme === 'forest' ? 'text-white' : 'text-white'}`}>
                <div className="navbar-start">
                    <Link to='/' className="font-bold text-xl md:text-3xl" style={{ fontFamily: ['Bruno Ace SC', 'cursive'] }}>Artshala</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-5 px-1 font-semibold uppercase">
                        <li><NavLink to='/' className={({ isActive }) =>
                            isActive ? "text-[#FFB347]" : ''}>
                            HOME</NavLink></li>
                        <li><NavLink to='/instructors' className={({ isActive }) =>
                            isActive ? "text-[#FFB347]" : ''}>
                            Instructors</NavLink></li>
                        <li><NavLink to='/classes' className={({ isActive }) =>
                            isActive ? "text-[#FFB347]" : ''}>
                            Classes</NavLink></li>
                        {
                            user && <li><NavLink to='/dashboard' className={({ isActive }) =>
                                isActive ? "text-[#FFB347]" : ''}>
                                Dashboard </NavLink></li>
                        }
                        <li><NavLink to='/contact' className={({ isActive }) =>
                            isActive ? "text-[#FFB347]" : ''}>
                            CONTACT</NavLink></li>
                        <li>
                            <input onClick={toggleTheme} type="checkbox" className="toggle ml-3" />
                        </li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <UserAvater />
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className={`menu uppercase menu-compact font-semibold dropdown-content mt-3 p-2 shadow duration-300 rounded-box w-52 ${theme === 'forest'? 'bg-black text-white': 'bg-white text-black'}`}>
                            <li><NavLink to='/' className={({ isActive }) =>
                                isActive ? "text-[#FFB347]" : ''}>
                                HOME</NavLink></li>
                            <li><NavLink to='/instructors' className={({ isActive }) =>
                                isActive ? "text-[#FFB347]" : ''}>
                                Instructors</NavLink></li>
                            <li><NavLink to='/classes' className={({ isActive }) =>
                                isActive ? "text-[#FFB347]" : ''}>
                                Classes</NavLink></li>
                            {
                                user && <li><NavLink to='/dashboard' className={({ isActive }) =>
                                    isActive ? "text-[#FFB347]" : ''}>
                                    Dashboard</NavLink></li>
                            }
                            <li><NavLink to='/contact' className={({ isActive }) =>
                                isActive ? "text-[#FFB347]" : ''}>
                                CONTACT</NavLink></li>
                            {
                                !user && <li><NavLink to='/login' className={({ isActive }) =>
                                    isActive ? "text-[#FFB347]" : ''}>
                                    Login</NavLink></li>
                            }
                            <li>
                                <input onClick={toggleTheme} type="checkbox" className="toggle ml-3" />
                            </li>

                        </ul>
                    </div>
                </div>

            </nav>
        </div>
    );
};

export default NavBar;
import { Link, NavLink } from 'react-router-dom';
import UserAvater from '../../../components/UserAvater/UserAvater';
import useAuth from '../../../hooks/useAuth';

const NavBar = () => {
    const { user } = useAuth();
    return (
        <div className='bg-black w-full fixed left-1/2 -translate-x-1/2 top-0 z-50'>
            <nav className="my-container navbar text-white py-5">
                <div className="navbar-start">
                    <Link to='/' className="font-bold text-xl md:text-3xl" style={{ fontFamily: ['Bruno Ace SC', 'cursive'] }}>Artshala</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-5 px-1 font-semibold uppercase">
                        <li><NavLink to='/' className={({ isActive }) =>
                            isActive ? "text-primary" : ''}>
                            HOME</NavLink></li>
                        <li><NavLink to='/instructors' className={({ isActive }) =>
                            isActive ? "text-primary" : ''}>
                            Instructors</NavLink></li>
                        <li><NavLink to='/classes' className={({ isActive }) =>
                            isActive ? "text-primary" : ''}>
                            Classes</NavLink></li>
                        {
                            user && <li><NavLink to='/dashboard' className={({ isActive }) =>
                                isActive ? "text-primary" : ''}>
                                Dashboard </NavLink></li>
                        }
                        <li><NavLink to='/contact' className={({ isActive }) =>
                            isActive ? "text-primary" : ''}>
                            CONTACT</NavLink></li>


                    </ul>
                </div>
                <div className="navbar-end">
                    <UserAvater />
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu uppercase menu-compact font-semibold dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-black">
                            <li><NavLink to='/' className={({ isActive }) =>
                                isActive ? "text-primary" : ''}>
                                HOME</NavLink></li>
                            <li><NavLink to='/instructors' className={({ isActive }) =>
                                isActive ? "text-primary" : ''}>
                                Instructors</NavLink></li>
                            <li><NavLink to='/classes' className={({ isActive }) =>
                                isActive ? "text-primary" : ''}>
                                Classes</NavLink></li>
                            {
                                user && <li><NavLink to='/dashboard' className={({ isActive }) =>
                                    isActive ? "text-primary" : ''}>
                                    Dashboard</NavLink></li>
                            }
                            <li><NavLink to='/contact' className={({ isActive }) =>
                                isActive ? "text-primary" : ''}>
                                CONTACT</NavLink></li>
                            {
                                !user && <li><NavLink to='/login' className={({ isActive }) =>
                                    isActive ? "text-primary" : ''}>
                                    Login</NavLink></li>
                            }


                        </ul>
                    </div>
                </div>

            </nav>
        </div>
    );
};

export default NavBar;
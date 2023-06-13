import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import logo from '../../../assets/color-logo-happy.png'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.log(error))
    }
    return (
        <div className="navbar sticky top-0 bg-opacity-40 max-w-screen-xl z-10 bg-white text-black font-extrabold h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link> </li>
                        <li> <Link to="/instructors">Instructors</Link> </li>
                        <li> <Link to="/classes">Classes</Link> </li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img className="h-16" src={logo} alt="" />
                    <a className="btn btn-ghost normal-case text-xl"></a>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link> </li>
                    <li> <Link to="/instructors">Instructors</Link> </li>
                    <li> <Link to="/classes">Classes</Link> </li>
                    {user?.email ? <>
                        <li> <Link to="/dashboard/myclass">Dashboard</Link> </li>
                        <li><button onClick={handleLogOut}>Log out</button></li>
                    </>
                        : <li> <Link to="/login">Login</Link> </li>
                    }


                </ul>
            </div>
            <div className="navbar-end ">
                {
                    user && 
                    <div className="rounded-full tooltip tooltip-left" data-tip={user.displayName}>
                        <img  src={user.photoURL} className='rounded-full w-10' alt="toys" />
                    </div>
                }

            </div>

        </div>
    );
};

export default Header;
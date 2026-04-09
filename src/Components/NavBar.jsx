import React from 'react';
import { NavLink } from 'react-router-dom'; // নিশ্চিত করুন react-router-dom থেকে ইম্পোর্ট করছেন

const NavBar = () => {
    // অ্যাক্টিভ ক্লাসের জন্য একটি কমন ভ্যারিয়েবল যাতে কোড পরিষ্কার থাকে
    const activeClass = "border-2 border-green-500 text-green-500 font-bold px-4 py-2 rounded-lg transition-all";
    const normalClass = "px-4 py-2 border-2 border-transparent hover:text-green-500 transition-all";

    return (
        <div className="navbar bg-base-100 shadow-sm container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                        </svg>
                    </div>
                    <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/listed-books">Listed Books</NavLink></li>
                        <li><NavLink to="/pages-to-read">Pages to Read</NavLink></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Book Vibe</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    {/* Home-এর জন্য 'end' প্রোপার্টি যোগ করা হয়েছে যাতে অন্য পেজে গেলে এটি একটিভ না থাকে */}
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) => isActive ? activeClass : normalClass}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/listed-books"
                        className={({ isActive }) => isActive ? activeClass : normalClass}
                    >
                        Listed Books
                    </NavLink>

                    <NavLink
                        to="/pages-to-read"
                        className={({ isActive }) => isActive ? activeClass : normalClass}
                    >
                        Pages to Read
                    </NavLink>
                </ul>
            </div>

            <div className="navbar-end gap-2">
                <button className="btn bg-green-500 text-white border-none hover:bg-green-600">Sign In</button>
                <button className="btn bg-blue-400 text-white border-none hover:bg-blue-500">Sign Up</button>
            </div>
        </div>
    );
};

export default NavBar;
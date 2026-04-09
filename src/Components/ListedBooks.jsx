import React from 'react';
import { FaAngleDown } from "react-icons/fa"; // FaArrowDown এর বদলে FaAngleDown দেখতে বেশি সুন্দর লাগে
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className='container mx-auto'>
            <div className="p-5 text-2xl font-bold text-center bg-amber-200 rounded-2xl mt-2.5">Books</div>
            {/* 1. Sorting Dropdown Section */}
            <div className="flex justify-center m-2.5">
                <div className="dropdown dropdown-bottom">
                    <div tabIndex={0} role='button' className="btn font-bold bg-green-500 text-white hover:bg-green-600 px-8 gap-3">
                        Sort By <FaAngleDown />
                    </div>
                    <ul tabIndex={0} className='dropdown-contant z-1 menu p-2 shadow bg-base-100 rounded-box w-52 mt-2 hidden'>
                        <li><a href="">Rating</a></li>
                        <li><a href="">Publisher</a></li>
                        <li><a href="">Auther</a></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            {/* 2. Tabs Section (Read Books & Wishlist) */}
            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap border-b border-gray-300 mb-6">
                <Link
                    to="read"
                    onClick={() => setActiveTab(0)}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${activeTab === 0 ? "border border-b-0 rounded-t-lg border-gray-300 font-bold text-green-600" : "text-gray-400"}`}
                >
                    <span>Read Books</span>
                </Link>
                <Link
                    to="wishlist"
                    onClick={() => setActiveTab(0)}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${activeTab === 0 ? "border border-b-0 rounded-t-lg border-gray-300 font-bold text-green-600" : "text-gray-400"}`}
                >
                    <span>Wishlist Books</span>
                </Link>
                {/* 1. Sorting Dropdown Section */}
                

            </div>
            {/* 3. Content Area */}
            <div className="mt-4">
                <Outlet /> {/* এখানে Read বা Wishlist এর ডাটাগুলো দেখাবে */}
            </div>
        </div>
    );
};

export default ListedBooks;
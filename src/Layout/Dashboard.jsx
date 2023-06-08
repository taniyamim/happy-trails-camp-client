import React, { useState } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { FaBookReader, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers, FaShoppingCart } from 'react-icons/fa';
import UseSelectedClass from '../hooks/UseSelectedClass';
import { Helmet } from 'react-helmet-async';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [selectedClass] = UseSelectedClass();
    console.log(selectedClass);
    // const isAdmin = true
    const [isAdmin] = useAdmin();

    return (
        <div>
            <Helmet>
                <title> Happy Trails Camp | Dashboard</title>
            </Helmet>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-pink-900">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full  text-base-content">
                        {/* Sidebar content here */}
                        {
                            isAdmin ?
                                <>
                                    <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>
                                    <li><NavLink to="/dashboard/manageClasses"><FaBook></FaBook> Manage Classes</NavLink></li>
                                    <li><NavLink to="/dashboard/manageUsers"><FaWallet></FaWallet> Manage Users</NavLink></li>

                                </> :
                                <>
                                    <li><NavLink to="/dashboard/addClass"> <FaUtensils></FaUtensils> Add a Class</NavLink></li>
                                    <li><NavLink to="/dashboard/instClasses"> <FaUtensils></FaUtensils> My Classes</NavLink></li>
                                    <li><NavLink to="/"><FaWallet></FaWallet> Payment History</NavLink></li>
                                    <li>
                                        <NavLink to="/dashboard/myclass"><FaShoppingCart></FaShoppingCart> My Selected Class
                                            <span className="badge inl badge-secondary">+{selectedClass?.length || 0}</span>
                                        </NavLink>

                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/myEnrolledclass"><FaShoppingCart></FaShoppingCart> My Enrolled Class
                                            {/* <span className="badge inl badge-secondary">+{cart?.length || 0}</span> */}
                                        </NavLink>

                                    </li>
                                </>
                        }
                        <div className="divider"></div>
                        <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>




                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
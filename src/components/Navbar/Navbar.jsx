import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-slate-900 py-4 items-center text-white font-semibold flex justify-between px-14'>
            <h2 className='text-3xl font-bold'>Students Information</h2>
            <div>
                <Link className='px-2' to="/">Home</Link>
                <Link className='px-2' to="/">Students</Link>
                <Link className='px-2' to="/service">Add Student</Link>
                <Link className='px-2' to="/about">About Us</Link>
            </div>
        </div>
    );
};

export default Navbar;
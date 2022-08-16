import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
const Navbar = () => {

    const [ mobileNav, showNav ] = useState(false);
    const toggleMenu = () => {showNav(!mobileNav); console.log('clickeeeed');};

    return (
        <>
            <div className='p-4 flex justify-between items-center bg-neutral-50  drop-shadow-md '>
                <h1 className='mx-2 text-emerald-400 text-4xl font-bold cursor-pointer'>OTH<span className='text-slate-300'>DR</span></h1>
                <ul className='hidden md:flex'>
                    <li className='text-md mx-2 hover:font-semibold hover:text-emerald-400 text-slate-400'><a href="/">Pricing</a></li>
                    <li className='text-md mx-2 hover:font-semibold hover:text-emerald-400 text-slate-400'><a href="/">Contact</a></li>
                    <li className='text-md mx-2 hover:font-semibold hover:text-emerald-400 text-slate-400'><a href="/">About</a></li>
                </ul>

                {!mobileNav
                    ? <FiX onClick={toggleMenu} className='md:hidden cursor-pointer hover:text-emerald-200 text-slate-600' size={22} />
                    : <FiMenu onClick={toggleMenu} className='md:hidden cursor-pointer hover:text-emerald-200 text-slate-600' size={22} />
                }

            </div>
            {!mobileNav && <ul className='absolute md:hidden w-full h-screen bg-neutral-50 pt-[20%] px-[30%] uppercase'>
                <li className='text-md my-8 text-slate-600 hover:text-emerald-200 text-2xl text-center border-b-2 border-emerald-50 leading-10'><a className='shadow-2xl shadow-emerald-50' href="/">Pricing</a></li>
                <li className='text-md my-8 text-slate-600 hover:text-emerald-200 text-2xl text-center border-b-2 border-emerald-50 leading-10'><a className='shadow-2xl shadow-emerald-50' href="/">Contact</a></li>
                <li className='text-md my-8 text-slate-600 hover:text-emerald-200 text-2xl text-center border-b-2 border-emerald-50 leading-10'><a className='shadow-2xl shadow-emerald-50' href="/">About</a></li>
            </ul>}
        </>
    );
};

export default Navbar;
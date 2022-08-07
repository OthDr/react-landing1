//import { FiMenu, FiX } from 'react-icons/fi';
const Navbar = () => {


    return (
        <>
            <div className='px-2 py-4 flex justify-between items-center bg-neutral-50  drop-shadow-md'>
                <h1 className='border-b-2 border-emerald-400 mx-2 text-emerald-400 text-2xl font-bold'>OTH<span className='text-slate-300'>DR</span></h1>
                <ul className='flex'>
                    <li className='mx-2 hover:font-semibold hover:text-emerald-400 text-slate-400'><a href="/">Pricing</a></li>
                    <li className='mx-2 hover:font-semibold hover:text-emerald-400 text-slate-400'><a href="/">Contact</a></li>
                    <li className='mx-2 hover:font-semibold hover:text-emerald-400 text-slate-400'><a href="/">About</a></li>
                </ul>   
            </div>
        </>
    );
};

export default Navbar;
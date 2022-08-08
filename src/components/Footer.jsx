import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <div className="p-8 bg-slate-800">
                <div className="grid ">
                    
                    <div className="max-w-full mx-auto flex flex-col md:flex-row my-2">
                        <a href="#" className='mx-2 flex items-center  text-slate-300'><FaFacebookSquare size={20} />OTHDR</a>
                        <a href="#" className='mx-2 flex items-center  text-slate-300'><FaGithubSquare size={20} />OTHDR</a>
                        <a href="#" className='mx-2 flex items-center  text-slate-300'><FaTwitterSquare size={20} />OTHDR</a>
                        <a href="#" className='mx-2 flex items-center  text-slate-300'><FaInstagram size={20} />OTHDR</a>
                    </div>
                    <div className='max-w-full mx-auto flex flex-col md:flex-row my-4'>
                        <h5 className='mx-2 text-emerald-300'> <a href="#">Privacy</a> </h5>
                        <h5 className='mx-2 text-emerald-300'> <a href="#">Terms</a> </h5>
                        <h5 className='mx-2 text-emerald-300'> <a href="#">Blog</a> </h5>
                    </div>
                </div>
                <div className='max-w-full mx-auto mt-2'>
                    <h2 className='text-center font-semibold text-slate-400'>&copy; 2022 Othmane DR</h2>
                </div>
            </div>
        </>
    );
}

export default Footer;
import coder from '../assets/css.png';

const Offers = () => {
    return (
        <>
            <div className='p-12 mb-12'>
                
                <h1 className='text-5xl font-bold text-center text-emerald-400'>Offers</h1>
                
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 p-8">
                    <div className="flex flex-col items-center bg-slate-900 w-full shadow-lg  shadow-emerald-200 rounded-md py-4 hover:scale-105 duration-500">
                        <img className='w-24' src={coder} alt="/" />
                        <h1 className='text-2xl font-bold text-emerald-400 text-center'>One static page</h1>
                        <p className='text-ld font-semibold text-slate-300 mt-2 mb-4'><span className='font-bold text-emerald-100 text-center'>12.99$</span></p>
                        <div className='flex flex-col my-2'>
                            <p className='text-md font-semibold text-slate-200 border-b-2 leading-7 border-slate-800 text-center '>HTML5, CSS3, VanillaJS</p>
                            <p className='text-md font-semibold text-slate-200 leading-7 border-slate-800 text-center '>ReactJS, TaiwlwindCss</p>
                        </div>
                        <button className='hover:scale-105 duration-200 bg-slate-800 text-lg font-bold text-emerald-300 px-12 py-2 rounded-md mt-4 hover:bg-emerald-400 hover:text-emerald-800'>Go for this</button>
                    </div>

                    <div className="flex flex-col items-center bg-slate-900 w-full shadow-lg  shadow-emerald-200 rounded-md py-4 hover:scale-105 duration-500">
                        <img className='w-24' src={coder} alt="/" />
                        <h1 className='text-2xl font-bold text-emerald-400 text-center'>Multiple static pages</h1>
                        <p className='text-ld font-semibold text-slate-300 mt-2 mb-4 text-center'>a page <span className='font-bold text-emerald-100'>10.99$</span></p>
                        <div className='flex flex-col my-2'>
                            <p className='text-md font-semibold text-slate-200 border-b-2 leading-7 border-slate-800 text-center '>HTML5, CSS3, VanillaJS</p>
                            <p className='text-md font-semibold text-slate-200 leading-7 border-slate-800 text-center '>ReactJS, TaiwlwindCss</p>
                        </div>
                        <button className='hover:scale-105 duration-200 bg-slate-800 text-lg font-bold text-emerald-300 px-12 py-2 rounded-md mt-4 hover:bg-emerald-400 hover:text-emerald-800'>Go for this</button>
                    </div>

                    <div className="flex flex-col items-center bg-slate-900 w-full shadow-lg  shadow-emerald-200 rounded-md py-4 hover:scale-105 duration-500">
                        <img className='w-24' src={coder} alt="/" />
                        <h1 className='text-2xl font-bold text-emerald-400 text-center'>Dynamic Website</h1>
                        <p className='text-ld font-semibold text-slate-300 mt-2 mb-4 text-center'>from <span className='font-bold text-emerald-100'>19.99$</span></p>
                        <div className='flex flex-col my-2'>
                            <p className='text-md font-semibold text-slate-200 border-b-2 leading-7 border-slate-800 text-center '>ReactJS/TaiwlwindCss</p>
                            <p className='text-md font-semibold text-slate-200 leading-7 border-slate-800 text-center '>NodeJS/MongoDB API</p>
                        </div>
                        <button className=' bg-slate-800 text-lg font-bold text-emerald-300 px-12 py-2 rounded-md mt-4 hover:bg-emerald-400 hover:text-emerald-800'>Go for this</button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Offers;
import coder from '../assets/4136918.jpg'

const Central = () => {
    return (
        <>
            <div className='flex justify-center py-12'>
                
                <div className="flex flex-col  md:flex-row items-center">
                
                    <img className='w-[440px]' src={coder} alt="/" />
                    <div className="flex flex-col justify-center items-center md:items-start">
                        <p className="text-emerald-400  text-xl font-bold my-2">Nice themes and colors, with best code quality</p>
                        <p className='md:max-w-lg max-w-md text-2xl font-semibold text-slate-500 leading-7 text-center md:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur officiis iure vero perferendis ex magni illo ipsum repellendus.</p>
                        <button className='hover:scale-105 duration-200 bg-slate-800 text-lg font-bold text-emerald-300 px-12 py-2 rounded-md mt-6 hover:bg-emerald-400 hover:text-emerald-800'>Start</button>
                        
                    </div>
                </div>

            </div>
        </>
    );
}

export default Central;
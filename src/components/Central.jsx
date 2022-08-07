import coder from '../assets/4136918.jpg'

const Central = () => {
    return (
        <>
            <div className='flex justify-center'>
                
                <div className="flex my-12">
                
                    <img className='w-[440px]' src={coder} alt="/" />
                    <div className="flex flex-col justify-center items-start">
                        <p className="text-emerald-300  text-lg font-bold my-2">Nice themes and colors, with best code quality</p>
                        <p className='max-w-lg text-xl font-semibold text-slate-500 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur officiis iure vero perferendis ex magni illo ipsum repellendus.</p>
                        <button className='hover:scale-110 bg-slate-800 text-lg font-bold text-emerald-300 px-12 py-2 rounded-md mt-4 hover:bg-emerald-400 hover:text-emerald-800'>Start</button>
                        
                    </div>
                </div>

            </div>
        </>
    );
}

export default Central;
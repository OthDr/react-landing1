import Typed from 'react-typed';

const Header = () => {
    return (
        <>
            <div className="flex flex-col items-center py-12 bg-slate-900">
                <h1 className="text-emerald-400 text-4xl font-bold my-2 text-center">This is Doth Landing WEB Page</h1>
                <p className="text-slate-300 md:max-w-2xl max-w-md text-2xl my-2 text-center">Nice themes and colors, with best code quality</p>
                <Typed
                    className='text-emerald-200 text-xl  font-bold '
                    strings={['ReactJS', 'TailwindCss']}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                />
            </div>
        </>
    );
}

export default Header;
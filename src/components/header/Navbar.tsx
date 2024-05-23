import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
    menu: boolean;
    handleMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ menu, handleMenu }) => {
    return (
        <div className=''>
            {/* sidemenu on above beacuse i want to make the sidebar start from navbar component */}
            <div className={`fixed h-full w-64 bg-white text-black transform ${menu ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
                <ul className='flex flex-col p-4 '>
                    <li className='border_bottom py-2'><Link to='/' onClick={handleMenu}>Home</Link></li>
                    <li className='border_bottom py-2 '><Link to='sport' onClick={handleMenu}>Sport</Link></li>
                    <li className='border_bottom py-2 '><Link to='bussiness' onClick={handleMenu}>Bussiness</Link></li>
                    <li className='border_bottom py-2 '><Link to='entertainment' onClick={handleMenu}>Entertainment</Link></li>
                    <li className='border_bottom py-2 '><Link to='technology' onClick={handleMenu}>Technology</Link></li>
                </ul>
            </div >
            {/* when toggle background dim */}
            {menu && <div className='fixed inset-0 bg-black opacity-50' onClick={handleMenu}></div>}

            <div className=' hidden md:inline'>
                <ul className='flex justify-center items-center'>
                    <li className='p-2 '><Link to='/'>Home</Link></li>
                    <li className='p-2 '><Link to='sport'>Sport</Link></li>
                    <li className='p-2 '><Link to='bussiness'>Bussiness</Link></li>
                    <li className='p-2 '><Link to='entertainment'>Entertainment</Link></li>
                    <li className='p-2 '><Link to='technology'>Technology</Link></li>
                </ul>
                <hr />
            </div>

        </div>
    )
}

export default Navbar


import React from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
interface SidebarProps {
    menu: boolean;
    handleMenu: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ menu, handleMenu }) => {

    return (<>
        <div onClick={handleMenu} className='block m-1 cursor-pointer'>
            {menu ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

    </>
    )
}

export default Sidebar


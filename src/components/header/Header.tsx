import { useState } from "react"
import DarkButton from "./Button/DarkButton"
import HeadingLogo from "./HeadingLogo"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
const Header = () => {
    const [menu, setMenu] = useState(false)
    const handleMenu = () => {
        setMenu(!menu)
    }
    return (
        <>

            <div className=" w-full flex justify-between items-center  p-4">
                <div>
                    <Sidebar menu={menu} handleMenu={handleMenu} />
                </div>

                <div>
                    <HeadingLogo />
                </div>


                <div className="invisible" >
                    <DarkButton />
                </div>
            </div>

            <hr />
            {/* Navbar */}
            <div>
                <Navbar menu={menu} handleMenu={handleMenu} />
            </div>


        </>
    )
}

export default Header
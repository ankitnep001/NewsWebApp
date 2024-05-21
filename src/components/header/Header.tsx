import { useState } from "react"
import DarkButton from "./Button/DarkButton"
import LanguageButton from "./Button/LanguageButton"
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

            <div className="w-full flex justify-between items-center my-2 px-4">
                <div>
                    <Sidebar menu={menu} handleMenu={handleMenu} />
                </div>

                <div>
                    <HeadingLogo />
                </div>

                {/* toggle buttons dark theme and multilanguage */}
                <div className="flex flex-col justify-center items-center">
                    <DarkButton />
                    <LanguageButton />
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
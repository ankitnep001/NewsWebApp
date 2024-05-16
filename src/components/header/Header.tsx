// import { image } from "@config/constant/image"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
const Header = () => {
    return (
        <>
            <div className="  flex flex-row justify-between items-center p-2 m-4">
                {/* sidebar */}
                <div>
                    <Sidebar />
                </div>

                {/* logo */}
                <div className="tracking-wider flex justify-center items-center cursor-pointer" title="News Beat Central">
                    <p className="bg-gray-900 text-white text-center mx-1 w-6 h-6">N</p>
                    <p className="bg-gray-900 text-white text-center mx-1 w-6 h-6">B</p>
                    <p className="bg-gray-900 text-white text-center mx-1 w-6 h-6">C</p>
                </div>

                {/* toggle buttons dark theme and multilanguage */}
                <div>
                    <button>lang</button>
                    <button>dark</button>
                </div>

            </div>
            <hr />
            {/* Navbar */}
            <div>
                <Navbar />
            </div>
            <hr />
        </>
    )
}

export default Header
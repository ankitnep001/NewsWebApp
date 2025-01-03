import HeadingLogo from "components/header/HeadingLogo";

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get the current year dynamically

    return (
        <div className=" absolute  w-full border-2 border-t-black  ">
            <div className="flex flex-col justify-start items-start mx-4 md:mx-32">
                <div className="mt-5">
                    <HeadingLogo />
                </div>

                <div className="my-4">
                    <ul className="flex flex-wrap gap-5 text-gray-500">
                        <li>Terms of Use</li>
                        <li>About the NBC</li>
                        <li>Privacy Policy</li>
                        <li>Contact the NBC</li>
                    </ul>
                </div>

                <div className="mb-4 text-gray-500">
                    <p>Copyright © {currentYear} NBC. All rights reserved. </p>
                </div>
            </div>
        </div>
    )
}

export default Footer

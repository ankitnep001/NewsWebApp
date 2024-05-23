import React from 'react'
import { Link } from 'react-router-dom'

const HeadingLogo: React.FC = () => {
    return (
        <Link to='/'>
            <div className="tracking-wider w-full flex justify-center items-center  cursor-pointer m-1" title="Nepal Broadcasting Central">
                <p className="abbravations mr-2 ">N</p>
                <p className="abbravations mr-2 ">B</p>
                <p className="abbravations  ">C</p>
            </div>
        </Link>
    )
}

export default HeadingLogo

import React from 'react'
import { Link } from "react-router-dom";
import { FaCompress } from "react-icons/fa";
const MenuItem = ({ link, title, Icon = FaCompress }) => {
    return (
        <Link to={link} className=' w-full flex items-center justify-start gap-4 text-white md:p-3 p-1 hover:bg-[#0f2b6446] transition-all hover:shadow-xl whitespace-nowrap '>
            <Icon />
            {title}
        </Link>

    )
}

export default MenuItem
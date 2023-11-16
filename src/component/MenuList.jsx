import React from 'react'
import MenuItem from '../Helper/MenuItem'
const MenuList = () => {
    return (
        <div className=" h-full w-full flex md:flex-col flex-row  border-r">
            <h1 className="text-3xl text-center md:block hidden text-white mb-5">
                Admin
            </h1>
            <ul className="w-full md:h-full scrollable flex items-center justify-start md:flex-col flex-row gap-2 md:p-3 font-light">
                <MenuItem link="/" title="Dashboard" />
                <MenuItem link="/all-lawyer" title="Lawyer" />
                <MenuItem link="/total-users" title="Total users" />
                <MenuItem link="/cases" title="Cases" />
                <MenuItem link="/departments" title="Departments" />
                <MenuItem link="/notification" title="Notification" />
                <MenuItem link="/service" title="Service" />
                <MenuItem link="/banner" title="Banner" />
                <MenuItem link="/all-files" title="All Files" />
                <MenuItem link="/to-do-list" title="To-do List" />
                <MenuItem link="/permissions" title="Permissions" />
                <MenuItem link="/messages" title="Messages" />
            </ul>
        </div>
    )
}

export default MenuList
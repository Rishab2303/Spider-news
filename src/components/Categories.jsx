import React from 'react'
import { NavLink } from 'react-router-dom'

const Categories = () => {
    let category = ["Business", "Entertainment", "General", "Health", "Science", "Sports", "Technology"]
    return (
        <div className='md:w-[80%] m-auto p-3 border-b-2 border-gray-200 overflow-x-auto bg-white'>
            <ul className='flex justify-between'>
                {category.map((category, index) => {
                    return <li className='tracking-wider hover:bg-yellow-500 p-2' key={index}><NavLink className={(e) => { return e.isActive ? "text-red-700" : "" }} to={`/${category.toLowerCase()}`}>{category}</NavLink ></li>
                })}
            </ul>

        </div>
    )
}

export default Categories

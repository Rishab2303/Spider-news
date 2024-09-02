import React, { useEffect, useState } from 'react'

const CurrentDate = () => {
    const [day, setDay] = useState({
        day: "",
        month: "",
        date: "",
        year: ""
    })
    useEffect(() => {
        let date = new Date()
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        setDay({
            day: days[date.getDay()].slice(0, 3),
            month: months[date.getMonth()].slice(0, 3),
            date: date.getDate(),
            year: date.getFullYear()
        })
    }, [])


    return (
        <div className='font-bold '>
            {day.day} ,{day.month} {day.date} |{day.year}
        </div>
    )
}

export default CurrentDate

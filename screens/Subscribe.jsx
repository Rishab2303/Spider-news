import React from 'react'
import './Subscribe.css'

const Subscribe = ({ isOpen }) => {
    if (!isOpen) { return null }

    return (
        <>
            <div className="modal-wrapper"></div>
            <div className=' modal'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In iste facilis, velit quam ullam, libero repellendus, illum magnam architecto omnis quis! Quaerat eos nobis vero non, illum rerum pariatur praesentium magnam voluptate quidem nostrum, iusto quo vel, earum sit. Delectus doloremque nam id rem et culpa voluptate animi blanditiis adipisci!</p>
            </div></>

    )
}

export default Subscribe

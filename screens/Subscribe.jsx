import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import './Subscribe.css'

const Subscribe = ({ isOpen, setisOpen }) => {
    const inputRef = useRef(null)
    const [showOtpForm, setShowOtpForm] = useState(false)
    const [userVerified, setuserVerified] = useState(false)
    const otpArray = Array(4).fill("")

    const handleVerifyClick = () => {
        setuserVerified(true)
    }

    const handleModalClose = () => {
        setisOpen(false)
        setShowOtpForm(false)
        setuserVerified(false)

    }

    const handleInputClick = () => {
        setShowOtpForm(true)

    }
    useEffect(() => {
        if (isOpen) { inputRef.current.focus() }

    }, [isOpen])



    if (!isOpen) { return null }

    return (
        <>
            <div className="modal-wrapper"></div>

            {showOtpForm ? (userVerified ? <div className=' modal flex flex-col items-center ' ><div>
                <img src="./spider2.jfif" alt="" />
                <div className='text-3xl font-bold'>You are a Verified Spider!</div>
            </div>
                <button className='modal-close-button' onClick={handleModalClose}><FontAwesomeIcon icon={faCircleXmark} /></button>
            </div> : <div className=' modal flex flex-col items-center ' >
                <span className=' text-3xl font-bold '>Enter OTP</span>
                <div className='flex flex-col modal-number-input '>
                    <div className='flex otp-form-input'>{otpArray.map((otp, index) => {
                        return (<input className='border ' type='text' />)
                    })}</div>
                    <button className=' modal-input-button ' onClick={handleVerifyClick}>Verify</button>
                </div>
                <button className='modal-close-button' onClick={handleModalClose}><FontAwesomeIcon icon={faCircleXmark} /></button>


            </div>) : <div className=' modal flex flex-col items-center '><span className=' text-3xl font-bold '>Welcome Be a Spider!</span>
                <div className=' modal-number-input flex flex-col '>
                    <input ref={inputRef} className='modal-input' type="text" placeholder='Enter Your Mobile Number' />
                    <button className=' modal-input-button ' onClick={handleInputClick}>Next</button>

                </div>
                <button className='modal-close-button' onClick={handleModalClose}><FontAwesomeIcon icon={faCircleXmark} /></button></div>
            }

        </>
    )
}

export default Subscribe

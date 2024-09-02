import { useState } from 'react'
import React from 'react'
import countryCodes from '../utils/country_code'
import emojiFlags from 'emoji-flags'


const CountryFilter = ({ setCountry = { setCountry } }) => {



    const handleSelectChange = (e) => {
        setCountry(e.target.value)

    }

    return (
        <div>
            <select onChange={handleSelectChange} className='font-bold border-2 border-black outline outline-offset-1 outline-red-500  rounded-md p-3 cursor-pointer' name="Country" id="">
                <option value={countryCodes["India"].code}>India 🇮🇳</option>
                {Object.keys(countryCodes).map((country, index) => {
                    if (country != "India") {
                        const flag = emojiFlags[countryCodes[country].code.toUpperCase()].emoji

                        return (<option value={countryCodes[country].code} key={index}>{`${country} ${flag}`}</option>)
                    }

                })}
            </select>
        </div>
    )
}

export default CountryFilter

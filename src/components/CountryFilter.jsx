import { useState } from 'react'
import React from 'react'
import countryCodes from '../utils/country_code'
import emojiFlags from 'emoji-flags'


const CountryFilter = ({ setCountry = { setCountry }, hide = "hidden" }) => {



    const handleSelectChange = (e) => {
        setCountry(e.target.value)

    }

    return (
        <div className={`${hide} md:block`}>
            <select onChange={handleSelectChange} className='font-bold border-2 border-black outline outline-offset-1 outline-red-500  rounded-md p-3 cursor-pointer' name="Country" id="">
                <option value={countryCodes["United States"].code}>United States 🇺🇸</option>
                {Object.keys(countryCodes).map((country, index) => {
                    if (country != "United States") {
                        const flag = emojiFlags[countryCodes[country].code.toUpperCase()].emoji

                        return (<option value={countryCodes[country].code} key={countryCodes[country].code}>{`${country} ${flag}`}</option>)
                    }

                })}
            </select>
        </div>
    )
}

export default CountryFilter

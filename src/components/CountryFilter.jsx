import React from 'react'
import countryCodes from '../utils/country_code'
import emojiFlags from 'emoji-flags'


const CountryFilter = () => {

    const handleSelectChange = (e) => {
        console.log(e.target.value)

    }

    return (
        <div>
            <select onChange={handleSelectChange} className='border border-black p-3' name="Country" id="">
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

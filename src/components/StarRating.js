import React, { useState } from 'react'
import Rate from 'rc-rate'
import 'rc-rate/assets/index.css'

const StarRating = () => {

    const [rateValue, setRatevalue] = useState(0)

    const starValue = (e) => {
        setRatevalue(e)
        console.log(e)
    } 


    const boxStyle = {
        width:'40%',
        margin:'auto',
    }

    const starStyle = {
        width:'40%',
        margin:'5%',
        fontSize:'40px'
    }

    return (
        <div style={boxStyle}>
            <h1>Select The Average Rating</h1>
            <h3>{rateValue}</h3>
            <Rate style={starStyle} allowHalf={true} onChange={starValue} />
        </div>
    )
}

export default StarRating

import React, { useState } from 'react'
import Rate from 'rc-rate'
import 'rc-rate/assets/index.css'

const StarRating = (props) => {

    const [rateValue, setRatevalue] = useState(3.5)

    const starValue = (e) => {
        setRatevalue(e)
        props.results.rating = e
        console.log(props)
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
            <h1>3. Select The Average Rating</h1>
            <h3>Rating: {rateValue} / 5</h3>
            <Rate style={starStyle} allowHalf={true} onChange={starValue} defaultValue={3.5} />
        </div>
    )
}

export default StarRating

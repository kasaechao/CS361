import React from 'react'


const StepBox = (props) => {

    const stepBoxStyle = {
        fontStyle: 'italic',
        fontSize: 16,
        borderStyle: 'solid',
        width: '30%',
        margin: 'auto'
    }

    const textStyle = {
        margin: 'auto',
        padding: '10px',
    }
    
    return (
        <div style= {stepBoxStyle}>
            <p style={textStyle}>{props.text}</p>
        </div>
    )
}

export default StepBox
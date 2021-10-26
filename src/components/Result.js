import React from 'react'

const Result = () => {
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
        <div style={stepBoxStyle}>
            <p style={textStyle}>Results</p>
        </div>
    )
}


export default Result
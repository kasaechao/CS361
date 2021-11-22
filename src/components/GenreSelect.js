import React, { useState } from 'react'
import { MultiSelect } from 'react-multi-select-component'


const GenreSelect = (props) => {
    const [selected, setSelected] = useState([]);

    const options = [
        {label: "Horror", value: "Horror", id:"27"},
        {label: "Comedy", value: "Comedy", id:"35"},
        {label: "Romance", value: "Romance", id:"10749"},
        {label: "Action", value: "Action", id:"28"},
    ]    

    const boxStyle = {
        width:'40%',
        margin:'auto',
        marginBottom: '5%',
    }

    const selectStyle = {
        width:'40%',
        margin:'10%',
    }

    const changeGenre = (e) => {
      setSelected(e)
      props.results.genres = e.map(element => element)
      console.log(props.results)
    }

    return (
        <div style={boxStyle}>
            <h1>2. Select Genre(s)</h1>
            {/* <pre>{JSON.stringify(selected)}</pre> */}
            <MultiSelect
                options={options}
                value={selected}
                onChange={changeGenre}
                labelledBy="Select"
                style = {selectStyle}
            />
        </div>
    )
}

export default GenreSelect



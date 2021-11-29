import React, { useState } from 'react'
import axios from 'axios'

const Trailer = (props) => {
  return (
    <div>
      <iframe src={props.trailer} width="50%" height="100%"></iframe>
    </div>
  )
}

const Result = (props) => {
		
		const [serviceData, setServiceData] = useState("")
    const [showTrailerBool, setShowTrailer] = useState(false)
    const [description, setDescription] = useState("")
    const [filmImage, setfilmImage] = useState("")
    const [buttonText, setButtonText] = useState("Recommend me a Movie!")
    
		const response = () => {
			// setFakeData({result:'future microservice video extractor to return movie trailer'})
      axios.post('https://movie-service-cs361.herokuapp.com/', 
      {
        "yearRange":["2021","2021"],
        "genres":["comedy"],
        "rating":"4"
      })
        .then((res) => {
          setServiceData(res.data.trailer)
          setDescription(res.data.overview)
          setfilmImage(`https://image.tmdb.org/t/p/original/${res.data.poster_path}`)
          setButtonText('Click here again to recommend another movie!')
          setShowTrailer(true)
        })
		}

    const stepBoxStyle = {
        fontStyle: 'italic',
        fontSize: 16,
        display: 'flex',
				alignSelf: 'auto',
    }

    const mainBoxStyle = {
        fontStyle: 'italic',
        fontSize: 16,
        borderStyle: 'solid',
        width: '70%',
        margin: 'auto',
        height: '50%'
    }

		const buttonLayoutStyle = {
			paddingLeft: '30%',
			// margin: 'auto',
			display: 'flex',
			flexWrap: 'wrap',
			gap: '25px',
			justifyContent: '50%',
      marginBottom: '1%'
		}

		const buttonStyle= {

			backgroundColor: '#4CAF50', /* Green */
			color: 'white',
			padding: '15px 32px',
			textAlign: 'center',
			textDecoration: 'none',
			fontSize: '16px',
		}

    const imageStyle = { 
        width: '225px',
        height: '400px',
        margin: '1em'
    }

    return (
      // The results will only render once the button is clicked. The boolean logic starts on line 92
        <div>
          <div style={buttonLayoutStyle}>
            <button style={buttonStyle} onClick={response}>{buttonText}</button>
          </div>
            {showTrailerBool ? <div style={mainBoxStyle}>
              <div style={stepBoxStyle}>
                <div><img style={imageStyle} src={showTrailerBool ? filmImage : null} alt="" /></div>
                <div style={{padding:'5px'}}>
                    <h3>Description</h3>
                    <p>{showTrailerBool ? description : null}</p>
                    <h3>Trailer</h3>
                    {showTrailerBool  ? <Trailer trailer={serviceData}/> : null}
                </div>
              </div>
            <div style={buttonLayoutStyle}></div>
            </div>
        : null} </div>
    )
}


export default Result
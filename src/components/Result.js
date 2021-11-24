import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Trailer = (props) => {
  
  return (
    <div>
      <iframe src={props.trailer}></iframe>
    </div>
  )
}

const Result = (props) => {
		
		const [serviceData, setFakeData] = useState("")
    const [showTrailerBool, setShowTrailer] = useState(false)
    const [description, setDescription] = useState("")
    const [filmImage, setfilmImage] = useState("")
    const [buttonText, setButtonText] = useState("Recommend me a Movie!")
    
		const [fakeWiki, setFakeWiki] = useState({})
		const [fakeReview, setFakeReview] = useState({})


		const response = () => {
			// setFakeData({result:'future microservice video extractor to return movie trailer'})
      axios.post('https://movie-service-cs361.herokuapp.com/', 
      {
        "yearRange":["2000","2010"],
        "genres":["comedy"],
        "rating":"7"
      })
        .then((res) => {
          setFakeData(res.data.trailer)
          setDescription(res.data.overview)
          
          // setfilmImage(`https://image.tmdb.org/t/p/original/${res.data.backdrop_path}`)
          setfilmImage(`https://image.tmdb.org/t/p/original/${res.data.poster_path}`)
          setButtonText('Click here again to recommend another movie!')

          setShowTrailer(true)
        })
		}

		const responseWiki = () => {
			setFakeWiki({result:'future microservice to link wiki info page'})
		}

		const responseReview = () => {
			setFakeReview({result:'future service to provide a link movie review'})
		}

    const stepBoxStyle = {
        fontStyle: 'italic',
        fontSize: 16,
        // margin: 'auto',
        display: 'flex',
				alignSelf: 'auto',
				// flexWrap: 'wrap',
    }

    const mainBoxStyle = {
        fontStyle: 'italic',
        fontSize: 16,
        borderStyle: 'solid',
        width: '30%',
        margin: 'auto',
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

    const textStyle = {
        margin: 'auto',
        padding: '10px',
    }

    const imageStyle = { 
        width: '225px',
        height: '400px',
        margin: '1em'
    }

    return (
        <div>
        <div style={buttonLayoutStyle}>
          <button style={buttonStyle} onClick={response}>{buttonText}</button>
        </div>
{showTrailerBool ?         <div style={mainBoxStyle}>
					<div style={stepBoxStyle}>
						<div><img style={imageStyle} src={showTrailerBool ? filmImage : null} alt="" /></div>
						<div style={{padding:'10px'}}>
								<h3>Description</h3>
								<p>{showTrailerBool ? description : null}</p>
                <h3>Trailer</h3>
                {showTrailerBool  ? <Trailer trailer={serviceData}/> : null}

						</div>

        </div>
					<div style={buttonLayoutStyle}>
						{/* <button style={buttonStyle} onClick={responseWiki}>Reviews</button>
						<pre>{JSON.stringify(fakeWiki)}</pre>
						<button style={buttonStyle} onClick={responseReview}>Wiki (Will call text grabber microservice provided by me)</button>
						<pre>{JSON.stringify(fakeReview)}</pre> */}
					</div>
        </div>
: null}        </div>
    )
}


export default Result
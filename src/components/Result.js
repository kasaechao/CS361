import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Trailer = (props) => {
  
  return (
    <div>
      <iframe src={props.trailer} frameborder="0"></iframe>
    </div>
  )
}

const Result = () => {
		
		const [serviceData, setFakeData] = useState("")
    const [showTrailer, setShowTrailer] = useState(false)
    
		const [fakeWiki, setFakeWiki] = useState({})
		const [fakeReview, setFakeReview] = useState({})



// ***************************************************** INTEGRATION PART (B) *****************************************************

		const response = () => {
			// setFakeData({result:'future microservice video extractor to return movie trailer'})
      axios.post('http://flip1.engr.oregonstate.edu:3690/', {'movie': 'free guy'})
        .then((res) => {
          setFakeData(res.data.trailer)
          setShowTrailer(true)
        })
		}
// ***************************************************** INTEGRATION PART (B) ******************************************************

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
			justifyContent: 'center'
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
        width: '200px',
        height: '300px'
    }

    return (
        <div style={mainBoxStyle}>
					<div style={stepBoxStyle}>
						<div><img style={imageStyle} src="https://yt3.ggpht.com/ytc/AKedOLSkNBClOIZNjJayMdTxRhUh6LYEXjjjCv0tMJ3-mA=s900-c-k-c0x00ffffff-no-rj" alt="" /></div>
						<div style={{padding:'10px'}}>
								Description
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab perspiciatis odio, quia asperiores magnam minus mollitia possimus et earum dolorem eius. Nesciunt eligendi eum dolor! Quas non provident excepturi blanditiis.</p>
						</div>

        </div>
					<div style={buttonLayoutStyle}>
						<button style={buttonStyle} onClick={response}>Trailer (will call video extractor microservice provided by teammate)</button>
            {showTrailer  ? <Trailer trailer={serviceData}/> : null}
						{/* <button style={buttonStyle} onClick={responseWiki}>Reviews</button>
						<pre>{JSON.stringify(fakeWiki)}</pre>
						<button style={buttonStyle} onClick={responseReview}>Wiki (Will call text grabber microservice provided by me)</button>
						<pre>{JSON.stringify(fakeReview)}</pre> */}
					</div>
        </div>
    )
}


export default Result
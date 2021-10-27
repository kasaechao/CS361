import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';



const MySlider = (props) => {

    const createSliderWithTooltip = Slider.createSliderWithTooltip;
    Range = createSliderWithTooltip(Slider.Range);

    const updateResults = (e) => {
        console.log(e)
        console.log(props)
        props.results.yearRange = e
        
    }

    const boxStyle = {
        width:'40%',
        margin:'auto',
        marginBottom: '5%',
    }

    const sliderStyle = {
        width:'40%',
        margin:'10%',
    }

    const markings = {
        2000:2000,
        2010: 2010,
        2021: 2021
    }

    return (
        <div style={boxStyle}>
            <h1>1. Adjust Sliders to Select The Movie Date Range</h1>
            <Range min={2000} max={2021} style={sliderStyle} marks={markings} defaultValue={[2000, 2010]} onChange={updateResults}/>
        </div>
    )
}

export default MySlider
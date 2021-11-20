import './App.css';
import StepBox from './components/StepBox';
import Result from './components/Result';
import MySlider from './components/Slider';
import GenreSelect from './components/GenreSelect';
import StarRating from './components/StarRating';

function App() {

  const steps = {
    step1: 'Hint: Adjust slider to select the date range. The range will refine your recommended movie between the chosen range.',
    step2: 'Hint: Select a genre of movie by slecting from the following genres',
    step3: 'Hint: Select the average rating of the movie to be recommeneded.',
  }

  let results = {
    yearRange:[],
    genres: [],
    rating: 0,
  }

  return (
    <div>
      <StepBox text={steps.step1} />
      <MySlider results={results}/>
      <StepBox text={steps.step2} />
      <GenreSelect results={results}/>
      <StepBox text={steps.step3} />
      <StarRating results={results}/>
      <Result results={results}/>
    </div>
  );
}

export default App;

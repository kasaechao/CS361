import './App.css';
import StepBox from './components/StepBox';
import Result from './components/Result';
import MySlider from './components/Slider';
import GenreSelect from './components/GenreSelect';
import StarRating from './components/StarRating';

function App() {

  const steps = {
    step1: 'Adjust slider to select the date range. The range will refine your recommended movie between the chosen range.',
    step2: 'Select a genre of movie by slecting from the following genres',
    step3: 'Select the average rating of the movie to be recommeneded.',
  }

  return (
    <div>
      <StepBox text={steps.step1} />
      <MySlider />
      <StepBox text={steps.step2} />
      <GenreSelect />
      <StepBox text={steps.step3} />
      <StarRating />
      <Result />
    </div>
  );
}

export default App;

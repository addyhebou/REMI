import logo from './logo.svg';
import './App.css';
import GoalSet from './Components/GoalSet'

function App() {
  return (
    <div className = "App">
      <h1>2021 <strong>Goals</strong></h1>
      <div className = "GoalArray">
        <GoalSet title = "Music Tech CEO" color = "AFD8EF">
          <h2>Read Books</h2>
          <h2>YouTube/Beatstars Asset</h2>
          <h2>CS Degree</h2>
          <h2>Intern/Start-Up</h2>
          <h2>Solo Projects</h2>
        </GoalSet>
        <GoalSet title = "Critically Acclaimed Performer" color = "F59393">
          <h2>Strasberg Training</h2>
          <h2>Film Roles</h2>
          <h2>Sing a Lot</h2>
          <h2>Dance a Lot</h2>
        </GoalSet>
        <GoalSet title = "Music Creator" color = "EBBD87">
          <h2>Industry Quality Producer</h2>
          <h2>Producer Brand</h2>
          <h2>Vocal Mixing Skills</h2>
        </GoalSet>
        <GoalSet title = "Financial Freedom" color = "C0EFAF">
          <h2>Job</h2>
          <h2>Invest</h2>
          <h2>Live Below Means</h2>
          <h2>Scholarships</h2>
        </GoalSet>
      </div>
    </div>
  );
}

export default App;

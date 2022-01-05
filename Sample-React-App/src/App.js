import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

function App() {
  const courseGoals = [{id:'cg1',text:'Finish the course'}];
  const addNewGoalHandler = (newGoal) => {
    courseGoals.push(newGoal);
    console.log(courseGoals);
  };
  return (
  <div className='course-goals'>
    <h2>Course Goals</h2>
    <NewGoal onAddGoal={addNewGoalHandler} />
    <GoalList goals={courseGoals} />
  </div>
  );
}

export default App;
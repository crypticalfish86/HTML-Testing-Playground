import './App.css';
import { useState } from 'react';
function App() {

  const [transition, setTransition] = useState(null)
  function beginTransition(event)
  {
    event.preventDefault();
    setTransition('Begin_Box_Transition');
  }
  return (
    <div className="App">
      <div className='Parent_Box'>
      <button onClick={(event) => {beginTransition(event)}}>click to transition in red box</button>
        <div id={transition} className='Child_Transition_Box'>slide in from right to left</div>
      </div>
    </div>
  );
}

export default App;
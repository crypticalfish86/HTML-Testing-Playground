import './App.css';

function App() {

  let redBoxChild3Id = 'red_box_child_3A'
  

  let redBox3 = document.getElementById('red_box_child_3A');

  function expandRedBox(event)
  {
    event.preventDefault();

  }

  return (
    <div className="App">
      <div id='blue_box_parent_1' >
        <div id='red_box_child_1'> jagged turn to center</div>
      </div>
      <div id='blue_box_parent_2' >
        <div id='red_box_child_2A'>smooth turn to right</div>
        <div id='red_box_child_2B'>smooth turn 2 rem to the right</div>
      </div>
      <div id='blue_box_parent_3'>
        <div id='red_box_child_3A' onClick={(event) => {expandRedBox(event)}}>Full expand smooth turn to right</div>
      </div>
    </div>
  );
}

export default App;

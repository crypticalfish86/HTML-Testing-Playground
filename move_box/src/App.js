import './App.css';

function App() {

  function expandBox(event)
  {
    event.preventDefault();
    const box = document.getElementById('red_box_child_4'); //defining the red box child as a js variable
    box.classList.add('expand_red_box_child_4') //adding the class to the box containing the animation which then triggers the animation
  }

  return (
    <div className="App">
      <div id='blue_box_parent_1' className='blue_box_parent' >
        <div id='red_box_child_1' className='red_box_child'> jagged turn to center</div>
      </div>
      <div id='blue_box_parent_2' className='blue_box_parent' >
        <div id='red_box_child_2A' className='red_box_child'>smooth turn to right</div>
        <div id='red_box_child_2B' className='red_box_child'>smooth turn 2 rem to the right</div>
      </div>
      <div id='blue_box_parent_3' className='blue_box_parent'>
        <div id='red_box_child_3' className='red_box_child'>Full expand smooth turn to right</div>
      </div>
      <div id='blue_box_parent_4' className='blue_box_parent'>
        <div id='red_box_child_4' className='red_box_child'>
          onclick of button expand box
          <button onClick={(event) => {expandBox(event)}}>click me</button>
        </div>
      </div>
    </div>
  );
}

export default App;

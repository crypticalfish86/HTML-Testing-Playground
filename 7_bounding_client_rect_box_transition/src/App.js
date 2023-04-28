import './App.css';

function App() {
  return (
    <div className="App">
      <div className='Super_Parent_Div'>
        <div className='Parent_Div'></div>
          <div className='Child_Transition_Div'>
            Slide in from right to left
          </div>
        <div className='Parent_Div'></div>
          <div className='Child_Transition_Div'>
            Slide in from right to left
          </div>
        <div className='Parent_Div'></div>
          <div className='Child_Transition_Div'>
            Slide in from right to left
          </div>
      </div>
    </div>
  );
}

export default App;

/*
INFORMATION on getBoundingClientRect();

getBoundingClientRect() is a method that returns the size of an element and its position relative to the viewport. It returns an object with properties top, right, bottom, left, x, y, width, and height.

To use it, you can call getBoundingClientRect() on the element you want to get the size and position of, like this:

const boxRef = useRef(null);
const boxRect = boxRef.current.getBoundingClientRect();

This will give you an object with the size and position of the element, which you can use to calculate where the element should be positioned.

Here's an example of what the object might look like for an element with a width of 100px, a height of 50px, and positioned at left: 200px and top: 100px:

{
  top: 100,
  right: 300,
  bottom: 150,
  left: 200,
  width: 100,
  height: 50,
  x: 200,
  y: 100
}
*/

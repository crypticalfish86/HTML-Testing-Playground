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

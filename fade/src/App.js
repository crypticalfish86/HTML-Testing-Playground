import './App.css';
import { animated, useSpring } from "@react-spring/web"
function App() {

  const emergeDiv = useSpring
  (
    {from: {opacity: 0.05}, to: {opacity: 1}}
  )
 
  return (
    <div className="App">
      <animated.div style={emergeDiv}>
        <div id="faded_div">
          <div>fade in and out</div>
        </div>
      </animated.div>
    </div>
  );
}

export default App;

import './App.css';
import { useState, useEffect, useRef } from 'react'
function App() {

  const observation_box = useRef(null);
  const [currentObservationPercentage, setObservationPercentage] = useState(0)
  useEffect(() =>
  {

    const interval = setInterval(() => 
    /*entire thing is wrapped in setInterval, which means this will trigger the code inside after the time elapsed as a second argument (number of milliseconds) has passed,
    more information at bottom of code*/
    {
      const observer = new IntersectionObserver((entries, observer) =>
      {
        entries.forEach((entry) =>
        {
          if(entry.intersectionRatio) //details about this can be found at bottom of on_render_move_box react-app
          {
            setObservationPercentage(entry.intersectionRatio * 100)
          }else
          {
            setObservationPercentage(0)
          }
        })
      })
      observer.observe(observation_box.current);
    }, 100 /*100 milliseconds(second argument of setInterval as described above)*/)
    return () => clearInterval(interval) //this checks after 5000ms if this component is still loaded and if not will remove it from memory unless the page is loaded again
  }
  , [currentObservationPercentage]
  )

  return (
    <div className="App">
      <div className='Header_Percentage_Display_Box'>{currentObservationPercentage}%</div>
      <div className='Unobservation_Box'></div>
      <div className='Observation_Box' ref={observation_box}></div>
      <div className='Unobservation_Box'></div>
    </div>
  );
}

export default App;
/*
INFORMATION on setInterval
  setInterval is a function that executes a function repeatedly
  with a fixed time delay between each execution. 
  
  The basic syntax is: const interval = setInterval(callback, delay);
  
  the function parameter is the function to be executed,
  the delay parameter is the time interval between each execution in milliseconds.

  When you call setInterval, the function you pass in as the first parameter will be
  executed repeatedly with the specified delay between each execution. This will continue
  until you call 'clearInterval()' passing in the ID returned by setInterval, which will stop
  the execution of the function.

  we can also pass down parameters to the function being executed by setInterval by passing
  additional arguments after the 'delay' parameter
  e.g.
  const interval = setInterval(myCallback, delay, arg1, arg2, arg3)

  so long as myCallback has 3 arguments they will all be applied and passed down
  to setIntervals C.O.V.E (this is neccessary as setInterval is async)

*/
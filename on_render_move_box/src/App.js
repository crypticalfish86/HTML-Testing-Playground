import './App.css';
import { useRef, useEffect } from 'react';

function App() {

  const animated_div = useRef(null); 
  //useRef is used to refer to a div AFTER the DOM has finished loading so its reccomended in react because react uses a virtual DOM on top of the regular DOM.
  console.log(animated_div.current);

  useEffect(() =>
  {
    const observer = new IntersectionObserver((entries, observer) => 
    /*the IntersectionObserver is an object that functions surrounding if a user is looking at a div (more info below the app function)
    this object will be very useful to creating dynamic websites*/
    {
      entries.forEach((entry) => 
        {
          if(entry.isIntersecting)
          {
            entry.target.setAttribute('id', 'Animated');
            observer.unobserve(entry.target); //this allows us to remove a div from observation (useful to prevent a callback executing again and for performance)
          }
        });
    });
    
    observer.observe(animated_div.current);
  }, [])

  return (
    <div className="App">
      <div className='Top_Div'> Scroll Down v</div>
      <div className='animated_div' ref={animated_div}></div>
      <div className='Bottom_Div'> Scroll Up ^</div>
    </div>
  );
}

export default App;
/*
INFORMATION on IntersectionObserver

When you create an instance of IntersectionObserver, you pass in a callback function that will be called each time the observed element intersects with another element or the viewport. The callback function receives an array of IntersectionObserverEntry objects, with one entry for each observed target.

Each IntersectionObserverEntry object contains the following properties:

    boundingClientRect: a DOMRectReadOnly object representing the layout rectangle of the observed element.
    intersectionRatio: a value between 0 and 1 representing the ratio of the intersection between the observed element and the viewport or other target.
    intersectionRect: a DOMRectReadOnly object representing the layout rectangle of the intersection between the observed element and the viewport or other target.
    isIntersecting: a boolean value indicating whether the observed element is currently intersecting with the viewport or other target.
    rootBounds: a DOMRectReadOnly object representing the layout rectangle of the root element or viewport.
    target: the observed element itself.

Using these properties, you can determine whether an observed element is in view or not, and apply an ID or other attributes to it accordingly.
*/
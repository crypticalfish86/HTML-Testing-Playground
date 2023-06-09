import './App.css';
import bee from './assets/bee.jpg';
import { useState } from 'react';

function App() {
  
  const [expandCollapseBox, setBox] = useState(null);

  function expandBox(event) 
  {
    event.preventDefault();
    if(expandCollapseBox) //this function checks if expandbox was already applied to it and if it was cancels the expansion
    {
      setBox(null)
    }else
    {
      const text = document.getElementsByClassName('Box_Text');
      setBox('Box_Text_Expanded')  //applies a class which expands the size of the text box
    }
  }

  return (
    <div className="App">
      <div id={expandCollapseBox} className="Entire_Box">
        <div className="Box_Title">Title</div>
        <div className="Box_Body">
          <div>
            <img src={bee} className="image" alt=''/>
            <button onClick={(event) => {expandBox(event)}}>Read More</button>
          </div>
          <div className='Box_Text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia vitae mauris et pretium. Sed eget mollis augue. Donec porta, lacus non varius pellentesque, turpis velit tristique diam, eu fermentum est augue vitae est. Curabitur eleifend velit id leo pellentesque malesuada. Etiam eu sem leo. Sed id tellus eleifend, tincidunt risus rutrum, sollicitudin enim. In hac habitasse platea dictumst. Morbi id odio gravida, interdum enim id, vulputate purus. Mauris sapien dolor, maximus ut felis ut, sodales convallis sapien. Praesent aliquam urna placerat leo gravida sollicitudin. Ut iaculis orci id turpis auctor tristique.

            Donec dictum molestie ipsum eget tincidunt. Pellentesque justo erat, dapibus a tincidunt in, sollicitudin eget ex. Maecenas ac nisl nec diam commodo sollicitudin. Aliquam ornare iaculis est, vulputate consectetur augue lobortis eleifend. Duis leo odio, posuere eget dui sit amet, mollis hendrerit metus. Ut varius viverra erat eu blandit. Integer sed quam sed lectus sagittis semper et et arcu. In vel elit dignissim, dignissim ante eu, volutpat risus.

            Suspendisse tempus tellus at tortor ultrices ullamcorper. Donec eu felis ornare, lacinia tellus id, placerat justo. Vestibulum gravida magna sed tellus tincidunt ornare non sed massa. Integer commodo id leo non porttitor. Fusce venenatis risus in semper faucibus. Ut sagittis. 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

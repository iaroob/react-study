/* Change document title on button click using useEffect */

import {useEffect, useState} from 'react';

function App() {
  const [toggle, setToggle] = useState(false);

  const clickHandler = () => {
    setToggle(!toggle);
  }

  useEffect(() => {
    document.title = toggle ? "Welcome" : "Changed"
  }, []);

  return (
    <div>
      <h1>Using the useEffect hook</h1>
      <button onClick={clickHandler}>Toggle message</button>
      {toggle && <h2>The title has changed</h2>}
    </div>
  );
}

export default App;
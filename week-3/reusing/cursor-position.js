// HOC to track cursor position

import {useState, useEffect} from "react";

const withMousePosition = (WrappedComponent) => {
  return (props) => {
    const [mousePosition, setMouseposition] = useState({
      x: 0,
      y: 0,
    });

    useEffect(() => {
      const handleMousePositionChange = (e) => {
        setMouseposition({
          x: e.clientX,
          y: e.clientY,
        });
      };

      window.addEventListener("mousemove", handleMousePositionChange);

      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange);
      };
    }, []);

    return <WrappedComponent {...props} mousePosition={mousePosition} />
  };
};

const PanelMouseLogger = ({mousePosition}) => {
  if (!mousePosition) {return null;}
  return (
    <div>
      <span>x: {mousePosition.x}</span>
      <span>y: {mousePosition.y}</span>
    </div>
  );
};

const PointMouseLogger = ({mousePosition}) => {
  if (!mousePosition) {return null;}
  return (
    <div>
      <p>({mousePosition.x}, {mousePosition.y})</p>
    </div>
  );
};
const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);

function App() {
  return (
    <div>
      <PanelMouseTracker />
      <PointMouseTracker />
    </div>
  );
}

export default App;
/*
The code you place inside the useEffect hook always runs after your component mounts or, in other words, after React has updated the DOM.
*/

import {useEffect}  from 'react';

function ShoppingCart(props) {
  const total = props.count * props.price;
  useEffect(() => console.log(total), []);
  return <h1>Total: {total}</h1>
}

export default function App() {
  return (
    <ShoppingCart count={5} price={10} />
  );
}

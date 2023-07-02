import {useReducer} from 'react';

const reducer = (state, action) => {
  if (action.type === 'type1') return {money: state.money - 10};
  if (action.type === 'type2') return {money: state.money + 10};
  if (action.type === 'type3') return {money: state.money + 1000};
  return state;
}

function App() {
  const initialState = {money: 100};
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Wallet: {state.money}</h1>
      <div>
        <button onClick={() => dispatch({type: 'type1'})}>Type 1</button>
        <button onClick={() => dispatch({type: 'type2'})}>Type 2</button>
        <button onClick={() => dispatch({type: 'type3'})}>Type 3</button>
      </div>
    </div>
  );
}

export default App;
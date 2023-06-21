import React from "react";

function GoalForm(props) {
  const [formData, setFormData] = React.useState({goal: "", by: ""});

  function changeHandler(e) {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  function submitHandler(e) {
    e.preventDefault();
    props.onAdd(formData);
    setFormData({goal: "", by: ""});
  }

  return (
    <div>
      <h1>My Goals</h1>
      <form onSubmit={submitHandler}>
        <input type="text" name="goal" placeholder="Goal" value={formData.goal} onChange={changeHandler} />
        <input type="text" name="by" placeholder="By" value={formData.by} onChange={changeHandler} />
        <button>Submit Goal</button>
      </form>
    </div>
  );
}

function ListOfGoals(props) {
  return (
    <ul>
      {props.allGoals.map(g => (
        <li key={g.goal}><span>My goal is {g.goal}, by {g.by}</span></li>
      ))}
    </ul>
  );
}

export default function App() {
  const [allGoals, setAllGoals] = React.useState([]);

  function addGoal(goal) {            // function passed as props to GoalForm (onAdd)
    updateAllGoals([...allGoals, goal]);
  }

  return (
    <div>
      <GoalForm onAdd={addGoal} />
      <ListOfGoals allGoals={allGoals} />
    </div>
  );
}
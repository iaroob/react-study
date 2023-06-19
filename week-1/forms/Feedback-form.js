/* An example of controlled form - a feedback form */
function App() {
  const [score, setScore] = useState("0");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(Number(score) <= 5 || comment.length <= 10) {
      alert("Please provide a comment explaining why the experience was poor.");
      return;
    }
    alert("Form submitted!");
    setScore("0");
    setComment("");
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback form</h2>
          <div className="Field">
          <label>Score: {score}</label>
          <input
          type="range"
          min="0"
          max="10"
          value={score}
          onChange={e => {setScore(e.target.value)}}
          />
          </div>
          <div className="Field">
            <textArea value={comment} onChange={e => {setComment(e.target.value)}} />
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}
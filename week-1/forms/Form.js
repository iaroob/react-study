function App() {
  const [name, setName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setName("");
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="field">
            <label htmlFor="name">Name:</label>
            <input
            id='name'
            type='text'
            placeholder="Name"
            name='name'
            value={name}
            onChange={e => {setName(e.target.value)}}
            />
          </div>
          <button disabled={!name} type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}
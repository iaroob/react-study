/* Uncontrolled input */
const Form = () => {
  const inputRef = useRef(null);
  const handleSubmit = () => {
    const inputValue = inputRef.current.value;
  }
  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text"/>
    </form>
  );
};
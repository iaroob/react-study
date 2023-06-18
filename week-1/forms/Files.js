/* Uncontrolled input - files */

const Form = () => { 
  const fileInput = useRef(null); 
 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    const files = fileInput.current.files; 
  } 
 
  return ( 
    <form onSubmit={handleSubmit}> 
      <input 
        ref={fileInput} 
        type="file" 
      /> 
    </form> 
  ); 
 };
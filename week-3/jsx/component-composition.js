/* A small example to demonstate component composition */

const Button = ({children, backgroundColor}) => {
  return <button style={{backgroundColor}}>{children}</button>;
};

const Alert = ({children}) => {
  return (<div>
    <div className="Overlay"></div>
    <div className="Alert">{children}</div>
  </div>
  );
};

const DeleteButton = () => {
  return <Button backgroundColor="red">Delete</Button>;
};

function App() {
  return (
    <div>
      <Alert>
        <h4>Delete account</h4>
        <p>Are you sure you want to proceed?</p>
        <DeleteButton />
      </Alert>
    </div>
  );
}

export default App;
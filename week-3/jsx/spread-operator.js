const Button = ({ type, children, ...buttonProps}) => {
  const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";
  return (
    <button className={`Button ${className}`} {...buttonProps}>{children}</button>
  );
};

const LoginButton = ({ type, children, ...buttonProps}) => {
  return (
    <Button 
    type="secondary" 
    {...buttonProps} 
    onClick={() => {alert("Logging in!");
  }}>
    {children}
  </Button>
  );
};

function App() {
  return (
    <div>
      <Button type="primary" onClick={() => {alert("Singing in!");}}>Sign up</Button>
      <LoginButton />
    </div>
  );
}

export default App;
import {useState, useEffect} from "react";

const DataFetcher = ({render, url}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (url.includes("desserts")) {
      setData(["cake", "pie", "brownie"]);
    } else {
      setData(["water", "soda", "juice"]);
    }
  }, []);
  return render(data);
};

const DessertsCount = () => {
  return (
    <DataFetcher 
    url="https://myapp/desserts"
    render={(data) => <p>{data.length} desserts</p>}
    />
  );
};

const DrinksCount = () => {
  return (
    <DataFetcher 
    url="https://myapp/drinks"
    render={(data) => <h3>{data.length} desserts</h3>}
    />
  ); 
};

function App() {
  return (
    <div>
      <DessertsCount />
      <DrinksCount />
    </div>
  );
}

export default App;
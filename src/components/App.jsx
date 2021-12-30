import React from "react";
import axios from "axios";
// axios@0.21.1
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    getAdvice();
  }, []);

  const getAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        const { advice } = res.data.slip;
        setData(advice);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="app">
        <div className="card">
          <h1 className="heading">{data}</h1>
          <button className="button" onClick={getAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

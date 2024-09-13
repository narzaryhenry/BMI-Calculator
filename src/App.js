import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (event) => {
    event.preventDefault();

    if (
      weight === undefined ||
      height === undefined ||
      weight === "0" ||
      height === "0"
    ) {
      alert("Please enter valid weight and height");
    } else {
      let bmi = weight / (height / 100) ** 2;
      setBmi(bmi.toFixed(1));

      if (bmi < 18.5) {
        setMessage("You are underweight");
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage("You are healthy");
      } else {
        setMessage("You are overweight");
      }
    }
  };

  let reset = () => {
    window.location.reload();
  };
  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight</label>
            <input
              placeholder="Enter your weight in kgs"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            ></input>
          </div>

          <div>
            <label>Height</label>
            <input
              placeholder="Enter your height in cms"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            ></input>
          </div>

          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" type="submit" onClick={reset}>
              Reset
            </button>
          </div>
        </form>

        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default App;

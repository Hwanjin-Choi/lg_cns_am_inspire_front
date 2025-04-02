import { useState } from "react";
import "./App.css";
const MinutesToHours = () => {
  const [min, setMin] = useState("");
  const [hours, setHours] = useState("");
  const [mode, setMode] = useState("min");

  const handleMinChange = (e) => {
    setMin(e.target.value);
    setHours((e.target.value / 60).toFixed(2));
  };
  const handleHourChange = (e) => {
    setMin(e.target.value * 60);
    setHours(e.target.value);
  };
  const handleFlip = () => {
    mode === "min" ? setMode("hours") : setMode("min");
    mode === "min" && setHours(min / 60);
    mode === "hours" && setMin(hours * 60);
  };
  const handleReset = () => {
    setHours("");
    setMin("");
  };
  return (
    <div>
      <h3>Minutes To Hours</h3>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input
          type="number"
          id="minutes"
          onChange={(e) => {
            handleMinChange(e);
          }}
          value={min}
          placeholder="Minutes"
          disabled={mode !== "min"}
        />
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          type="number"
          id="hours"
          onChange={(e) => {
            handleHourChange(e);
          }}
          disabled={mode !== "hours"}
          value={hours}
          placeholder="hours"
        />
      </div>
      <button
        onClick={() => {
          handleReset();
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          handleFlip();
        }}
      >
        Flip
      </button>
    </div>
  );
};
function App() {
  return (
    <div className="App">
      <MinutesToHours />
    </div>
  );
}
export default App;

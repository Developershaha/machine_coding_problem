import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [listOfChips, setListOfChips] = useState([]);

  // function for add chips
  const addChips = (event) => {
    if (event?.key === "Enter") {
      setListOfChips((prev) => [...prev, event.target?.value]);
      setInput("");
    }
  };

  const removeItem = (index) => {
    setListOfChips((prev) => prev?.filter((item) => item != index));
  };
  return (
    <>
      <h1>Chips problem</h1>
      <div>
        <input
          type="text"
          className="input"
          placeholder="Enter value"
          value={input}
          onChange={(e) => {
            setInput(e?.target?.value);
          }}
          onKeyDown={(e) => addChips(e)}
        />
        <div className="flex">
          {listOfChips.map((item) => (
            <div className="chip" key={item}>
              <span>{item}</span>
              <button onClick={() => removeItem(item)}>x</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

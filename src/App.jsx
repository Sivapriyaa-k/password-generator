import { useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <div className="w-full max-w-md mx-auto shadow-md-rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-3xl font-bold py- text-center text-white">
        Password Generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden">
        <input
          type="text"
          name="password"
          id="password"
          value={password}
          placeholder="Password"
          className="bg-white outline-none w-full py-1 px-3 text-gray-700"
        />
        <button className="bg-blue-700 text-white px-3 py-0.5 shrink-0 outline-none text-center cursor-pointer">
          
        </button>
      </div>
    </div>
  );
}

export default App;

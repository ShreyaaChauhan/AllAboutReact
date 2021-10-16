import React, { useState } from "react";
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";

const items = [
  {
    title: "What is React?",
    content: "React is front end javascript framework",
  },
  {
    title: "Why se React?",
    content: "React is favorite JS Library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];
const options = [
  {
    label: "The Color red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "Green",
  },
  {
    label: "A shade of blue",
    value: "Blue",
  },
];
const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true)
  return (
    <div>
        <button onClick={()=> setShowDropdown(!showDropdown)} > Toggle Dropdown</button>
      {showDropdown ? <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />: null}
    </div>
  );
};

export default App;

import React, { useState } from "react";
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";
import Translate from "./Components/Translate";
import Route from "./Components/Route";
import Header from "./Components/Header"

const items = [
  {
    title: "What is React?",
    content: "React is front end javascript framework",
  },
  {
    title: "Why se React?",
    content: "React JS Library among engineers",
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
  //   const [showDropdown, setShowDropdown] = useState(true)
  return (
    <div>
        <Header/>
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a Color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      {/* <button onClick={()=> setShowDropdown(!showDropdown)} > Toggle Dropdown</button>
      {showDropdown ? <Dropdown
        label="SElect a Color"
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />: null} */}
    </div>
  );
};

export default App;

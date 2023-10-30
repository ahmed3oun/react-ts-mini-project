//import { useState } from "react";

import "./App.css";
import ConditionalComponent from "./components/ConditionalComponent";
import Counter from "./components/Counter";
import Forms from "./components/Forms";
import ListItems from "./components/ListItems";
import Profile from "./components/Profile";
//import Profile from "./components/Profile";

function App() {
  //const [count, setCount] = useState(0)
  /* <Profile first_name="Ahmed" last_name="OUN">
      Ce profile est un personne
    </Profile> */
  return (
    <div>
      <Forms></Forms>
      ***********
      <Profile first_name={"Ahmed"} last_name="OUN"/>
      ***********
      <Counter />
      ***********
      <ConditionalComponent></ConditionalComponent>
      ***********
      <ListItems></ListItems>
    </div>
  );
}

export default App;

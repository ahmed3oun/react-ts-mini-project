//import { useState } from "react";

import { useEffect, useState } from "react";
import "./App.css";
import TodoItems from "./components/TodoItems";
import Posts from "./components/Posts";
/* import ConditionalComponent from "./components/ConditionalComponent";
import Counter from "./components/Counter";
import Forms from "./components/Forms";
import ListItems from "./components/ListItems";
import Profile from "./components/Profile"; */
//import Profile from "./components/Profile";

function App() {
  const [items, setItems] = useState([] as { id: number; title: string }[]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        let _items: any = items;
        _items = [...data];
        setItems(_items);
      });
  }, []);

  const handleDelete = (item_id: number) => {
    const _items = items;
    const filteredItems = _items.filter((i) => i.id !== item_id);
    setItems(filteredItems);
  };

  return (
    <div>
      <Posts/>
      <button
        onClick={() =>
          setItems([...items, { id: 0, title: "lorem ipsum.!" }])
        }
      >
        Load more items
      </button>
      <TodoItems items={items} delete={handleDelete} />


      {/* <Forms></Forms>
      ***********
      <Profile first_name={"Ahmed"} last_name="OUN"/>
      ***********
      <Counter />
      ***********
      <ConditionalComponent></ConditionalComponent>
      ***********
      <ListItems></ListItems> */}
    </div>
  );
}

export default App;

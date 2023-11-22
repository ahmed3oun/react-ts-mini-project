import { createContext, useState } from "react";

// import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
// import TodoItems from "./components/TodoItems";
// import Posts from "./components/Posts";
/* import ConditionalComponent from "./components/ConditionalComponent";
import Counter from "./components/Counter";
import Forms from "./components/Forms";
import ListItems from "./components/ListItems";
import Profile from "./components/Profile"; */
//import Profile from "./components/Profile";

const ThemeContext = createContext<string | null>(null);

function App() {
  //const [items, setItems] = useState([] as { id: number; title: string }[]);
  const [theme, setTheme] = useState<string | null>("light");
  /* useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        let _items: any = items;
        _items = [...data];
        setItems(_items);
      });
  }, []); */

  /* const handleDelete = (item_id: number) => {
    const _items = items;
    const filteredItems = _items.filter((i) => i.id !== item_id);
    setItems(filteredItems);
  }; */

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`panel-${theme}`}>
        {/* <Posts/>
      <button
        onClick={() =>
          setItems([...items, { id: 0, title: "lorem ipsum.!" }])
        }
      >
        Load more items
      </button>
      <TodoItems items={items} delete={handleDelete} /> */}
        <label htmlFor="theme">Use dark mode</label>
        <input
          type="checkbox"
          name="theme"
          id="theme"
          checked={theme === "dark"}
          onChange={($event) => {
            setTheme($event.target.checked ? "dark" : "light");
          }}
        />
        <Counter />
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
    </ThemeContext.Provider>
  );
}

export default App;

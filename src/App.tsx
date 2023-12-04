import { createContext, useState } from "react";

// import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import {
  BrowserRouter,
  Routes,
  Route,
  LazyRouteFunction,
} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Test from "./pages/test";

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
      <nav>
        <ul className="nav-list">
          <li>
            <a rel="stylesheet" href="/">
              Home
            </a>
          </li>
          <li>
            <a rel="stylesheet" href="/about">
              About
            </a>
          </li>
          <li>
            <a rel="stylesheet" href="/test">
              Test
            </a>
          </li>
          <li>
            <a rel="stylesheet" href="/counter">
              Counter
            </a>
          </li>
        </ul>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home title="Home"></Home>} />
          {/* element={<About />} */}
          <Route
            path="about"
            lazy={(): Promise<any> => import("./pages/about")}
          >
            <Route index element={<About />} />
            <Route path=":number" element={<About />} />
          </Route>
          <Route path="counter" element={<Counter />} />
          <Route path="test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;

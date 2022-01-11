import List from "./Components/List";

const items = ["item1", "item2", "item3"];

const App = () => {
  return (
    <div>
      <h1>Hello React!</h1>
      <List itemsArray={items}/>
    </div>
  );
}

export default App;
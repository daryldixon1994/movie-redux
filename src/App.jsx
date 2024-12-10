import "./App.css";
import Counter from "./components/Counter";
import InceaseCounter from "./components/InceaseCounter";
// import { MyContext } from "./utils/MyContext";

function App() {
  return (
    <div>
      <h1>Workshop Redux</h1>
      <Counter />
      <InceaseCounter />
    </div>
  );
}

export default App;

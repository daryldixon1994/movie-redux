import { useSelector } from "react-redux";

// import { useSelector } from "react-redux";
function Counter() {
  // const { counter } = useSelector((store) => store.counterReducer);
  const { name } = useSelector((store) => store.mySliceReducer);
  console.log(name);
  return (
    <div>
      <h1> {name} </h1>
      {/* <h1>{counter}</h1> */}
    </div>
  );
}

export default Counter;

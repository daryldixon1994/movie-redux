import { useState } from "react";
import { useDispatch } from "react-redux";
import { increase } from "../redux/actions";
import { changeName } from "../toolkit/mySlice";
function InceaseCounter() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState();
  let x = 10;
  const handleClick = () => {
    dispatch(increase(+inputValue, x));
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleClick2 = () => {
    dispatch(changeName());
  };
  return (
    <div>
      {/* <input onChange={(e) => handleChange(e)} type="number" />
      <button onClick={handleClick}>Increase</button> */}
      <button onClick={handleClick2}>Change Name</button>
    </div>
  );
}

export default InceaseCounter;

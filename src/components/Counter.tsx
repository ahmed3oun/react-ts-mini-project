import { AppDispatch, RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
//import { incrementAsync } from '../store/CounterSlice';
import {
  decrement,
  decrementBy,
  increment,
  incrementBy,
  incrementAsync,
  decrementAsync,
} from "../store/CounterSlice";

function Counter() {
  const counter: number = useSelector(
    (state: RootState) => state.counter.value
  );
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h1>Counter</h1>
      <h2> {counter} </h2>
      <button onClick={() => dispatch(decrement())}>Decrement -</button>
      <button onClick={() => dispatch(increment())}>Increment +</button>
      <button onClick={() => dispatch(decrementBy(10))}>
        Decrement - (10)
      </button>
      <button onClick={() => dispatch(decrementAsync(20))}>
        DecrementAsync - (20)
      </button>
      <button onClick={() => dispatch(incrementBy(10))}>
        Increment + (10)
      </button>
      <button onClick={() => dispatch(incrementAsync(20))}>
        IncrementAsync + (20)
      </button>
    </div>
  );
}

export default Counter;

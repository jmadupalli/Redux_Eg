import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/counter';


function App() {
  const { count } = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <p>{count}</p>
      <button type='button' onClick={() => dispatch(increment())}>Increment</button>
      <button type='button' onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  )
}

export default App

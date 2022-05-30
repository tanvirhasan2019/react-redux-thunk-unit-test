
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {increaseCounter, decreaseCounter} from './redux/actions/counter.actions'
import UserList from './components/UserList';
import FetchData from "./components/ReduxFetchData/FetchData"
function App() {
  const dispatch = useDispatch()
  const {count} = useSelector(state=>state.count)
  return (
    <div className="App">
      <>
      <button onClick={()=> dispatch(increaseCounter())}>+</button>
       <h2>{count}</h2> 
      <button onClick={()=> dispatch(decreaseCounter())}>-</button>
      </>
      <UserList />
      <FetchData />
    </div>
  );
}

export default App;

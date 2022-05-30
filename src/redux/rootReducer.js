import { combineReducers } from 'redux'
import counterReducer from "./reducers/counter.reducer"

const rootReducer = combineReducers({
    count : counterReducer
});

export default rootReducer
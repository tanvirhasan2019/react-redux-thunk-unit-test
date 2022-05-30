import { INCREMENT, DECREMENT, FETCH_START, FETCH_END, FETCH_SUCCESS, FETCH_FAIL } from '../action.type';
export const INITIAL_STATE = {
    count: 0,
    loading : false,
    users : [],
    error : ""
};
const counterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INCREMENT:
           return {
             ...state, count: state.count + 1,
           };
        case DECREMENT:
           return {
              ...state, count: state.count - 1,
           };
        case FETCH_FAIL:
           return {
              ...state, error: action.payload.error, loading : false
           };
        case FETCH_START:
           return {
              ...state, loading: true,
           };
        case FETCH_SUCCESS:
           return {
              ...state, users: action.payload.data, loading : false
           };
        case FETCH_END:
           return {
              ...state, loading: false,
           };
         default: return state;
    }
};

export default counterReducer;
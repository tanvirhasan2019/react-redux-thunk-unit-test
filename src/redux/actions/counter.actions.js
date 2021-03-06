import { INCREMENT, DECREMENT, FETCH_SUCCESS, FETCH_START, FETCH_END, FETCH_FAIL } from '../action.type';
import axios from 'axios'
import { FETCH_USERS } from '../../helper/contansts';
export const increaseCounter = () => {
    return {
        type: INCREMENT,
    }
}
export const decreaseCounter = () => {
    return {
        type: DECREMENT,
    }
}

export const fetchStart = () => {
    return {
        type: FETCH_START,
    }
}

export const fetchSuccess = data => ({
    type: FETCH_SUCCESS,
    payload: {
        data 
    }
})

export const fetchEnd = () => ({
    type: FETCH_END,
})

export const fetchFail = error => ({
	type: FETCH_FAIL,
	payload: {
		error
	},
})
export const fetchUsers = () => dispatch => {
	dispatch(fetchStart())
	return axios.get(FETCH_USERS)
		.then(response => {
			return dispatch(fetchSuccess(response.data))
		})
		.catch(error => {
			return dispatch(fetchFail(error.response.data))
		})
};
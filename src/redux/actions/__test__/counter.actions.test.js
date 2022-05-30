import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { cleanup } from '@testing-library/react';
import * as actions from '../counter.actions';
import * as actionTypes from '../../action.type';

import { mswServer } from "../../../mocks/mockHttpServer"
import { fetchUsers_success, fetchUsers_fail } from '../../../mocks/handlers'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares); // This returns a function we can use to mock the store


describe('actions', () => {
	it('Increment count', () => {
		const expectedAction = {
			type: actionTypes.INCREMENT
		};
		expect(actions.increaseCounter()).toEqual(expectedAction);
        expect(actions.decreaseCounter()).not.toEqual(expectedAction);
	});

    it('decrement count', () => {
		const expectedAction = {
			type: actionTypes.DECREMENT
		};
		expect(actions.increaseCounter()).not.toEqual(expectedAction);
        expect(actions.decreaseCounter()).toEqual(expectedAction);
	});
});


describe('HTTP test', () => {

    afterEach(() => jest.restoreAllMocks())
    afterEach(() => cleanup())
    beforeAll(() => mswServer.listen());
    afterEach(() => mswServer.resetHandlers());
    afterAll(() => mswServer.close());

    it('should fetch users from backend', async () => {
        mswServer.use(fetchUsers_success)
		const expectedActions = [
			{ type: 'FETCH-START' },
			{
				type: 'FETCH-USERS', payload: {data : [{
					id: '1',
					name: 'Finish course',
					username: "Tanvir hasan"
				}]}
			}
		];
		const mockState = {};
	    const store = mockStore(mockState);

		return store.dispatch(actions.fetchUsers()).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
    })


	it('should fetch fail users from backend', async () => {
        mswServer.use(fetchUsers_fail)
		const expectedActions = [
			{ type: 'FETCH-START' },
			{
				type: 'FETCH-FAIL', payload: {error : "something went wrong !!!"}
			}
		];
		const mockState = {};
	    const store = mockStore(mockState);
		return store.dispatch(actions.fetchUsers()).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
    })
})

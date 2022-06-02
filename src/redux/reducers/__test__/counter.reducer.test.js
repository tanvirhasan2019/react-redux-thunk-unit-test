import * as actions from '../../actions/counter.actions';
import counterReducer from '../counter.reducer';
import { cleanup } from "@testing-library/react";
import { mswServer } from "../../../mocks/mockHttpServer"
import { ERROR_TEXT } from "../../../helper/contansts"
describe('reducer', () => {
    const mockTodo = {
        count: 0,
        loading: false,
        users: [],
        error: ""
    };

    it('counter reducer default', () => {
        expect(counterReducer(undefined, {})).toEqual(mockTodo);
    });

    it('counter reducer increment', () => {
        const INITIAL_STATE = {
            count: 1
        }
        const expectedResult = {
            count: 2
        }
        expect(counterReducer(INITIAL_STATE, actions.increaseCounter())).toEqual(expectedResult);
    });

    it('counter reducer decrement', () => {
        const INITIAL_STATE = {
            count: 5
        }
        const expectedResult = {
            count: 4
        }
        expect(counterReducer(INITIAL_STATE, actions.decreaseCounter())).toEqual(expectedResult);
    });

});



describe('reducer HTTP test', () => {

    afterEach(() => jest.restoreAllMocks())
    afterEach(() => cleanup())
    beforeAll(() => mswServer.listen());
    afterEach(() => mswServer.resetHandlers());
    afterAll(() => mswServer.close());

    it('handle FETCH_START', () => {
        const INITIAL_STATE = {
            count: 0,
            loading: false,
            users: [],
            error: ""
        };
        const expectedResult = {
            count: 0,
            loading: true,
            users: [],
            error: ""
        };
        expect(counterReducer(INITIAL_STATE, actions.fetchStart())).toEqual(expectedResult);
    });

    it('handle FETCH_FAIL', () => {
        const mockState = { loading: false, error: "" };
        const expectedResult = { loading: false, error: ERROR_TEXT };
        expect(counterReducer(mockState, actions.fetchFail(ERROR_TEXT))).toEqual(expectedResult);
    });

})

import { rest } from 'msw'
import { FETCH_USERS, ERROR_TEXT, TEST_USERS } from '../helper/contansts'

export const fetchUsers_success = rest.get(FETCH_USERS, async (req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.json(TEST_USERS)
    )
})
export const fetchUsers_fail = rest.get(FETCH_USERS, async (req, res, ctx) => {
    return res(
        ctx.status(400),
        ctx.json(ERROR_TEXT)
    )
})
export const handlers = [fetchUsers_success, fetchUsers_fail]
import { rest } from 'msw'

const url = 'https://jsonplaceholder.typicode.com/users'

export const fetchUsers_success = rest.get(url, async (req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.json([
            {
                id: '1',
                name: 'Finish course',
                username : "Tanvir hasan"
            }
        ])
    )
})

export const fetchUsers_fail = rest.get(url, async (req, res, ctx) => {
    return res(
        ctx.status(400),
        ctx.json("something went wrong !!!")
    )
})

export const handlers = [fetchUsers_success, fetchUsers_fail]
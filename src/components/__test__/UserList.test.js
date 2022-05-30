import React from "react"
import { screen, render } from "@testing-library/react"
import { act } from "react-dom/test-utils";
import { waitFor } from "@testing-library/react";
import { cleanup } from "@testing-library/react";
import { mswServer } from "../../mocks/mockHttpServer"
import { fetchUsers_success, fetchUsers_fail } from '../../mocks/handlers'
import UserList from "../UserList"

describe('user list component api test', () => {

    afterEach(() => cleanup())

    it("user list loading", async () => {
        await act(async () => {
            render(<UserList />)
        })
        const containerLoading = screen.queryByText("loading");
        expect(containerLoading).toBeInTheDocument()
        waitFor(() => expect(containerLoading).not.toBeInTheDocument())
    })
})

describe('HTTP test', () => {

    afterEach(() => jest.restoreAllMocks())
    afterEach(() => cleanup())
    beforeAll(() => mswServer.listen());
    afterEach(() => mswServer.resetHandlers());
    afterAll(() => mswServer.close());

    it('should fetch users from backend', async () => {
        mswServer.use(fetchUsers_success)
        await act(async () => {
            render(<UserList />);
        })
        const div = await screen.findByText("User Name- Tanvir hasan");
        expect(div).toBeVisible();
    })

    test("should error message from userList", async () => {
        mswServer.use(fetchUsers_fail);
        await act(async () => {
            render(<UserList />);
        })
        const div = await screen.findByText("something went wrong !!!");
        expect(div).toBeVisible();
    });
})
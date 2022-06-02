import React from "react"
import { screen, render } from "@testing-library/react"
import { cleanup } from "@testing-library/react";
import { mswServer } from "../../mocks/mockHttpServer"
import { fetchUsers_success, fetchUsers_fail } from '../../mocks/handlers'
import {ERROR_TEXT} from "../../helper/contansts"
import UserList from "../UserList"

describe('user list component api test', () => {

    afterEach(() => cleanup())

    it("user list loading", async () => {
       
        render(<UserList />)

        const containerLoading = screen.queryByText("loading");
        expect(containerLoading).toBeInTheDocument()
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
        
        render(<UserList />);
        
        const div = await screen.findByText("User Name- Tanvir hasan");
        expect(div).toBeVisible();
    })

    test("should error message from userList", async () => {
        mswServer.use(fetchUsers_fail);
       
        render(<UserList />);
       
        const div = await screen.findByText(ERROR_TEXT);
        expect(div).toBeVisible();
    });
})
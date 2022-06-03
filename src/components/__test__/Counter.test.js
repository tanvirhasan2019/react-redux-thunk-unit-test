import React from "react";
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import { screen } from "@testing-library/react";
import { cleanup } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Counter from "../Counter"
import configureStore from "../../redux/store";

const store = configureStore();

describe('counter pages unit-test', () => {
    afterEach(() => cleanup())
    it("default count", async () => {

        render(<Provider store={store}>
            <Counter />
        </Provider>)

        expect(await screen.findByText("Count : 0")).toBeInTheDocument();

    })

    it('increment click event', async () => {

        render(<Provider store={store}>
            <Counter />
        </Provider>)

        const div = screen.queryByText("+");
        userEvent.click(div);
        userEvent.click(div);
        expect(await screen.findByText("Count : 2")).toBeInTheDocument();
    });

    it('decrement click event', async () => {

        render(<Provider store={store}>
            <Counter />
        </Provider>)

        const div = screen.queryByText("-");
        userEvent.click(div);
        userEvent.click(div);
        expect(await screen.findByText("Count : 0")).toBeInTheDocument();
    });

})
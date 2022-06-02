import React from "react";
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import { screen } from "@testing-library/react";
import { cleanup } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import App from "./App"
import configureStore from "./redux/store";

const store = configureStore();

describe('counter pages unit-test', () => {
    afterEach(() => cleanup())
    it("default count", async () => {

        render(<Provider store={store}>
            <App />
        </Provider>)

        const div = screen.queryByText("0");
        expect(div.textContent).toBe("0");
    })

    it('increment click event', async () => {

        render(<Provider store={store}>
            <App />
        </Provider>)

        const div = screen.queryByText("+");
        userEvent.click(div);
        userEvent.click(div);
        expect(await screen.findByText("2")).toBeInTheDocument();
    });

    it('decrement click event', async () => {

        render(<Provider store={store}>
            <App />
        </Provider>)

        const div = screen.queryByText("-");
        userEvent.click(div);
        userEvent.click(div);
        expect(await screen.findByText("0")).toBeInTheDocument();
    });

})
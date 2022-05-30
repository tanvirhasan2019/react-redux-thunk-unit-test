import { render } from "@testing-library/react";
import React from "react";
import { Provider } from 'react-redux';
import { screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { unmountComponentAtNode } from "react-dom";
import userEvent from '@testing-library/user-event'
import App from "./App"
import configureStore from "./redux/store";
const store = configureStore();

describe('counter pages test', () => {
    let container = null;
    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });


    it("document exists", async () => {
        await act(() => {
            render(<Provider store={store}>
                <App />
            </Provider>)
        })
        const div = screen.queryByText("0");
        expect(div.textContent).toBe("0");
    })

    it('increment click event', async () => {
        await act(() => {
            render(<Provider store={store}>
                <App />
            </Provider>)
        })
        const div = screen.queryByText("+");
        userEvent.click(div);
        userEvent.click(div);
        expect(screen.queryByText("2")).toBeInTheDocument();
    });

    it('decrement click event', async () => {
        await act(() => {
            render(<Provider store={store}>
                <App />
            </Provider>)
        })
        const div = screen.queryByText("-");
        userEvent.click(div);
        userEvent.click(div);
        expect(screen.queryByText("0")).toBeInTheDocument();
    });

})
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Hello from "../components/Hello";

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

describe("Hello component", () => {
  it("renders with o without a name", () => {
    act(() => {
      render(<Hello />, container);
    });
    expect(container.textContent).toBe("Hey, stranger");


    act(() => {
      render(<Hello name="Jenny" />, container);
    });
    expect(container.textContent).toBe("Hello, Jenny!");

    act(() => {
      render(<Hello name="Margaret" />, container);
    });
    expect(container.textContent).toBe("Hello, Margaret!");

    act(() => {
      render(<Hello name="Mark" />, container);
    });
    expect(container.textContent).toBe("Hello, Mark!");

    act(() => {
      render(<Hello name="Jenny" />, container);
    });
    expect(container.textContent).toBe("Hello, Jenny!");
  });
});
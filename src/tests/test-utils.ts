import { afterEach } from "vitest";
import { cleanup, render } from "@testing-library/react";

global.ResizeObserver = require("resize-observer-polyfill");

afterEach(() => {
  cleanup()
})

function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, {
    wrapper: ({ children }) => children,
    ...options,
  })
}

export * from "@testing-library/react"
export { default as userEvent } from "@testing-library/user-event"
export { customRender as render }
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter app", () => {
    test("aaa", () => {
        render(<Counter />)
        const heading = screen.getByRole('heading', {
            level: 1
        })
        const incButton = screen.getByRole('button', {
            name: "+"
        })
        const decButton = screen.getByRole('button', {
            name: "-"
        })
        expect(heading).toBeInTheDocument()
        expect(incButton).toBeInTheDocument()
        expect(decButton).toBeInTheDocument()

        const initialValueOfCount = screen.getByRole('heading', {
            level: 1
        })
        expect(initialValueOfCount).toHaveTextContent("0")
    })

    test("count will increase after the click on increment button", async () => {
        render(<Counter />)
        userEvent.setup()
        const incButton = screen.getByRole("button", {
            name: "+"
        })
        await userEvent.click(incButton)
        const count = screen.getByRole("heading", {
            level: 1
        })
        expect(count).toHaveTextContent("1")
    })

    test("count will decrease after the click on decrement button", async () => {
        render(<Counter />)
        userEvent.setup()
        const decButton = screen.getByRole("button", {
            name: "-"
        })
        await userEvent.click(decButton)
        const count = screen.getByRole("heading", {
            level: 1
        })
        expect(count).toHaveTextContent("-1")
    })

    

})
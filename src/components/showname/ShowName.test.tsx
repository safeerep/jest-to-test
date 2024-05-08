import { render, screen } from "@testing-library/react"
import ShowName from "./ShowName"

test("Greeting in showname component", () => {
    render(<ShowName />)
    const name = screen.getByText(/good morning/i)
    expect(name).toBeInTheDocument()
})

test("User name in showname component", () => {
    render(<ShowName name="safeer" />)
    const userNameWithGreeting: HTMLElement = screen.getByText("Good morning safeer")
    expect(userNameWithGreeting).toBeInTheDocument()
})


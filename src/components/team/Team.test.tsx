import { render, screen } from "@testing-library/react"
import Team from "./Team"

// we can use the describe method to have grouping of tests;
describe("team", () => {
    test("name", () => {
        render(<Team name={"Real Madrid"}/>)
        const teamName = screen.getByText(/real Madrid/i)
        expect(teamName).toBeInTheDocument()
    })
    
    test("captain", () => {
        render(<Team name={"Real Madrid"} captain={"safeer"}/>)
        const statement = screen.getByText(/safeer is the captain of the team real madrid/i)
        expect(statement).toBeInTheDocument()
    })
})

describe("players", () => {
    test("player", () => {
        render(<Team captain={"safeer"}/>)
        const playerName = screen.getByText('safeer is an indian')
        expect(playerName).toBeInTheDocument()
    })
})
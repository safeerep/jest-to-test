import { render, screen } from "@testing-library/react";
import { Skills } from "./Skills";

describe("Skills component", () => {
    test("list", () => {
        const skills = ['coding', 'development', 'engineering', 'bug-fixing']
        render(<Skills skills={skills} />)
        const listElements = screen.getByRole('list')
        expect(listElements).toBeInTheDocument()
    })

    test("list items", () => {
        const skills = ['coding', 'development', 'engineering', 'bug-fixing']
        render(<Skills skills={skills} />)
        const listItems = screen.getAllByRole('listitem')
        expect(listItems).toHaveLength(skills.length)
    })

    test("login button", () => {
        const skills = ['coding', 'development', 'engineering', 'bug-fixing']
        render(<Skills skills={skills} />)
        const loginButton = screen.getByRole("button", {
            name: "Login"
        })
        expect(loginButton).toBeInTheDocument()
    })

    test("start learning button", () => {
        const skills = ['coding', 'development', 'engineering', 'bug-fixing']
        render(<Skills skills={skills} />)
        const startLearningButton = screen.queryByRole("button", {
            name: "Start learning"
        })
        expect(startLearningButton).not.toBeInTheDocument()
    })

    test("start learning button with query all by and length 0", () => {
        const skills = ['coding', 'development', 'engineering', 'bug-fixing']
        render(<Skills skills={skills} />)
        const startLearningButton = screen.queryAllByRole("button", {
            name: "Start learning"
        })
        expect(startLearningButton).toHaveLength(0)
    })

    test("start learning button showing after one second", async () => {
        const skills = ['coding', 'development', 'engineering', 'bug-fixing']
        render(<Skills skills={skills} />)
        const startLearningButton = await screen.findByRole("button", {
            name: "Start learning"
        }, {
            timeout: 3000
        })
        expect(startLearningButton).toBeInTheDocument()
    })
})
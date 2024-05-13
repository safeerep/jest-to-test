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
})
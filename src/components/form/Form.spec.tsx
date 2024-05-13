import { render, screen } from "@testing-library/react"
import Form from "./Form"


describe("form", () => {
    it('First heading', () => {
        render(<Form />)
        const level1Heading = screen.getByRole("heading", {
            level: 1
        })
        expect(level1Heading).toBeInTheDocument()
    })

    it('section heading', () => {
        render(<Form />)
        const level2Heading = screen.getByRole("heading", {
            level: 2
        })
        expect(level2Heading).toBeInTheDocument()
    })

    it('name', () => {
        render(<Form />);
        const inputBoxElement = screen.getByRole("textbox", {
            name: "Name"
        });
        expect(inputBoxElement).toBeInTheDocument();
    })

    it('job location', () => {
        render(<Form />)
        const jobLocationCheckBox = screen.getByRole("combobox");
        expect(jobLocationCheckBox).toBeInTheDocument();
    })

    it('button', () => {
        render(<Form />)
        const buttonElement = screen.getByRole("button");
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toBeDisabled();
    })

    it('name with label', () => {
        render(<Form />)
        const nameElement = screen.getByLabelText("Name");
        expect(nameElement).toBeInTheDocument()
    })

    it('name with placeholder', () => {
        render(<Form />)
        const nameElement = screen.getByPlaceholderText("Type Your Fullname")
        expect(nameElement).toBeInTheDocument()
    })
    
})
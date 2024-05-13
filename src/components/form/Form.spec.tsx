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

    it('name with value', () => {
        render(<Form />)
        const nameElement = screen.getByDisplayValue("safeerep")
        expect(nameElement).toBeInTheDocument()
    })

    it('note in p tag', () => {
        render(<Form />)
        const paragraphElement = screen.getByText("All fields are mandatory")
        expect(paragraphElement).toBeInTheDocument()
    })

    it('note in p tag with text match 1', () => {
        render(<Form />)
        // using regex
        const paragraphElement = screen.getByText(/all fields are/i)
        expect(paragraphElement).toBeInTheDocument()
    })

    it('note in p tag with text match 2', () => {
        render(<Form />)
        // using text with option exact false
        const paragraphElement = screen.getByText('all fields are', { exact: false})
        expect(paragraphElement).toBeInTheDocument()
    })

    it('note in p tag with text match 3', () => {
        render(<Form />)
        // using custom function;
        const paragraphElement = screen.getByText((content: string) => content === "All fields are mandatory")
        expect(paragraphElement).toBeInTheDocument()
    })

    it('X in span tag', () => {
        render(<Form />)
        const spanElement = screen.getByText("X")
        expect(spanElement).toBeInTheDocument()
    })

    it('image with alt', () => {
        render(<Form />)
        const imageElement = screen.getByAltText("safeerep smiling picture")
        expect(imageElement).toBeInTheDocument()
    })

    it('span tag with title', () => {
        render(<Form />)
        const spanElement = screen.getByTitle("close the window")
        expect(spanElement).toBeInTheDocument()
    })

    it('div with testid', () => {
        render(<Form />)
        const div = screen.getByTestId("custom-element")
        expect(div).toBeInTheDocument()
    })
    
})
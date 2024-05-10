import { render, screen } from "@testing-library/react"
import Form from "./Form"


describe("form", () => {
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
    
})
import { render, screen } from "@testing-library/react";
import { Greet } from "../components";

// we can "it" method as the alternative for test method
it("greeting component", () => {
  render(<Greet />);
  const linkElement = screen.getByText(/good morning/i);
  expect(linkElement).toBeInTheDocument();
});
import { render, screen } from "@testing-library/react";
import { Greet } from "../components";

// we can write tests in a folder named __tests__ or and the files with
// suffix .spec.tsx / .test.tsx ...
test("greeting component", () => {
  render(<Greet />);
  const linkElement = screen.getByText(/good morning/i);
  expect(linkElement).toBeInTheDocument();
});
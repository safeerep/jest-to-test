import { render, screen } from '@testing-library/react';
import App from './App';
import { Greet } from './components';

// following test functions takes three (3) arguments 
// the first argument is name of the test to identify
// second argument will be a function where we will write the expectation
// thiird argument is optional , its the timeout for specifying how long to wait before aborting the test, default is 5s
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('greeting component', () => {
  render(<Greet />);
  const linkElement = screen.getByText(/good morning/i);
  expect(linkElement).toBeInTheDocument();
});

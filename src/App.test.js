import { render, screen } from '@testing-library/react';
import Login  from './components/login.component';

jest.mock("axios");
jest.mock("react-router-dom");

test('Test Case-1[Check]',()=>{
  render(<Login/>)
  var element = screen.getByTestId("MyHeading")
  expect(element).toBeInTheDocument()

})

import { render, screen } from '@testing-library/react';
import App from './App';

{/*test('renders learn react link', () => {
  render(<App/>);
  const linkElement = screen.getByText("HELLO FROM APP");
  expect(linkElement).;
});*/}

test("check for name in placeholders", ()=>{

render(<App/>);

const inputName= screen.getAllByPlaceholderText("name");

expect(inputName[0]).toBeInTheDocument();
})

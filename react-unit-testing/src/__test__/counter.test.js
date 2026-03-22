import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../components/counter";

// test suite
describe("Counter", () => {
  // test that the count increases
  test("count increases", () => {
    // render the Component
    render(<Counter />);
    // select the Element you want to interact with
    const incrementButton = screen.getByTestId("increment");
    const countValue = screen.getByTestId("count");

    //   interact with the Element
    fireEvent.click(incrementButton);
    //   assert  the expected result
    expect(countValue).toHaveTextContent("1");
  });
  // test that the count decreases
  // you can use "test" or "it"
  it("count increases", () => {
    // render the Component
    render(<Counter />);
    // select the Element you want to interact with
    const incrementButton = screen.getByTestId("decrement");
    const countValue = screen.getByTestId("count");

    //   interact with the Element
    fireEvent.click(incrementButton);
    //   assert  the expected result
    expect(countValue).toHaveTextContent("-1");
  });
});

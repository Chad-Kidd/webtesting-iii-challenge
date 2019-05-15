// Test away!
import React from "react"; 
import  {render} from "react-testing-library";
import "jest-dom/extend-expect";
import Display from "./Display";

describe("display 'open' display", () => {
  it("is red-led while locked", () => {
    const component = render(<Display closed={true} locked={true} />);
    const display = component.getByText("Locked");

     expect(display).toHaveClass("red-led");
});
it("display 'Closed' display", () => {
  const component = render(<Display closed={true} locked={false} />);
  const display = component.getByText("Unlocked");

   expect(display).toHaveClass("green-led");
});
it("display 'Locked' while locked", () => {
  const component = render(<Display closed={true} locked={true} />);
  component.queryAllByText("Locked");
});

describe("the display light test", () => {

//   it("display red-light while closed", () => {
//     const component = render(<Display closed={true} locked={false} />);
//     const display = component.queryAllByText("Closed");

//      expect(display).toHaveClass("red-led");
// });
it("display green-light while closed", () => {
  const component = render(<Display closed={false} locked={false} />);
  const display = component.getByText("Open");

   expect(display).toHaveClass("green-led");
});
  });

});
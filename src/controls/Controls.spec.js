// Test away!
import React from "react"; 
import  {render} from "react-testing-library";
import "jest-dom/extend-expect";
import Controls from "./Controls";


 describe("the lock button", () => {
    it("is disabled while gate is open", () => {
        const component = render(<Controls closed={false} locked={false} />);
        const button = component.getByText("Lock Gate");

         expect(button).toBeDisabled();
    });

    it("display 'unlocked' while gate is unlocked", () => {
        const component = render(<Controls closed={true} locked={false} />);
            //originally used getByText was suggested
            //by terminal msg to us getAllByText
         component.getAllByText("Lock Gate");
    });
    it("display 'locked'", () => {
        const component = render(<Controls closed={true} locked={true} />);

         component.getAllByText("Unlock Gate");
    });
});

 describe("the unlocked button", () => {

    // it("is enabled while gate is unlocked", () => {
    //     const component = render(<Controls closed={true} locked={false} />);
    //     const button = component.getAllByText("Open Gate");

    //      expect(button).toBeDisabled();
    // });
    it("display 'open' while gate is closed", () => {
        const component = render(<Controls closed={true} locked={false} />);

         component.getAllByText("Open Gate");
    });
    it("display 'close' while gate is open", () => {
        const component = render(<Controls closed={false} locked={false} />);

         component.getAllByText("Close Gate");
    });
}) 
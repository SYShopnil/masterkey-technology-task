import { render, screen } from "@testing-library/react";
import { EDataTestId } from "@src/types/common";
import CLayout from "../../c-partition-layout";

describe("When Partition Layout Component Rendered", () => {
  it("Expect render successfully", () => {
    render(<CLayout />);
    const myElement = screen.getByRole(EDataTestId.CLayout);
    expect(myElement).toMatchSnapshot();
  });
});

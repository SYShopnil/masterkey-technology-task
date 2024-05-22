import { render, screen } from "@testing-library/react";
import { EDataTestId } from "@src/types/common";
import { CAlphabetApp } from "..";

describe("When Alphabet Component Rendered", () => {
  it("Expect render successfully", () => {
    render(<CAlphabetApp />);
    const myElement = screen.getByRole(EDataTestId.CAlphabetApp);
    expect(myElement).toMatchSnapshot();
  });
});

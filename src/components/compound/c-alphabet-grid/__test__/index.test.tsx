import { render, screen } from "@testing-library/react";
import { EDataTestId } from "@src/types/common";
import { CAlphabetGrid } from "..";

describe("When Alphabet Grid Layout Component Rendered", () => {
  it("Expect render successfully", () => {
    render(<CAlphabetGrid onTileClick={() => {}} />);
    const myElement = screen.getByRole(EDataTestId.CAlphabetGrid);
    expect(myElement).toMatchSnapshot();
  });
});

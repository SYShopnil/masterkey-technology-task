import { render, screen } from "@testing-library/react";
import { EDataTestId } from "@src/types/common";
import CLayout from "../../c-partition-layout";
import { CPartition, PartitionProps } from "..";

describe("When Partition Component Rendered", () => {
  it("Expect render successfully", () => {
    const mock_data: PartitionProps = {
      color: "FFFF",
      id: 12,
      onRemove: () => {},
      onSplit: () => {},
      style: { padding: "25px" },
    };
    render(<CPartition {...mock_data} />);
    const myElement = screen.getByRole(EDataTestId.CPartition);
    expect(myElement).toMatchSnapshot();
  });
});

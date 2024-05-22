import React from "react";
import { SIconStore } from "../_icon";
import Link from "next/link";
import { EDataTestId } from "@src/types/common";
import { IconEnums } from "@src/types/root";

export const SIconWithMessage = ({
  icon,
  message,
}: {
  icon: IconEnums;
  message: string;
}) => {
  return (
    <div
      className={`h-[60vh] flex justify-center items-center space-x-2`}
      role={EDataTestId.SIconWithMessage}
    >
      <div>
        <SIconStore iconName={icon} fill={"#7F4D4F"} />
      </div>
      <div>
        <p className={`font-bold`}>{message}</p>
      </div>
      <div className="!ml-8 ">
        <a className="text-[#7F4D4F] hover:text-black duration-[0.2s] font-bold">
          <Link href="/">Click Me</Link>
        </a>
      </div>
    </div>
  );
};

import { CAlphabetApp } from "@src/components/compound/c-alphabet-app";
import dynamic from "next/dynamic";
// import { CLayout } from "@src/components/compound/c-layout";
const DynamicLayout = dynamic(
  () => import("../components/compound/c-layout/"),
  {
    ssr: false,
  }
);

export default async function Home() {
  return (
    <section>
      <DynamicLayout />
      <CAlphabetApp />
    </section>
  );
}

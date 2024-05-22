import { CAlphabetApp } from "@src/components/compound/c-alphabet-app";
import { CLayout } from "@src/components/compound/c-layout";

export default async function Home() {
  return (
    <section>
      <CLayout />
      <CAlphabetApp />
    </section>
  );
}

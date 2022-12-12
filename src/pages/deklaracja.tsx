import type { NextPage } from "next";
import { Layout } from "@components/Layout";
import { Declaration } from "@sections/Declaration/Declaration";

const Declarations: NextPage = () => {
  return (
    <Layout title="Deklaracja">
      <Declaration />
    </Layout>
  );
};

export default Declarations;

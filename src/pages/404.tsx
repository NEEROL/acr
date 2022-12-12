import { Layout } from "@components/Layout";
import { NextPage } from "next";
import { Error as ErrorSection } from "@sections/Error/Error";

const Page: NextPage = () => {
  return (
    <Layout title="404">
      <ErrorSection />
    </Layout>
  );
};

export default Page;

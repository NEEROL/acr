import type { NextPage } from 'next';
import { Layout } from '@components/Layout';
import { Offers } from '@sections/Offers/Offers';

const Home: NextPage = () => {
  return (
    <Layout title="Usługi medyczne">
      <Offers />
    </Layout>
  );
};

export default Home;

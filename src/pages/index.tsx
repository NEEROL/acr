import type { NextPage } from 'next';
import { Layout } from '@components/Layout';
import { Intro } from '@sections/Intro/Intro';
import { WhatWeAreDoing } from '@sections/WhatWeAreDoing/WhatWeAreDoing';
import { ForUkrainianCitizens } from '@sections/ForUkrainianCitizens/ForUkrainianCitizens';
import { FAQ } from '@sections/FAQ/FAQ';
import { AboutUs } from '@sections/AboutUs/AboutUs';

const Home: NextPage = () => {
  return (
    <Layout title="Strona główna">
      <Intro />
      <WhatWeAreDoing />
      <ForUkrainianCitizens />
      <FAQ />
      <AboutUs />
    </Layout>
  );
};

export default Home;

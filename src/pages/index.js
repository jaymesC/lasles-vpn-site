import React from 'react';
import { HomeFragmentFirst } from '../components/organisms/home-fragment-first';
import { DefaultLayout } from '../layout';

const Home = () => (
  <DefaultLayout title="Home">
    <HomeFragmentFirst />
  </DefaultLayout>
);

export default Home;

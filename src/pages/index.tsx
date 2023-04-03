import { type NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import CatalogCategory from '~/components/CatalogCategory';

import { api } from '~/utils/api';

const Home: NextPage = () => {
  return (
    <>
      <main>
        <CatalogCategory />
      </main>
    </>
  );
};

export default Home;

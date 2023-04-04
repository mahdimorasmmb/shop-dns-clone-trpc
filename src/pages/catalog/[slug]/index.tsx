import Image from 'next/image';
import React from 'react';
import CategoryItem from '~/components/CategoryItem';
import { api } from '~/utils/api';

const Page = () => {
  const { data } = api.category.getAll.useQuery();
  return (
    <div className='flex mt-10'>
      {data?.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Page;

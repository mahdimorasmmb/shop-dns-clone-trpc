import Link from 'next/link';
import React, { useState } from 'react';
import { api, type RouterOutputs } from '~/utils/api';

const CatalogCategory = () => {
  const { data } = api.category.getAll.useQuery();
  const [subCatalog, setSubCatalog] = useState<number | null>();

  return (
    <div>
      <div className='relative z-40 flex gap-4  bg-white text-black'>
        <div className=''>
          {data?.map((category) => (
            <div
              onMouseEnter={() => setSubCatalog(category.id)}
              key={category.id}
              className={` cursor-pointer ${
                subCatalog === category.id ? 'text-orange-400' : ''
              }`}
            >
              {category.title}
            </div>
          ))}
        </div>
        {subCatalog && (
          <div className='flex-1'>
            {data
              ?.find((category) => category.id === subCatalog)
              ?.subCategories.map((subCategory) => (
                <Link
                  href={`/${subCategory.slug}`}
                  className='hover:text-orange-400 block'
                  key={subCategory.id}
                >
                  {subCategory.title}
                </Link>
              ))}
          </div>
        )}
      </div>
      {subCatalog && (
        <div
          className='absolute right-0 top-0  h-screen w-full bg-neutral-600 opacity-25'
          onMouseEnter={() => setSubCatalog(null)}
        />
      )}
    </div>
  );
};

export default CatalogCategory;

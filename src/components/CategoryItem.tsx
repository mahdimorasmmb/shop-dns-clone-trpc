import Image from 'next/image';
import React, { useState } from 'react';
import { RouterOutputs } from '~/utils/api';

const CategoryItem = ({
  category,
}: {
  category: RouterOutputs['category']['getAll'][number];
}) => {
  const [onHover, setOnHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      className='relative h-72 w-72 cursor-pointer rounded-md bg-white shadow '
    >
      <div
        className={` flex flex-col items-center  transition-all duration-500  ${
          onHover ? ' absolute left-[46px] pointer-events-none opacity-0' : ''
        }  `}
      >
        {category.image && (
          <Image
            className=' '
            src={category.image}
            alt={category.title}
            width={196}
            height={196}
          />
        )}
        <p> {category.title}</p>
      </div>

      <div
        className={`p-3 transition-all duration-500  ${
          !onHover ? ' absolute top-0 opacity-0 ' : ''
        } `}
      >
        {category.title}
        <ul className=''>
          {category.subCategories.map((subCategory) => (
            <li className='text-sm hover:text-orange-400' key={subCategory.id}>
              {subCategory.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryItem;

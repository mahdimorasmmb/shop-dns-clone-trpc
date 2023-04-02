import React, { type DetailedHTMLProps, type HtmlHTMLAttributes } from 'react';
import Container from '../Container';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-neutral-700'>
      <Container className='flex  justify-between py-4 text-white'>
        <FooterColumn
          title='Company'
          links={['About', 'Company', 'News To partners', 'Jobs']}
        />

        <FooterColumn
          isTwoColumns
          title='Buyers'
          links={[
            'How to place an order',
            'Payment methods',
            'Loans',
            'Delivery',
          ]}
        />
        <FooterColumn title='Stay connected'>
          <Link href='/'>
            8-800-77-07-999 ( from 03:00 to 22:00)
            <br />
            <span className='text-sm'>Addresses of stores in. Moscow</span>
          </Link>
        </FooterColumn>
      </Container>
    </footer>
  );
};

interface IFooterColumn
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  title: string;
  links?: string[];
  isTwoColumns?: boolean;
}

const FooterColumn = ({
  title,
  links,
  children,
  isTwoColumns,
  ...otherProps
}: IFooterColumn) => {
  return (
    <div {...otherProps}>
      <div className='border-b-2 border-b-neutral-500 pb-2 font-semibold'>
        {title}
      </div>
      {links ? (
        <ul
          className={`mt-4  flex flex-col gap-y-3 ${
            isTwoColumns ? 'grid grid-cols-2 gap-x-16  ' : ''
          } `}
        >
          {links.map((link) => (
            <li key={link}>
              <Link className='hover:text-orange-400  ' key={link} href='/'>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        ''
      )}
      {children}
    </div>
  );
};

export default Footer;

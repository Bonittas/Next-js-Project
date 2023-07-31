import React from 'react';
import Link from 'next/link';
export default function navbars() {
  return (
    <nav className='bg-green-500 flex-col md:flex-row'>
    <h3>
        <Link href='/' passHref>Home</Link>
        </h3>  
    </nav>
  );
}

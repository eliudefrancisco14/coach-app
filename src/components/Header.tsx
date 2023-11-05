import React from 'react';

export default function Header() {
  return (
    <header className='fixed top-0 left-0 right-0 flex items-center justify-between w-full px-14 py-5'>
      <div>
        <h4>Logo</h4>
      </div>
      <nav>
        <ul className='flex items-center gap-4'>
          <li><a href="">Github</a></li>
          <li><a href="">X</a></li>
          <li><a href="">Toggle</a></li>
        </ul>
      </nav>
    </header>
  );
}

'use client';
import React, { useState } from 'react';

import Link from 'next/link';

export default function NavListAndButton() {
  const [isOn, setIsOn] = useState(false);
  return (
    <>
      <svg
        onClick={() => setIsOn(!isOn)}
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 cursor-pointer md:hidden block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <div className={`${isOn && 'hidden'} w-full md:flex md:items-center md:w-auto`} id="menu">
        <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0">
          <li>
            <Link className="md:p-4 py-2 block hover:text-yellow-400" href="/notes">
              All notes
            </Link>
          </li>
          <li>
            <Link className="md:p-4 py-2 block hover:text-yellow-400" href="/notes/create">
              Create
            </Link>
          </li>
          <li>
            <Link className="md:p-4 py-2 block hover:text-yellow-400 text-purple-500" href="/">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

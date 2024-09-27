'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import {
  HomeIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/react/24/outline';

const links = [
  { name: 'DASHBOARD', icon: HomeIcon, href: '/' },
  { name: 'GASTOS', icon: ArrowDownIcon, href: '/expenses' },
  { name: 'INGRESOS', icon: ArrowUpIcon, href: '/income' },
  { name: 'INVERSIONES', icon: ArrowTrendingUpIcon, href: '/investments' },
];

export default function Sidenav() {
  const pathname = usePathname();

  const buttonClasses = `
  w-full
  rounded-xl
  flex items-center justify-center space-x-3
  text-foreground font-medium
  shadow-neomorphic dark:shadow-neomorphicDark
  transition-all duration-300 ease-in-out
  hover:shadow-neomorphicInset dark:hover:shadow-neomorphicInsetDark
  active:shadow-neomorphicInset dark:active:shadow-neomorphicInsetDark
`;

  return (
    <aside className="w-[15%] h-screen p-6 flex flex-col space-y-4 bg-background xl:flex md:hidden">
      <div className="mb-8 flex justify-center">
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
      </div>
      <div className="flex flex-grow space-y-4 flex-col gap-5">
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                buttonClasses,
                'transition-all duration-300 ease-in-out',
                {
                  'shadow-neomorphicInset dark:shadow-neomorphicInsetDark': pathname === link.href,
                },
              )}
            >
              <div className={`transition-all duration-300 ease-in-out w-full h-full flex items-center justify-center py-3 px-4 hover:scale-95 ${pathname === link.href ? 'scale-95' : ''}`}>
                <LinkIcon className="w-6 h-6 mr-2" />
                <b>{link.name}</b>
              </div>
            </Link>
          );
        })}
      </div>
      <button
        // onClick={() => {/* Lógica para cerrar sesión */}}
        className={`${buttonClasses} mt-8 text-red-600 dark:text-red-400 transition-all duration-300 ease-in-out hover:scale-95 px-4 py-3` }
      >
        <b>Cerrar sesión</b>
      </button>
    </aside>
  );
}
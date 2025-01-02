'use client';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function NavButtons() {
  const router = useRouter();

  // Function to check if the current route matches the link's destination
  const isActive = (path: string) => router.pathname === path ? 'text-retroOrange' : 'text-white';

  return (
    <div className="w-full sm:h-[50px] md:h-[80px] bg-black font-mono border-b border-b-retroGreen flex flex-row">
      <div className="flex flex-row w-full h-full">
        <Link href="/" passHref>
          <p className={`flex-1 flex items-center justify-center sm:text-[30px] font-mono ${isActive('/')} border-r border-retroGreen h-full pr-2 pl-2`}>
            HARSHAD
          </p>
        </Link>
        <Link href="/projects" passHref>
          <p className={`flex-1 flex items-center justify-center sm:text-[12px] font-mono ${isActive('/projects')} border-r border-retroGreen h-full`}>
            /Projects/
          </p>
        </Link>
        <Link href="/contact" passHref>
          <p className={`flex-1 flex items-center justify-center sm:text-[12px] font-mono ${isActive('/contact')} h-full`}>
            /Contact/
          </p>
        </Link>
      </div>
    </div>
  );
}
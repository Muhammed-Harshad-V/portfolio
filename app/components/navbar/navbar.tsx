'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const pathname = usePathname(); // Use usePathname instead of useRouter

  // Function to check if the current route matches the link's destination
  const isActive = (path: string) => pathname === path ? 'text-retroOrange' : 'text-white';

  return (
    <div className="w-full sm:h-[50px] md:h-[70px] bg-black font-mono border-b border-b-retroWhite grid grid-cols-[3fr_1fr_1fr] items-center pr-3 pl-3 drop-shadow-whiteGlow">
      <Link href="/" passHref className='h-full border-r border-retroWhite'>
        <p className={`sm:text-[13px] md:text-[25px] lg:text-[35px] font-mono ${isActive('/')}  border-r border-retroWhite h-full flex items-center justify-center`}>
          Muhammed Harshad
        </p>
      </Link>

      <Link href="/projects" passHref className='h-full border-r border-retroWhite'>
        <p className={`sm:text-[12px] md:text-[14px] font-mono ${isActive('/projects')} h-full flex items-center justify-center pr-2 pl-2`}>
          /Projects/
        </p>
      </Link>

      <Link href="/contact" passHref>
        <p className={`sm:text-[12px] md:text-[14px] font-mono ${isActive('/contact')} h-full flex items-center justify-center pl-2`}>
          /Contact/
        </p>
      </Link>
    </div>
  );
}

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const pathname = usePathname(); // Use usePathname instead of useRouter

  // Function to check if the current route matches the link's destination
  const isActive = (path: string) => pathname === path ? 'text-retroOrange' : 'text-white';

  return (
    <div className="w-full sm:h-[50px] md:h-[70px] lg:h-[85px] bg-black font-mono border-b border-b-retroGreen grid grid-cols-[3fr_1fr_1fr] items-center pr-3 pl-3">
      <Link href="/" passHref className='h-full'>
        <p className={`sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-mono font-extrabold text-retroGold border-r border-retroGreen h-full flex items-center justify-center pr-2 pl-2`}>
          HARSHAD
        </p>
      </Link>

      <Link href="/projects" passHref className='h-full'>
        <p className={`sm:text-[12px] md:text-[14px]  xl:text-[16px] font-mono ${isActive('/projects')} text-white border-r border-retroGreen h-full flex items-center justify-center pr-2 pl-2`}>
          /Projects/
        </p>
      </Link>

      <Link href="/contact" passHref>
        <p className={`sm:text-[12px] md:text-[14px] xl:text-[16px] font-mono ${isActive('/contact')} text-white h-full flex items-center justify-center pl-2`}>
          /Contact/
        </p>
      </Link>
    </div>
  );
}

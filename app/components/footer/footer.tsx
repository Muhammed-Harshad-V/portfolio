import React from 'react';
import Image from 'next/image';

function Footer() {
  return (
    <div className="bg-black text-retroWhite p-5 sm:p-8 lg:p-12">
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-bold mb-4">Connect with Me!</h3>
        <div className="flex space-x-6 mb-4">
          <a href="https://github.com/Muhammed-Harshad-V" target="_blank" rel="noopener noreferrer">
            <Image src="/githubIcon.png" alt="GitHub" width={30} height={30} className="rounded-full" />
          </a>
          <a href="https://www.linkedin.com/in/muhammed-harshad-v-186b93344/" target="_blank" rel="noopener noreferrer">
            <Image src="/linkedinIcon.png" alt="LinkedIn" width={35} height={35} className="" />
          </a>
        </div>
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Harshad. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;

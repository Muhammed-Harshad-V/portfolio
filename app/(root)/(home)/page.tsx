import Image from 'next/image';
import Link from 'next/link';
import React from 'react';



const Home = () => {
  return (
    <div className='flex flex-col'>
          {/* {home} */}
        <div className="w-full overflow-hidden sm:p-5 md:p-8 lg:p-12 grid-background">
          <div className="flex justify-center text-center sm:mt-[40px] md:mt-[70px] lg:mt-[80px] xl:mt-[100px] drop-shadow-whiteGlow">
            <div className="font-mono sm:p-5 lg:p-8 xl:p-10 rounded-[30px] bg-[#000000] z-20 flex items-center justify-center flex-col">
                <h1 className="sm:text-3xl xl:text-4xl font-bold mb-4 text-retroWhite">
                  <span>Hello,</span>
                  <span> I'm </span>
                  <span className="text-retroOrange">Harshad!</span>
                </h1>

                <h2 className="sm:text-xl xl:text-2xl font-semibold mb-2 text-retroWhite">
                  <span>MERN Stack Developer</span>
                </h2>

                <p className="sm:text-sm lg:text-lg mb-4 text-retroWhite">
                  <span>With a strong foundation in web development,</span> <br />
                  <span> I specialize in creating efficient and scalable applications</span> <br />
                  <span> using the MERN stack.</span>
                </p>

                <p className="sm:text-[12px] lg:text-base mb-6 text-retroWhite">
                  <span>My journey in coding started with a curiosity for technology,</span> <br />
                  <span> and it has since evolved into a passion for crafting intuitive user experiences.</span> <br />
                </p>

                <p className="sm:text-[12px] lg:text-base text-retroWhite">
                  <Link href="/contact"><span className='text-retroOrange'> Let's collaborate!</span></Link>
                </p>

            </div>
          </div>
          <div className='sm:h-[90px] md:h-[100px] h-[150px]'></div>
        </div>
        

          {/* {what i use} */}

                    <div className="w-full bg-black rounded-t-3xl border-t-2 border-t-retroWhite font-mono sm:pr-5 lg:pr-8 xl:pr-10 sm:pl-5 lg:pl-8 xl:pl-10">
                <h2 className="text-retroOrange sm:text-[20px] lg:text-[25px] font-bold sm:ml-[30px] sm:mt-[30px] md:ml-[40px] lg:ml-[60px] lg:mt-[40px] xl:mt-[50px] mb-[40px]">
                  My Tech Stack
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 border-2 rounded-xl mb-[100px] bg-black drop-shadow-whiteGlow p-6">
                  {/* MERN Stack */}
                  <div className="flex justify-center items-center">
                    <Image
                      src="/express-js.png"
                      alt="Express"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>

                  {/* Next.js */}
                  <div className="flex justify-center items-center">
                    <Image
                      src="/nextjs.webp"
                      alt="Next.js"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  {/* Node.js */}
                  <div className="flex justify-center items-center">
                    <Image
                      src="/node-js-.png"
                      alt="Node.js"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  {/* MongoDB */}
                  <div className="flex justify-center items-center">
                    <Image
                      src="/leaf.png"
                      alt="MongoDB"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  {/* Bun */}
                  <div className="flex justify-center items-center">
                    <Image
                      src="/docker-logo-blue.png"
                      alt="Docker"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  {/* TypeScript */}
                  <div className="flex justify-center items-center">
                    <Image
                      src="/ts.png"
                      alt="TypeScript"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>

                  <div className="flex justify-center items-center">
                    <Image
                      src="/react-js-.png"
                      alt="react"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>

                  <div className="flex justify-center items-center">
                    <Image
                      src="/th.jpeg"
                      alt="tailwind"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                </div>

              <div className='flex flex-col items-center justify-center mb-4 mt-4 text-sm'>
                <Link href="/projects">
                  <p className="text-white mb-3"><span>[</span><span className='hover:text-retroOrange'>All Projects</span><span>]</span></p>
                </Link>
                <Link href="/contact">
                  <p className="text-white"><span>[</span><span className='hover:text-retroOrange'>Contact Me</span><span>]</span></p>
                </Link>
              </div>

          </div>
  </div>


  );
};

export default Home;
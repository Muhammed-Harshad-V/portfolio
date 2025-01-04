import Image from 'next/image';
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
                  <span>I'm always eager to learn new technologies</span>
                  <span> and work on exciting projects.</span> <br />
                  <span> Let's collaborate!</span>
                </p>

            </div>
          </div>
          <div className='sm:h-[90px] md:h-[100px] h-[150px]'></div>
        </div>
        

          {/* {what i use} */}

          <div className="w-full bg-black rounded-t-3xl border-t-2 border-t-retroWhite drop-shadow-purpleGlow font-mono sm:pr-5 lg:pr-8 xl:pr-10 sm:pl-5 lg:pl-8 xl:pl-10">
              <h2 className='text-retroOrange sm:text-[20px] lg:text-[25px] font-bold sm:ml-[30px] sm:mt-[30px] md:ml-[40px] lg:ml-[60px] lg:mt-[40px] xl:mt-[50px]'>
                What I Use!
              </h2>
              <div className="grid sm:grid-cols-1 xl:grid-cols-3 border-2 rounded-xl mb-[100px]">
                <div className="sm:h-[250px] md:h-[300px] lg:h-[380px] xl:h-[450px] relative flex justify-center items-center">
                  <Image
                    src="/test.png"
                    alt="Description"
                    layout="responsive" // Adjust the layout to responsive
                    width={700} // Original width of the image
                    height={400} // Original height of the image
                    className="max-w-[60%] md:max-w-[45%] lg:max-w-[35%] xl:max-w-[70%] h-auto" // Set max-width to 70% of the container
                  />
                </div>

                <div className="lg:col-span-2 pb-10 sm:pr-3 md:pr-5 lg:pr-8 xl:pr-10 lg:pt-10">
                  <p className='text-retroWhite sm:text-[13px] lg:text-[18px] sm:ml-[30px] sm:mt-[10px] md:ml-[40px] lg:ml-[60px] lg:mt-[15px] xl:mt-[20px] leading-relaxed'>
                    At the heart of everything I build is <span className="text-retroOrange font-bold">JavaScript</span> a versatile language that powers both the frontend and backend of my projects. Using the <span className="text-retroOrange font-bold">MERN Stack</span>, I create efficient, scalable, and user-friendly applications.
                  </p>

                  <p className='text-retroWhite sm:text-[13px] lg:text-[18px] sm:ml-[30px] sm:mt-[10px] md:ml-[40px] lg:ml-[60px] lg:mt-[10px] xl:mt-[15px] leading-relaxed'>
                    From crafting seamless user interfaces with React to developing robust backends with Node.js and Express, and managing data effortlessly with MongoDB, I bring ideas to life with clean, modern, and impactful solutions.
                  </p>

                  <p className='text-retroWhite sm:text-[13px] lg:text-[18px] sm:ml-[30px] sm:mt-[10px] md:ml-[40px] lg:ml-[60px] lg:mt-[10px] xl:mt-[15px] leading-relaxed'>
                    JavaScript’s flexibility lets me explore beyond the basics—whether it’s optimizing performance, integrating APIs, or adding dynamic functionality, it’s my go-to tool for delivering exceptional results.
                  </p>
                </div>
              </div>
          </div>
    </div>


  );
};

export default Home;
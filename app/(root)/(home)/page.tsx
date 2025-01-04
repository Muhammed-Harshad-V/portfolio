import Image from 'next/image';
import React from 'react';
import githubIcon from '';



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
              <h2 className='text-retroOrange sm:text-[20px] lg:text-[25px] font-bold sm:ml-[30px] sm:mt-[30px] md:ml-[40px] lg:ml-[60px] lg:mt-[40px] xl:mt-[50px] mb-[40px]'>
                What I Use!
              </h2>
              <div className="grid sm:grid-cols-1 xl:grid-cols-3 border-2 rounded-xl mb-[100px] bg-black drop-shadow-whiteGlow">
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
                    also next.js bun etc..
                  </p>
                </div>
              </div>
                  {/* My Journey Section */}
                    <div className="grid flex-col">
                      <h2 className='text-retroOrange sm:text-[20px] lg:text-[25px] font-bold sm:ml-[30px] sm:mt-[30px] md:ml-[40px] lg:ml-[60px] lg:mt-[40px] xl:mt-[50px] mb-[40px]'>
                        My Journey!
                      </h2>

                      {/* Oldest Project */}
                      <div className="relative flex flex-col items-start pt-5 pl-5 pr-5 rounded-xl border-2 border-retroWhite drop-shadow-whiteGlow bg-black">
                        <h3 className="text-retroOrange font-bold text-lg mb-2">Oldest Project</h3>
                        <p className="text-retroWhite text-sm mb-2">
                        This project was my first full endeavor in coding, where I cloned a website template using HTML and CSS. It was a significant milestone that deepened my understanding of web layout and styling. Although I successfully replicated the design, I faced challenges with responsiveness, which remains incomplete. This project taught me valuable lessons about web development and sparked my passion for creating intuitive user experiences.
                        </p>
                        <div className="text-white text-sm mb-1">
                        <strong>Technologies Used:</strong> <span className='text-sky-400'>Html, css</span>
                        </div>
                        <div className="text-white text-sm mb-5">
                          <strong>Status:</strong> <span className='text-red-600'>Not completed</span>
                        </div>
                        <div className="flex space-x-4 mb-8">
                          <a href="https://github.com/yourusername/your-repo" target="_blank" rel="noopener noreferrer">
                            <Image src="/githubIcon.png" alt="GitHub Repository" width={25} height={25} className="rounded-full" />
                          </a>
                          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
                            <Image src="/globe.jpeg" alt="Live Website" width={25} height={25} className="rounded-full" />
                          </a>
                        </div>
                      </div>

                      {/* Connecting Line */}
                      <div className="w-1 bg-retroWhite ml-10 sm:h-[60px] md:h-[80px] lg:[110px] xl:h-[150px] drop-shadow-purpleGlow"></div> 

                      {/* Newest Project */}
                      <div className="relative flex flex-col items-start pt-5 pr-5 pl-5 rounded-xl border-2 border-retroWhite mb-[100px] drop-shadow-whiteGlow bg-black">
                        <h3 className="text-retroOrange font-bold text-lg mb-2">Newest Project</h3>
                        <p className="text-retroWhite text-sm mb-2">
                          A brief description of your newest project goes here. Highlight the features, technologies used, and what you learned from it.
                        </p>
                        <div className="text-white text-sm mb-1">
                          <strong>Technologies Used:</strong> <span className='text-sky-400'>React, Node.js, MongoDB</span>
                        </div>
                        <div className="text-white text-sm mb-5">
                          <strong>Status:</strong> <span className='text-retroGreen'>Completed</span>
                        </div>
                        <div className="flex space-x-4 mb-8">
                          <a href="https://github.com/yourusername/your-repo" target="_blank" rel="noopener noreferrer">
                            <Image src="/githubIcon.png" alt="GitHub Repository" width={25} height={25} className="rounded-full" />
                          </a>
                          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
                            <Image src="/globe.jpeg" alt="Live Website" width={25} height={25} className="rounded-full" />
                          </a>
                        </div>
                      </div>
              </div>
          </div>
  </div>


  );
};

export default Home;
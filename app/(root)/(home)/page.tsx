import React from 'react';


const Home = () => {
  return (
    <div className="w-full h-screen overflow-hidden sm:p-5 md:p-8 lg:p-12 grid-background">
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
    </div>
  );
};

export default Home;
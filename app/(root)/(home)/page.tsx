import React from "react";

export default function Home() {
    return (
      <>
        <div className="w-full h-screen grid-background overflow-hidden sm:p-5 md:p-8 lg:p-12">
            <div className="flex justify-center text-center">
                <div className="sm:mt-[40px] md:mt-[70px] lg:mt-[100px] xl:mt-[120px] border-2 font-mono border-retroPurple sm:p-5 lg:p-8 xl:p-10 rounded-[20px] bg-retroBlack z-10 shadow-xl">
                    <h1 className="sm:text-3xl xl:text-4xl font-bold mb-4">
                      <span className="text-retroGold">Hello,</span> 
                      <span className="text-retroGreen"> I'm </span> 
                      <span className="text-retroOrange">Harshad!</span>
                    </h1>
                    <h2 className="sm:text-xl xl:text-2xl font-semibold mb-2">
                      <span className="text-retroTeal">MERN Stack Developer</span>
                    </h2>
                    <p className="sm:text-sm lg:text-lg mb-4">
                      <span className="text-retroRed">With a strong foundation in web development,</span> <br />
                      <span className="text-retroYellow"> I specialize in creating efficient and scalable applications</span> <br />
                      <span className="text-retroBlue"> using the MERN stack.</span>
                    </p>
                    <p className="sm:text-[12px] lg:text-base mb-6">
                      <span className="text-retroPink">My journey in coding started with a curiosity for technology,</span> <br />
                      <span className="text-retroBrown"> and it has since evolved into a passion for crafting intuitive user experiences.</span> <br />
                    </p>
                    <p className="sm:text-[12px] lg:text-base">
                      <span className="text-retroMint">I'm always eager to learn new technologies</span> 
                      <span className="text-retroWhite"> and work on exciting projects.</span> 
                      <span className="text-retroPurple"> Let's collaborate!</span>
                    </p>
                </div>
            </div>
        </div>
      </>
    );
}

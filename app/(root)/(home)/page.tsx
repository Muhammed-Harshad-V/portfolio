import React from "react";
import ShineBorder from "../../../@/components/ui/shine-border";


export default function Home() {
  return (
    <>
      <div className="w-full h-screen overflow-hidden sm:p-5 md:p-8 lg:p-12 grid-background">
        <div className="flex justify-center text-center sm:mt-[40px] md:mt-[70px] lg:mt-[80px] xl:mt-[100px]">
          <ShineBorder
           color={[
            '#D4AF37', // retroGold
            '#62f00c', // retroGreen
            '#F5F5DC', // retroWhite
            '#C0C0C0', // silver
            '#f78605', // retroOrange
            '#4682B4', // retroTeal
            '#CD5C5C', // retroRed
            '#5F9EA0', // retroBlue
            '#FFD700', // retroYellow
            '#D87093', // retroPink
            '#8B4513', // retroBrown
            '#F5F5DC', // retroBeige
            '#696969', // retroGrey
            '#9370DB', // retroPurple
          ]}
          >
          <div className="font-mono sm:p-5 lg:p-8 xl:p-10 rounded-[30px] bg-[#000000] z-20">
            <h1 className="sm:text-3xl xl:text-4xl font-bold mb-4">
              <span className="text-[#FFD700]">Hello,</span> {/* Retro Gold */}
              <span className="text-[#62f00c]"> I'm </span> {/* Retro Green */}
              <span className="text-[#FFA500]">Harshad!</span> {/* Retro Orange */}
            </h1>
            <h2 className="sm:text-xl xl:text-2xl font-semibold mb-2">
              <span className="text-[#008080]">MERN Stack Developer</span> {/* Retro Teal */}
            </h2>
            <p className="sm:text-sm lg:text-lg mb-4">
              <span className="text-[#FF4500]">With a strong foundation in web development,</span> <br /> {/* Retro Red */}
              <span className="text-[#FFD700]"> I specialize in creating efficient and scalable applications</span> <br /> {/* Retro Yellow */}
              <span className="text-[#1E90FF]"> using the MERN stack.</span> {/* Retro Blue */}
            </p>
            <p className="sm:text-[12px] lg:text-base mb-6">
              <span className="text-[#FF69B4]">My journey in coding started with a curiosity for technology,</span> <br /> {/* Retro Pink */}
              <span className="text-[#8B4513]"> and it has since evolved into a passion for crafting intuitive user experiences.</span> <br /> {/* Retro Brown */}
            </p>
            <p className="sm:text-[12px] lg:text-base">
              <span className="text-[#98FB98]">I'm always eager to learn new technologies</span> {/* Retro Mint */}
              <span className="text-[#FFFFFF]"> and work on exciting projects.</span> {/* Retro White */}
              <span className="text-[#9370DB]"> Let's collaborate!</span> {/* Retro Purple */}
            </p>
          </div>
          </ShineBorder>
        </div>
      </div>
    </>
  );
}

"use client";
import { useState, useEffect } from "react";
import { useGlobal } from "../(context)/GlobalProvider";

export default function LoadingScreen() {
  const { isLoading, stopLoading } = useGlobal(); // Loading state from the global context
  const [count, setCount] = useState(10);
  const [lines, setLines] = useState<{ text: string; color: string }[]>([]);

  const loadingLines = [
    { text: "<span class='text-white'>></span> <span class='text-retroGreen'>System Boot:</span> Harshad's Portfolio Interface...", color: 'text-retroGreen' },
    { text: "<span class='text-white'>></span> <span class='text-white'>[ █░░░░░░░░░░░░░░░░░░░ ] 5%</span>", color: 'text-white' },
    { text: "<span class='text-white'>></span> <span class='text-retroGreen'>Activating MERN Protocols...</span>", color: 'text-retroGreen' },
    { text: "<span class='text-white'>></span> <span class='text-retroGreen'>IDENTIFICATION:</span>", color: 'text-retroGreen' },
    { text: "<span class='text-white'>></span>   <span class='text-retroGreen'>Name:</span> Harshad", color: 'text-retroGreen' },
    { text: "<span class='text-white'>></span>   <span class='text-retroGreen'>Role:</span> MERN Stack Web Developer", color: 'text-retroGreen' },
    { text: "<span class='text-white'>></span>   <span class='text-retroGreen'>Mission:</span> Transforming ideas into seamless web solutions.", color: 'text-retroGreen' },
    { text: "<span class='text-white'>></span> <span class='text-white'>[ ████░░░░░░░░░░░░░░░░ ] 20%</span>", color: 'text-white' },
    { text: "<span class='text-white'>></span> <span class='text-retroGreen'>Loading Front-End Wizardry...</span>", color: 'text-retroGreen' },
    { text: "<span class='text-white'>></span>  <span class='text-retroGreen'>Framework:</span> React.js - Building immersive user experiences.", color: 'text-retroGreen' },
    { text: "<span class='text-white'>></span>  <span class='text-retroGreen'>Style:</span> Pixel-perfect precision with CSS mastery.", color: 'text-retroGreen' },
    { text: "<span class='text-white'>></span>  <span class='text-retroGreen'>Tools:</span> Fast, responsive, and interactive designs.", color: 'text-retroGreen' },
    { text: "<span class='text-white'>></span> <span class='text-retroGreen'>Backend System Online...</span>", color: 'text-retroGreen' },
    { text: "<span class='text-white'>></span>  <span class='text-retroGreen'>Node.js:</span> High-speed execution initiated.", color: 'text-retroGreen' },
    { text: "<span class='text-white'>></span>   <span class='text-retroGreen'>Express.js:</span> API routes calibrated to perfection.", color: 'text-retroGreen' },
    { text: "<span class='text-white'>></span>  <span class='text-retroGreen'>MongoDB:</span> Databases structured for scalability.", color: 'text-retroGreen' },
    { text: "<span class='text-white'>></span> <span class='text-white'>[ ███████░░░░░░░░░░░░░ ] 40%</span>", color: 'text-white' },
    { text: "<span class='text-white'>></span> <span class='text-retroGreen'>Integrating full-stack potential...</span>", color: 'text-retroGreen' },
    { text: "<span class='text-white'>></span>   <span class='text-retroGreen'>🔗 RESTful APIs:</span> Connected.", color: 'text-retroGreen' },
    { text: "<span class='text-white'>></span>   <span class='text-retroGreen'>🔗 Secure authentication:</span> Protocols in place.", color: 'text-retroGreen' },
    { text: "<span class='text-white'>></span>   <span class='text-retroGreen'>🔗 Real-time updates:</span> Ready.", color: 'text-retroGreen' },
    { text: "<span class='text-white'>></span> <span class='text-white'>[ ██████████░░░░░░░░░░ ] 60%</span>", color: 'text-white' },
    { text: "<span class='text-white'>></span> <span class='text-retroGreen'>Portfolio Modules Detected...</span>", color: 'text-retroGreen' },
    { text: "<span class='text-white'>></span>   <span class='text-retroGreen'>🚀 Recent Projects:</span> Innovative, future-ready solutions.", color: 'text-retroGreen' },
    { text: "<span class='text-white'>></span>   <span class='text-retroGreen'>🌟 Passion Projects:</span> Built with creativity and care.", color: 'text-retroGreen' },
    { text: "<span class='text-white'>></span> <span class='text-white'>[ ██████████████░░░░░░ ] 80%</span>", color: 'text-white' },
    { text: "<span class='text-white'>></span> <span class='text-retroGreen'>Initializing Developer Stats...</span>", color: 'text-retroGreen' },
    { text: "<span class='text-white'>></span>   <span class='text-retroGreen'>Problem Solving:</span> 64% Efficiency", color: 'text-retroGreen' },
    { text: "<span class='text-white'>></span>   <span class='text-retroGreen'>Passion:</span> Building Web experiences that inspire.", color: 'text-retroGreen' },
    { text: "<span class='text-white'>></span>   <span class='text-retroGreen'>Creativity:</span> limited", color: 'text-retroGreen' },
    { text: "<span class='text-white'>></span> <span class='text-white'>[ ████████████████████ ] 100%</span>", color: 'text-white' },
    { text: "<span class='text-white'>></span> <span class='text-retroGreen'>SYSTEM MESSAGE:</span> Ready to Enter Harshad's Digital Workspace", color: 'text-retroGreen' },
    { text: "<span class='text-white'>></span> <span class='text-red-500'>Warning:The code you are about to witness might inspire greatness. </span>", color: 'text-red-500' },
    { text: "<span class='text-white'>></span> <span class='text-retroGreen'>Proceed with enthusiasm.</span>", color: 'text-retroGreen' },
  ];


  useEffect(() => {
    const typeText = () => {
      loadingLines.forEach((line, index) => {
        setTimeout(() => {
          setLines((prevLines) => [...prevLines, line]);
        }, index * 200); // Adjust the delay between lines
      });
    };

    typeText();
  }, []); // Empty dependency array ensures it runs only once on component mount

  useEffect(() => {
     
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer); // Clear timeout to prevent memory leaks
    }

  }, [count])

  return (
    <>
      {isLoading && (
        <div className="h-[100svh] flex flex-col justify-between">
        <div className="w-full h-[calc(100vh-50px)] bg-retroBlack flex items-start z-50 p-2">
          <div className="text-white">
            {lines.map((line, index) => (
              <p
                key={index}
                className="sm:text-[8px] lg:text-sm font-mono typing-effect"
                dangerouslySetInnerHTML={{ __html: line.text }}
              />
            ))}
          </div>
        </div>
          <div className="flex flex-row w-full h-50px border-t-2 border-white justify-stretch">
             <button className="sm:text-[10px] lg:text-sm font-mono text-white p-3" onClick={(() => {stopLoading()})}>Click Here to Exit</button>
             <p className="sm:text-[10px] lg:text-sm font-mono text-white p-3">Ending in: <span className="text-retroGreen">{count}</span> </p> 
          </div>
        </div>

      )}

      {/* Inline CSS for Typing Effect */}
      <style jsx>{`
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        .typing-effect {
          display: block;
          white-space: nowrap;
          overflow: hidden;
          animation: typing 1s steps(40) forwards;
          border-right: none;
        }
      `}</style>
    </>
  );
}

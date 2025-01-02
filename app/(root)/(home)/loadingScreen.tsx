'use client';
import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
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
      { text: "<span class='text-white'>></span>   <span class='text-retroGreen'>🔍 Skills:</span> Debugging mastery and deployment expertise.", color: 'text-retroGreen' },
      { text: "<span class='text-white'>></span> <span class='text-white'>[ ██████████████░░░░░░ ] 80%</span>", color: 'text-white' },
      { text: "<span class='text-white'>></span> <span class='text-retroGreen'>Initializing Developer Stats...</span>", color: 'text-retroGreen' },
      { text: "<span class='text-white'>></span>   <span class='text-retroGreen'>Problem Solving:</span> 64% Efficiency", color: 'text-retroGreen' },
      { text: "<span class='text-white'>></span>   <span class='text-retroGreen'>Passion:</span> Building Web experiences that inspire.", color: 'text-retroGreen' },
      { text: "<span class='text-white'>></span>   <span class='text-retroGreen'>Creativity:</span> limited", color: 'text-retroGreen' },
      { text: "<span class='text-white'>></span> <span class='text-white'>[ ████████████████████ ] 100%</span>", color: 'text-white' },
      { text: "<span class='text-white'>></span> <span class='text-retroGreen'>SYSTEM MESSAGE:</span> Ready to Enter Harshad's Digital Workspace", color: 'text-retroGreen' },
      { text: "<span class='text-white'>></span> <span class='text-red-500'>Warning:The code you are about to witness might inspire greatness. </span>", color: 'text-red-500' },
      { text: "<span class='text-white'>></span> <span class='text-retroGreen'>Proceed with enthusiasm.</span>", color: 'text-retroGreen' },
      { text: "<span class='text-white'>></span> <span class='text-white'>[ PRESS ENTER TO EXPLORE ]</span>", color: 'text-white' },
    ];

    const typeText = (lines: { text: string, color: string }[]) => {
      lines.forEach((line, index) => {
        setTimeout(() => {
          setLines((prevLines) => [...prevLines, line]);
        }, index * 200); // Adjust the delay between lines
      });
    };

    typeText(loadingLines);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 20000); // Adjust for the length of your animation

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed top-0 left-0 w-full h-[100vh] bg-retroBlack flex items-start z-50 p-2">
          <div className="text-white">
            {lines.map((line, index) => (
              <p
                key={index}
                className="text-sm font-mono typing-effect"
                dangerouslySetInnerHTML={{ __html: line.text }} // Use dangerouslySetInnerHTML to render HTML with spans
              />
            ))}
          </div>
        </div>
      ) : null}
      
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
          animation: typing 1s steps(40) 1s 1 normal both, 0.75s infinite;
          border-right: none; 
        }
      `}</style>z
    </>
  );
}

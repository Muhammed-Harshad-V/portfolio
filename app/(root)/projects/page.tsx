import React from 'react';
import Image from 'next/image'; // Assuming you are using Next.js for image optimization

const MyPage = () => {
  // Dummy data for projects
  const projects = [
    {
      title: 'Oldest Project',
      description: 'This project was my first full endeavor in coding, where I cloned a website template using HTML and CSS. It taught me valuable lessons about web development and sparked my passion for creating intuitive user experiences.',
      technologies: 'HTML, CSS',
      status: 'Not completed',
      githubLink: 'https://github.com/yourusername/your-repo',
      liveLink: 'https://yourwebsite.com',
    },
    {
      title: 'Newest Project',
      description: 'A brief description of your newest project goes here. Highlight the features, technologies used, and what you learned from it.',
      technologies: 'React, Node.js, MongoDB',
      status: 'Completed',
      githubLink: 'https://github.com/yourusername/your-repo',
      liveLink: 'https://yourwebsite.com',
    },
  ];

  return (
    <div className=" bg-black sm:pr-5 lg:pr-8 xl:pr-10 sm:pl-5 lg:pl-8 xl:pl-10 min-h-[90svh]">
    

      {/* Projects Section */}
      <div className="flex flex-col">
        <h2 className='text-retroOrange sm:text-[20px] lg:text-[25px] font-bold sm:ml-[30px] sm:mt-[30px] md:ml-[40px] lg:ml-[60px] lg:mt-[40px] xl:mt-[50px] mb-[40px]'>
          My Projects!
        </h2>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 p-5'>
            {projects.map((project, index) => (
                <div 
                key={index} 
                className="relative max-w-[600px] min-h-[250px] flex flex-col justify-between pt-5 pl-5 pr-5 rounded-xl border-2 border-retroWhite drop-shadow-whiteGlow bg-black mx-auto mb-8 font-mono hover:border-retroPurple hover:drop-shadow-purpleGlow"
                >
                <div>
                    <h3 className="text-retroOrange font-bold text-lg mb-2">{project.title}</h3>
                    <p className="text-retroWhite text-sm mb-2">{project.description}</p>
                    <div className="text-white text-sm mb-3">
                    <strong>Technologies Used:</strong> <span className='text-sky-400'>{project.technologies}</span>
                    </div>
                </div>

                <div className="flex flex-col mb-8 mx-auto">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <p className="text-white text-sm mb-1">
                    <span>[</span><span className='hover:text-blue-500'>git</span><span>]</span>
                    </p>
                    </a>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <p className="text-white text-sm mb-1">
                    <span>[</span><span className='hover:text-blue-500'>web</span><span>]</span>
                    </p>
                    </a>
                </div>
                </div>
            ))}
            </div>


      </div>
    </div>
  );
};

export default MyPage;

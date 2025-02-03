import React from 'react';


const MyPage = () => {
  // Dummy data for projects
  const projects = [
    {
      title: 'Echo Chatter (side porject)',
      description: 'Developed a real-time chat application using WebSockets, enabling instant messaging with bidirectional communication. Built with Node.js, Express, and React, featuring user authentication, and a responsive UI. Designed for scalability with event-driven updates, ensuring a seamless and engaging chat experience.',
      githubLink: 'https://github.com/Muhammed-Harshad-V/EchoChatter',
      liveLink: 'https://echochatter.onrender.com',
    },
    {
      title: 'HR Management- Admin Panel',
      description: 'Developed a scalable HR Management Admin Panel using microservices architecture, integrating Express.js for backend services and React for an intuitive frontend. Streamlined employee onboarding, attendance tracking, payroll processing, and performance evaluation with RESTful APIs, role-based access, and real-time data visualization.',
      githubLink: 'https://github.com/Muhammed-Harshad-V/Hr-management',
      liveLink: 'https://h-yq1e.onrender.com/dashboard',
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
                </div>

                <div className="flex flex-col mb-8 items-center">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <p className="text-white text-sm mb-1">
                    <span>[</span><span className='hover:text-blue-500'>github</span><span>]</span>
                    </p>
                    </a>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <p className="text-white text-sm mb-1">
                    <span>[</span><span className='hover:text-blue-500'>website</span><span>]</span>
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

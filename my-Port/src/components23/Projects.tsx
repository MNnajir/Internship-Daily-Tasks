// src/components/Projects.tsx
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Project 1",
      description: "Task Manager built with React and Node.js",
      tags: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/MNnajir/Task-Manager.git"
    },
    {
      title: "Project 2",
      description: "Context-based Todo Manager with Redux",
      tags: ["React", "Tailwind CSS", "Redux"],
      link: "https://github.com/MNnajir/ContextTodoManager.git"
    },
    {
      title: "Project 3",
      description: "Password Generator with ract nodejs",
      tags: ["react", "nodejs", "MongoDB"],
      link: "https://github.com/MNnajir/passwordGenerator.git"
    }
  ];

  return (
    <section id="projects" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                View Project <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export { Projects };
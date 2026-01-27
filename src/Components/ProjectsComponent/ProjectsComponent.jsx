import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import projects from "../../data/projectsData";

const ProjectsComponent = () => {
  const navigate = useNavigate();

  const handleNavigation = (project) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(`/projects/${project.id}`);
  };

  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="mb-20 border-l-4 border-black pl-6">
          <p className="text-sm uppercase tracking-[0.3em] font-bold text-black/40 mb-2">
            My Works
          </p>
          <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter">
            Delivering Excellence Through Code
          </h2>
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              onClick={() => handleNavigation(project)}
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden border border-black/5 mb-6">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                {project.live && (
                  <span className="absolute top-4 right-4 text-xs font-bold tracking-widest uppercase bg-black text-white px-3 py-1">
                    Live
                  </span>
                )}
              </div>

              {/* CONTENT */}
              <div className="flex justify-between items-start px-1">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-black/40 uppercase tracking-widest mt-1">
                    {project.type}
                  </p>
                </div>

                <div className="w-11 h-11 flex items-center justify-center border border-black/10 rounded-full
                                group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

              {/* DIVIDER */}
              <div className="mt-6 h-px bg-black/5 group-hover:bg-black/20 transition-colors w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsComponent;

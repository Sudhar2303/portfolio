import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import projects from '../../data/projectsData';
const ViewProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="py-24 text-center font-medium text-black/50">
        Project not found.
      </div>
    );
  }

  return (
    <section className="py-20 bg-white text-black min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* NAVIGATION */}
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest mb-12 text-black/40 hover:text-black transition-all"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
          Back to Works
        </button>

        {/* HEADER SECTION */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            {project.title}
          </h1>
          <div className="flex items-center gap-4">
            <span className="h-[1px] w-12 bg-black/20"></span>
            <p className="uppercase tracking-[0.2em] text-xs font-bold text-black/50">
              {project.type}
            </p>
          </div>
        </div>

        {/* MAIN IMAGE */}
        <div className="mb-20 bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-black/5">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT: Project Details */}
          <div className="lg:col-span-8 space-y-20">
            <section>
              <h2 className="text-2xl font-bold mb-6 tracking-tight">The Concept</h2>
              <p className="text-xl text-black/70 leading-relaxed font-normal">
                {project.description}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-8 tracking-tight">Technical Implementation</h2>
              <div className="space-y-6">
                {project.detailedPoints.map((point, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <span className="text-black/20 font-mono text-lg mt-1 group-hover:text-black transition-colors">
                      0{i + 1}
                    </span>
                    <p className="text-lg text-black/70 leading-snug">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT: Tech Stack & Actions */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-12">
              
              {/* TECH STACK ICONS */}
              <section>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-black/30 mb-8">
                  Tech Stack
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {project.techStack.map((tech, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-neutral-50 border border-neutral-100 rounded-lg hover:border-black/10 transition-colors">
                      <img 
                        src={tech.iconUrl || `https://cdn.simpleicons.org/${tech.slug}`} 
                        alt={tech.name}
                        className="w-5 h-5 object-contain opacity-80"
                      />
                      <span className="text-[11px] font-bold uppercase tracking-tight text-black/80">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* ACTION BUTTON */}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-8 py-5 bg-black text-white group hover:bg-neutral-800 transition-all rounded-sm"
                >
                  <span className="text-xs font-black uppercase tracking-widest">Launch Project</span>
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewProject;
import { ArrowRight, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import projects from "../../data/projectsData";

const HomeComponent = () => {
  const navigate = useNavigate();

  const goTo = (path) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="pt-12 md:pt-20 flex flex-col items-center text-center px-4">
        <p className="font-bold tracking-tight leading-tight text-[2.5rem] sm:text-[3.5rem] md:text-[5.2rem] max-w-6xl">
          <span className="text-[#b2b4b4]">I&apos;m Sudhar, </span>
          a Full stack developer passionate about creating impactful digital experiences
        </p>

        <div
          onClick={() => goTo("/contact")}
          className="mt-10 flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full cursor-pointer hover:scale-105 transition-transform"
        >
          <p className="text-lg font-medium">Let&apos;s Talk</p>
          <ArrowRight />
        </div>
      </section>

      {/* ABOUT ME PREVIEW */}
      <section className="mt-16 bg-[#e7e4e4]">
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-28 grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-7">
            <h2 className="font-bold leading-[1.05] tracking-tight text-[2.2rem] sm:text-[2.8rem] md:text-[3.6rem]">
              Discover the journey <br /> behind my design — <br /> passion meets purpose
            </h2>
          </div>

          <div className="md:col-span-5 md:col-start-8 flex flex-col justify-evenly">
            <p className="text-black/70 text-lg leading-relaxed max-w-sm">
              I&apos;m an aspiring MERN Full Stack Developer living in Chennai, driven to create innovative web applications.
            </p>

            <div
              onClick={() => goTo("/aboutme")}
              className="mt-12 inline-flex items-center gap-3 border border-black px-7 py-2.5 rounded-full cursor-pointer w-fit hover:bg-black hover:text-white transition-colors"
            >
              <span className="font-medium">About Me</span>
              <ArrowRight size={18} />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION – CLEAN 2 COLUMN */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          
          {/* SECTION HEADER */}
          <div className="mb-16 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              Selected Projects
            </h2>
            <p className="text-black/60 leading-relaxed">
              A small set of projects that showcase how I approach design,
              development, and execution.
            </p>
          </div>

          {/* TWO COLUMN GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  navigate(`/projects/${project.id}`);
                }}
                className="group relative cursor-pointer overflow-hidden rounded-xl bg-neutral-100 border border-black/5"
              >
                {/* IMAGE */}
                <div className="h-[380px] w-full relative">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* TYPE BADGE */}
                  <div className="absolute top-6 left-6 z-10">
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-sm">
                      {project.type.split(" ")[0]}
                    </span>
                  </div>

                  {/* HOVER OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-3xl font-bold text-white tracking-tighter mb-2 italic">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 text-white/70 text-xs font-bold uppercase tracking-widest">
                        View Case Study <Plus size={14} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default HomeComponent;

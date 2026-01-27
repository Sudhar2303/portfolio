import profilePhoto from "../../assets/image.png";
import { ExternalLink } from "lucide-react";

const AboutMeComponent = () => {
  const experiences = [
    {
      company: "TryCoM AI",
      url: "https://trycom.ai", 
      role: "Full Stack Developer",
      period: "September 2025 – December 2025",
      description: "At Trycom AI, I worked on AI-enabled web applications, handling both frontend and backend responsibilities. I contributed to building new features, improving existing workflows, and revamping parts of the application to enhance performance and usability. My role involved working closely with APIs, business logic, and production-level code."
    },
    {
      company: "Oneyes Infotech Solutions",
      url: "https://oneyesinfotechsolutions.com", 
      role: "Full Stack Developer & UI/UX Designer",
      period: "April 2025 – July 2025",
      description: "I worked as a Full Stack Developer while also contributing to UI/UX design. I focused on building responsive applications, improving interface clarity, and ensuring a consistent user experience. Alongside development, I guided interns by teaching core web concepts and helping them apply those fundamentals in real projects."
    },
    {
      company: "Genspark",
      url: "https://genspark.net", 
      role: "Trainee",
      period: "August 2024 – March 2025",
      description: "My professional journey began at Genspark, where I trained in MERN full stack development. During this time, I worked on multiple end-to-end projects that strengthened my understanding of frontend development, backend APIs, and database integration. This phase helped me build a strong technical foundation and a disciplined approach to problem-solving."
    }
  ];

  const skillCategories = [
    {
      title: "Frontend Engineering",
      skills: [
        { name: "HTML", slug: "html5" },
        { name: "CSS", iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
        { name: "JavaScript", slug: "javascript" },
        { name: "TypeScript", slug: "typescript" },
        { name: "React", slug: "react" },
        { name: "Next.js", iconUrl: "https://cdn.simpleicons.org/nextdotjs/white" },
        { name: "Tailwind", slug: "tailwindcss" },
      ]
    },
    {
      title: "Backend & Systems",
      skills: [
        { name: "Node.js", slug: "nodedotjs" },
        { name: "Express", iconUrl: "https://cdn.simpleicons.org/express/white" },
        { name: "MongoDB", slug: "mongodb" },
        { name: "Redis", iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg" },
      ]
    },
    {
      title: "Cloud & Infrastructure",
      skills: [
        { name: "AWS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
        { name: "Docker", slug: "docker" },
        { name: "Firebase", slug: "firebase" },
        { name: "Git", slug: "git" },
      ]
    },
    {
      title: "Identity & Security",
      skills: [
        { name: "JWT", iconUrl: "https://www.jwt.io/img/pic_logo.svg" },
        { name: "OAuth", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oauth/oauth-original.svg" },
      ]
    }
  ];

  return (
    <>
      {/* ABOUT INTRO */}
      <section className="bg-black text-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-7">
            <h1 className="text-4xl md:text-4xl italic font-bold mb-12 tracking-tight">About</h1>
            <div className="space-y-12">
              <div className="relative">
                <p className="text-white/90 text-lg md:text-xl leading-relaxed font-light italic border-b border-white/10 pb-8">
                  I’m a <span className="text-white font-medium not-italic">Full Stack Developer</span> with hands-on experience building and maintaining end-to-end web applications. My work spans frontend development, backend logic, and API integration, with a focus on delivering functional, reliable, and scalable solutions.
                </p>
              </div>
              <div className="flex gap-6">
                <div className="w-px bg-gradient-to-b from-white/40 to-transparent shrink-0"></div>
                <p className="text-white/60 text-base md:text-md leading-relaxed max-w-2xl">
                  Across my experience, I’ve worked in structured training environments as well as production-level projects, contributing to feature development, application improvements, and system maintenance. I approach development with attention to code quality, system performance, and long-term maintainability.
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t border-l border-white/30"></div>
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b border-r border-white/30"></div>
              <img
                src={profilePhoto}
                alt="Profile"
                className="relative z-10 w-full max-w-[340px] h-auto rounded-sm shadow-2xl transition-transform duration-700 hover:scale-[1.01] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">

            {/* LEFT STICKY TITLE */}
            <div className="md:col-span-4">
              <div className="sticky top-24">
                <h2 className="text-3xl font-bold mb-4 tracking-tight">
                  Experience
                </h2>
                <div className="h-1 w-12 bg-black mb-6"></div>
                <p className="text-black/50 text-lg">
                  My journey from structured learning to building production-ready applications.
                </p>
              </div>
            </div>

            {/* RIGHT TIMELINE */}
            <div className="md:col-span-8 relative">

              {/* Vertical Line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-black/10" />

              <div className="space-y-20">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-14 group">

                    {/* Timeline Dot */}
                    <div className="absolute left-[10px] top-2 w-3 h-3 rounded-full bg-white border-2 border-black transition-all duration-300 group-hover:bg-black" />

                    <span className="text-sm font-bold uppercase tracking-widest text-black/40 block mb-2">
                      {exp.period}
                    </span>

                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center group mb-1"
                    >
                      <h3 className="text-xl md:text-2xl font-bold text-black group-hover:text-black/60 transition">
                        {exp.company}
                      </h3>
                      <ExternalLink className="ml-2 w-4 h-4 text-black/30 group-hover:text-black transition" />
                    </a>

                    <p className="text-black/50 font-medium text-lg mb-3">
                      {exp.role}
                    </p>

                    <p className="text-black/70 text-base md:text-lg leading-relaxed max-w-2xl">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-28 bg-[#050505]">
        <div className="max-w-6xl mx-auto px-6">

          {/* SECTION HEADER */}
          <div className="mb-24">
            <span className="text-white/30 uppercase tracking-[0.35em] text-[10px] font-semibold block mb-3">
              Technical Expertise
            </span>

            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
              Skills & Capabilities
            </h2>

            <p className="mt-4 text-white/40 text-sm max-w-md leading-relaxed">
              Technologies and tools I use to design, build, and maintain modern web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="group border-t border-white/10 pt-8">
                <div className="flex items-baseline justify-between mb-8">
                  <h3 className="text-xs uppercase tracking-[0.5em] font-bold text-white/20 group-hover:text-white/40 transition-colors">
                    {category.title}
                  </h3>
                  <span className="font-mono text-white/10 text-xl">0{idx + 1}</span>
                </div>

                <div className="flex flex-wrap gap-x-8 gap-y-6">
                  {category.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx} 
                      className="flex items-center gap-3 group/skill cursor-default"
                    >
                      <div className="w-6 h-6 flex items-center justify-center opacity-50 group-hover/skill:opacity-100 transition-all duration-300 group-hover/skill:scale-110">
                        <img 
                          src={skill.iconUrl || `https://cdn.simpleicons.org/${skill.slug}`} 
                          alt={skill.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-sm font-medium tracking-tight text-white/60 group-hover/skill:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMeComponent;

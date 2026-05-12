import {
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaDownload,
  FaEye,
} from "react-icons/fa";

const skills = [
  "AWS",
  "Kubernetes",
  "Docker",
  "Jenkins",
  "Terraform",
  "ArgoCD",
  "Linux",
  "Python",
  "Ansible",
  "Grafana",
  "Prometheus",
  "Kafka",
];

const projects = [
  {
    title: "CI/CD Automation Platform",
    description:
      "Built automated CI/CD pipelines using Jenkins and ArgoCD to reduce deployment time and manual effort.",
  },
  {
    title: "Kubernetes Infrastructure",
    description:
      "Managed scalable Kubernetes deployments with monitoring, ingress and container orchestration.",
  },
  {
    title: "Terraform AWS Infrastructure",
    description:
      "Provisioned AWS infrastructure using Terraform and Infrastructure as Code practices.",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-x-hidden">
      {/* Background Grid */}
      <div className="fixed inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,rgba(0,255,150,0.15)_1px,transparent_0)] bg-[size:30px_30px]" />

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center px-6 relative z-10">
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-10 items-center">
          
          {/* LEFT SIDE */}
          <div className="bg-black/30 backdrop-blur-xl border border-cyan-500/20 rounded-[30px] p-8 shadow-2xl">
            <p className="text-green-400 font-mono">
              $ whoami
            </p>

            <h1 className="text-5xl md:text-7xl font-bold text-cyan-400 mt-4">
              Ravikant Sharma
            </h1>

            <p className="text-xl text-slate-300 mt-4">
              DevOps Engineer | Cloud | Kubernetes | Automation
            </p>

            <div className="mt-8 space-y-5 font-mono text-slate-300">
              <div>
                <span className="text-green-400">
                  $ role
                </span>
                <p>DevOps Engineer</p>
              </div>

              <div>
                <span className="text-green-400">
                  $ stack
                </span>
                <p>
                  AWS • Kubernetes • Docker • Jenkins • Terraform • ArgoCD
                </p>
              </div>

              <div>
                <span className="text-green-400">
                  $ impact
                </span>
                <p>Reduced manual effort by ~60%</p>
                <p>Improved operational efficiency by ~20%</p>
              </div>
            </div>

            {/* RESUME BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="/Ravikant_Sharma.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-500 text-black px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:scale-105 transition"
              >
                <FaEye />
                View Resume
              </a>

              <a
                href="/Ravikant_Sharma.pdf"
                download="Ravikant_Sharma_Resume.pdf"
                className="border border-cyan-400 text-cyan-300 px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-cyan-500/10 transition"
              >
                <FaDownload />
                Download Resume
              </a>
            </div>
          </div>

          {/* RIGHT SIDE STATS */}
          <div className="grid grid-cols-2 gap-5">
            {[
              ["2+", "Years Experience"],
              ["60%", "Manual Work Reduced"],
              ["20%", "Efficiency Increase"],
              ["AWS", "Cloud Native"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="bg-black/30 border border-green-500/20 rounded-3xl p-8 text-center backdrop-blur-xl hover:scale-105 transition"
              >
                <h2 className="text-4xl font-bold text-green-400">
                  {number}
                </h2>

                <p className="text-slate-300 mt-3">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-10">
          DevOps Arsenal
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-black/30 border border-cyan-500/20 rounded-2xl p-5 text-center hover:border-cyan-400 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

	  {/* EXPERIENCE */}
<section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
  <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
    Experience
  </h2>

  <div className="space-y-8">
    {/* Experience Card */}
    <div className="bg-black/30 border border-cyan-500/20 rounded-[32px] p-8 backdrop-blur-xl hover:border-cyan-400/40 transition duration-300">

      {/* Timeline */}
      <p className="text-sm text-slate-400 tracking-wider uppercase">
        Aug 2024 — Present
      </p>

      {/* Company */}
      <h3 className="text-3xl font-bold text-cyan-400 mt-2">
        Telaverge Communications
      </h3>

      {/* Role */}
      <p className="text-xl text-green-400 font-semibold mt-1">
        R&D Engineer / DevOps Engineer
      </p>

      {/* Impact Statement */}
      <p className="mt-6 text-slate-300 leading-8 text-lg">
        Working on telecom-grade infrastructure, CI/CD automation,
        cloud-native deployments and monitoring systems to improve
        deployment reliability, reduce operational overhead and
        streamline engineering workflows.
      </p>

      {/* Highlights */}
      <div className="mt-8">
        <h4 className="text-cyan-400 font-semibold text-lg mb-4">
          Key Contributions & Impact
        </h4>

        <ul className="space-y-4 text-slate-300 leading-7">
          <li className="border-l-2 border-cyan-500 pl-4">
            Built and optimized <span className="text-cyan-300">CI/CD pipelines</span> using
            Jenkins and ArgoCD, significantly reducing manual deployment effort.
          </li>

          <li className="border-l-2 border-cyan-500 pl-4">
            Managed <span className="text-cyan-300">Kubernetes-based infrastructure</span>,
            ensuring scalable and reliable container orchestration.
          </li>

          <li className="border-l-2 border-cyan-500 pl-4">
            Integrated <span className="text-cyan-300">Grafana & Prometheus monitoring</span>
            for real-time observability and system health tracking.
          </li>

          <li className="border-l-2 border-cyan-500 pl-4">
            Reduced manual operational effort by approximately
            <span className="text-green-400 font-semibold"> 60%</span>
            and improved workflow efficiency by
            <span className="text-green-400 font-semibold"> 20%</span>.
          </li>

          <li className="border-l-2 border-cyan-500 pl-4">
            Worked with <span className="text-cyan-300">telecom-grade systems</span>
            and enterprise deployment environments.
          </li>
        </ul>
	  </div>
      </div>
  </div>
</section>


      {/* PROJECTS */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-black/30 border border-cyan-500/20 rounded-3xl p-6 hover:-translate-y-2 transition"
            >
              <h3 className="text-2xl text-green-400 font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-slate-300 leading-7">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <footer className="border-t border-cyan-500/10 py-16 text-center relative z-10">
        <h2 className="text-3xl text-cyan-400 font-bold mb-8">
          $ contact
        </h2>

        <div className="flex flex-wrap justify-center gap-8 text-slate-300">
          <a
            href="tel:+918295463550"
            className="flex items-center gap-2 hover:text-cyan-400 transition"
          >
            <FaPhone />
            +91 8295463550
          </a>

          <a
            href="mailto:ravikants781@gmail.com"
            className="flex items-center gap-2 hover:text-cyan-400 transition"
          >
            <FaEnvelope />
            ravikants781@gmail.com
          </a>

          <a
            href="https://github.com/ravikant-sharma781"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-cyan-400 transition"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ravikant-sharma-sde/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-cyan-400 transition"
          >
            <FaLinkedin />
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}

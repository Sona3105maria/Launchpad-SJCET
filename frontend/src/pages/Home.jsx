import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import StartUpCard from "../components/StartUpCard";
import ProjectCard from "../components/ProjectCard";

const startupData = [
  {
    logo: "LOGO",
    description:
      "This is rough description of start-Ups . Rough text rough text rough text rough text rough text.  Rough text rough text rough text rough text.  Rough text rough text rough text rough text. Rough text rough text rough text rough text. Rough text rough text rough text rough text.",
  },
  { logo: "LOGO", description: "" },
  { logo: "LOGO", description: "" },
  { logo: "LOGO", description: "" },
];

const projectData = [
  {
    title: "Project Title",
    description:
      "This is rough description of projects . Rough text rough text rough text rough text rough text.  Rough text rough text rough text rough text.  Rough text rough text rough text rough text. Rough text rough text rough text rough text. Rough text rough text rough text rough text.",
  },
  { title: "Project Title", description: "" },
  { title: "Project Title", description: "" },
  { title: "Project Title", description: "" },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <Navbar />

      {/* Hero Section */}
      <section
        className="w-full min-h-[70vh] flex flex-col items-center justify-center text-center relative"
        style={{
          background:
            "linear-gradient(158deg, rgba(220,230,210,0.00) 0%, rgba(129,255,4,0.84) 450%)",
        }}
      >
        <div
          className="flex flex-col items-center justify-center w-full h-full pt-32 pb-16"
          style={{ opacity: 3 }}
        >
          <h1
            className="text-7xl md:text-8xl font-extrabold mb-6 text-[#1F3C04]"
            style={{ letterSpacing: "2px" }}
          >
            Discover . Connect
          </h1>
          <p className="text-[#aaada7] text-4xl mb-12 font-light">
            Showing Projects and StartUps
          </p>
          <div className="flex flex-row gap-8 mt-4">
            <Link to="/signup">
              <button className="bg-green-200 text-black text-2xl px-10 py-3 rounded-xl font-medium hover:bg-green-300 transition-all">
                Join Us
              </button>
            </Link>
            <button className="bg-green-200 text-black text-2xl px-10 py-3 rounded-xl font-medium hover:bg-green-300 transition-all">
              Explore Projects
            </button>
          </div>
        </div>
      </section>

      {/* Featured Startups Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8">FEATURED STARTUPS</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {startupData.map((item, idx) => (
              <StartUpCard
                key={idx}
                logo={item.logo}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8">FEATURED Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {projectData.map((item, idx) => (
              <ProjectCard
                key={idx}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

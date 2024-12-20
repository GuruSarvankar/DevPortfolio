import Blog from "../components/Blog";
import ProjectCard from "../components/ProjectCard";

const Home = () => {
  const projects = [
    {
      id: "1",
      title: "Urban Tummy",
      description: "This is a short description of Project One.",
      image:
        "http://gurusarvankar.com/portfolio/assets/images/UT/urbantummyscreens.png",
      techStack: [
        "React",
        "Tailwind CSS",
        "Figma",
        "UI Design",
        "UX",
        "Web Design",
      ],
      fullDescription: "This is a detailed description of Project One.",
    },
    {
      id: "2",
      title: "Oriental Insurance",
      description: "This is a short description of Project Two.",
      image:
        "http://gurusarvankar.com/portfolio/assets/images/OICL/Insuarnce-Details.png",
      techStack: [
        "React",
        "Bootstrap",
        "Figma",
        "UI Design",
        "UX",
        "Web Design",
      ],
      fullDescription: "This is a detailed description of Project Two.",
    },
    {
      id: "3",
      title: "HDFC Motor Insurance",
      description: "This is a short description of Project Three.",
      image:
        "http://gurusarvankar.com/portfolio/assets/images/UT/urbantummyscreens.png",
      techStack: [
        "React",
        "Bootstrap",
        "Design Sprint",
        "Figma",
        "UI Design",
        "UX",
        "Web Design",
      ],
      fullDescription: "This is a detailed description of Project Three.",
    },
  ];

  return (
    <>
      <div className="container mx-auto p-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Blog />
    </>
  );
};

export default Home;

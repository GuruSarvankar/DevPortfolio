// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Mock data for demonstration purposes
const projects = [
  {
    id: "1",
    title: "Project One",
    fullDescription: "This is a detailed description of Project One.",
    images: [
      "http://gurusarvankar.com/portfolio/assets/images/UT/urbantummyscreens.png",
    ],
  },
  {
    id: "2",
    title: "Project Two",
    fullDescription: "This is a detailed description of Project Two.",
    images: [
      "http://gurusarvankar.com/portfolio/assets/images/OICL/Insuarnce-Details.png",
    ],
  },
  {
    id: "3",
    title: "Project Three",
    fullDescription: "This is a detailed description of Project Three.",
    images: [
      "http://gurusarvankar.com/portfolio/assets/images/UT/urbantummyscreens.png",
    ],
  },
];
const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === id);

  /***** code for fetchin json data start */
  // const { id } = useParams();
  // const [project, setProject] = useState(null);

  // useEffect(() => {
  //   // Fetch data from JSON file
  //   fetch("/projectDetails.json")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const project = data.find((project) => project.id === id);
  //       setProject(project);
  //     })
  //     .catch((error) => console.error("Error fetching project data:", error));
  // }, [id]);

  /***** code for fetchin json data End */

  if (!project) {
    return <div className="container mx-auto p-4">Project not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p>{project.fullDescription}</p>
      <div>
        {project.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Screenshot ${index + 1}`}
            className="rounded-md mb-4"
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;

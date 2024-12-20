import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4 flex">
      <div className="w-1/2">
        <img src={project.image} alt={project.title} className="rounded-md" />
      </div>
      <div className="w-1/2 pl-4">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p>{project.description}</p>
        <div className="mt-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md mr-2"
            >
              {tech}
            </span>
          ))}
        </div>
        <Link
          to={`/project/${project.id}`}
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
    fullDescription: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProjectCard;

import './Project.scss';

const Project = ({name, image, description}) => {
    return (
        <article className="Project">
            <img src={require('../../../assets/images/projects' + image).default} alt="screenshot of the project" draggable="false"></img>
            <h1>{name}</h1>
            <p>{description}</p>
        </article>
    );
}

export default Project;
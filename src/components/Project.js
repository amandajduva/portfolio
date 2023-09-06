function Project({ project }) {
    const { name, repo, link, description, image } = project;

    return (
        <div className="p-3">
            <div className="projects">
                <h3>
                    <a href={link}>
                        <img
                            src={require(`../assets/${image}`)}
                            alt={name}
                            className="projectImage"
                        />
                        {name}
                    </a>{' '}
                    <a href={repo}>
                        <i className="fab fa-github"></i>
                    </a>
                </h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Project;
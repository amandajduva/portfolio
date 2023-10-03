import Project from "./Project";

export default function Portfolio() {
    const projects = [
        {
            name: "Minigames",
            description: "An application for users to play minigames using HTML, JavaScript, CSS, Node.js, Express.js, Handlebars.js, MySQL, Sequelize, Anime.js, p5.js, etc.",
            link: "https://mini-games-5df9d3c11dc2.herokuapp.com/",
            repo: "https://github.com/amandajduva/mini-games",
            image: "minigames-screenshot.png",
        },
        {
            name: "Fresh Paws Grooming",
            description: "An application for users to view Fresh Paws' grooming services, their about information, schedule an appointment, and manage their pets.",
            link: "https://freshpawsgrooming-9c1c93deb5e9.herokuapp.com/",
            repo: "https://github.com/jalarcon95/Fresh-Paws",
            image: "fresh_paws_services.png",
        },
        {
            name: "Tech Blog",
            description: "A CMS-style blog site, where developers can publish their blog posts and comment on other developers’ posts. Follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.",
            link: "https://desolate-forest-87014-6a91b6febab4.herokuapp.com/",
            repo: "https://github.com/amandajduva/tech-blog",
            image: "tech-blog-screenshot.png",
        },
        {
            name: "PWA Text Editor",
            description: "A single-page application that meets the PWA criteria, features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser, and functions offline.",
            link: "https://tranquil-lowlands-99396-4be35229cb51.herokuapp.com/",
            repo: "https://github.com/amandajduva/pwa-text-editor",
            image: "jate-screenshot.png",
        },
        {
            name: "Note Taker",
            description: "A note taker that can be used to write and save notes using Express.js.",
            link: "https://young-beach-27029-886e8f5a65a5.herokuapp.com/",
            repo: "https://github.com/amandajduva/note-taker",
            image: "note-taker.png",
        },
        {
            name: "Weather Dashboard",
            description: "A weather dashboard for users to search and view the current and five-day weather forecast for a city.",
            link: "https://amandajduva.github.io/weather-dashboard/",
            repo: "https://github.com/amandajduva/weather-dashboard",
            image: "weather-dashboard-screenshot.png",
        },
    ];

    return (
        <div>
            <div className="d-flex flex-wrap justify-content-center">
                {projects.map((project) => (
                    <Project project={project} key={"project=" + project.name} />
                ))}
            </div>
        </div>
    );
}
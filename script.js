const projectsArray = [
  {
    title: "Spring Boot",
    text: "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.",
    img: "https://spring.io/images/projects/spring-boot-7f2e24fb962501672cc91ccd285ed2ba.svg",
  },
  {
    title: "Spring Framework",
    text: "Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.",
    img: "https://spring.io/images/projects/spring-framework-640ad1b04f7efa89e0f0f7353e6b5e02.svg?v=2",
  },
  {
    title: "Spring Data",
    text: "Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.",
    img: "https://spring.io/images/projects/spring-data-79cc203ed8c54191215a60f9e5dc638f.svg",
  },
  {
    title: "Spring Cloud",
    text: "Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.",
    img: "https://spring.io/images/projects/spring-cloud-81fe04ab129ab99da0e7c7115bb09920.svg",
  },
  {
    title: "Spring Cloud Data Flow",
    text: "Provides an orchestration service for composable data microservice applications on modern runtimes.",
    img: "https://spring.io/images/projects/spring-data-flow-9eb1733b76b6cd62cbdd9bc9a2b04e56.svg",
  },
  {
    title: "Spring Security",
    text: "Protects your application with comprehensive and extensible authentication and authorization support.",
    img: "https://spring.io/images/projects/spring-security-b712a4cdb778e72eb28b8c55ec39dbd1.svg",
  },
];

const projectsContainer = document.querySelector("#main_container");

const createProject = (project) => {
  const container = document.createElement("a");
  container.classList.add("main_block");
  const img = document.createElement("img");
  img.src = project.img;
  img.classList.add("main_icon");
  const textContainer = document.createElement("div");
  textContainer.classList.add("block_text");
  const title = document.createElement("h3");
  title.innerText = project.title;
  const text = document.createElement("p");
  text.innerText = project.text;
  textContainer.appendChild(title);
  textContainer.appendChild(text);
  container.appendChild(img);
  container.appendChild(textContainer);
  return container;
};

projectsArray.forEach((project) => {
  const projectElement = createProject(project);
  projectsContainer.appendChild(projectElement);
});
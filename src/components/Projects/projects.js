import data from '../../data/data';
import './projects.css';

export const printProjects = (main$$) => {
  const sectProjects = document.createElement('section');
  sectProjects.id = 'projects';
  const titleProjects = document.createElement('h2');
  titleProjects.textContent = "Proyectos"
  const listProjects = document.createElement('ul');
  const projects = data.projetcs
  for (const project of projects) {
    const itemProjects = document.createElement('li');
    const imgProject = document.createElement('img');
    const h3Project = document.createElement('h3');
    const descriptionProject = document.createElement('p');
    const linkProject = document.createElement('a');
    imgProject.src = project.image;
    h3Project.textContent = project.title;
    descriptionProject.textContent = project.description;
    linkProject.href = project.link;
    linkProject.textContent = "Más detalles..."

    listProjects.appendChild(itemProjects);
    itemProjects.appendChild(imgProject);
    itemProjects.appendChild(h3Project);
    itemProjects.appendChild(descriptionProject);
    itemProjects.appendChild(linkProject);
  }

  main$$.appendChild(sectProjects);
  sectProjects.appendChild(titleProjects);
  sectProjects.appendChild(listProjects);
}
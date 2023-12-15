import data from '../../data/data.js';
import './experience.css';

export const printExperiences = (divContent) => {
  const sectExperience = document.createElement('section');
  sectExperience.id = 'experience';
  const secTitle = document.createElement('h2');
  secTitle.textContent = "Experiencia";
  const listExperience = document.createElement('ul');

  const experience = data.workExperience;
  console.log(experience);
  for (const work of experience) {
    const itemExperience = document.createElement('li');
    const date = document.createElement('h3');
    const position = document.createElement('h4');
    const company = document.createElement('h4');
    const description = document.createElement('p');

    date.textContent = work.date;
    position.textContent = work.position;
    company.textContent = work.company;
    description.textContent = work.description;

    itemExperience.appendChild(date);
    itemExperience.appendChild(position);
    itemExperience.appendChild(company);
    itemExperience.appendChild(description);
    listExperience.appendChild(itemExperience);
  }
  divContent.appendChild(sectExperience);
  sectExperience.appendChild(secTitle);
  sectExperience.appendChild(listExperience);

}
import data from "../../data/data";
import './education.css';

export const printEducation = (divContent) => {
  const sectEducation = document.createElement('section');
  sectEducation.id = 'education';
  const secTitle = document.createElement('h2');
  secTitle.textContent = "Educación";
  sectEducation.appendChild(secTitle)
  const listEducation = document.createElement('ul');

  const education = data.education;
  console.log(education);
  education.forEach(element => {
    const itemEducation = document.createElement('li');
    const degree = document.createElement('h3');
    const univ = document.createElement('h4');
    const date = document.createElement('p');
    degree.textContent = element.degree;
    univ.textContent = element.university;
    date.textContent = element.graduationYear;

    itemEducation.appendChild(degree);
    itemEducation.appendChild(univ);
    itemEducation.appendChild(date);
    listEducation.appendChild(itemEducation);
  });
  divContent.appendChild(sectEducation);
  sectEducation.appendChild(listEducation)
}
import { printEducation } from '../Education/education';
import { printExperiences } from '../Experience/experience';
import './changecontainer.css';


const buttonChange = document.createElement('button');
export const printButton = (main$$) => {
  const divChange = document.createElement('div');

  divChange.className = 'change-container';
  buttonChange.id = 'change';
  buttonChange.textContent = 'Experiencia';
  buttonChange.addEventListener('click', () => {

    if (buttonChange.textContent == 'Experiencia') {
      buttonChange.textContent = 'Educacion';
      divContent.innerHTML = "";
      printExperiences(divContent)

    } else {
      buttonChange.textContent = 'Experiencia';
      divContent.innerHTML = "";
      printEducation(divContent)

    };

  });
  main$$.appendChild(divChange);
  divChange.appendChild(buttonChange);
};
const divContent = document.createElement('div');
export const printContent = (main$$) => {

  divContent.innerHTML = "";
  divContent.className = "divContent";
  main$$.appendChild(divContent);

  if (buttonChange.textContent == 'experiencia') {
    printExperiences(divContent)
  } else {
    printEducation(divContent);
  }
}

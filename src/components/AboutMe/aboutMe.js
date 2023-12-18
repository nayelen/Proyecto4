import data from "../../data/data";
import './aboutMe.css';

export const printAboutMe = (main$$) => {
  const sectAboutMe = document.createElement('section');
  sectAboutMe.id = "aboutMe";
  const secTitle = document.createElement('h2');
  secTitle.textContent = 'Sobre Mi';
  const imgMe = document.createElement('img');
  imgMe.src = data.picture;
  imgMe.alt = data.name;
  imgMe.classList = "myImage";
  const pDescription = document.createElement('p');
  pDescription.textContent = data.aboutMe
  const address = document.createElement('p');
  address.textContent = data.address;
  const mail = document.createElement('a');
  mail.textContent = "Contacto"
  mail.href = `mailto:${data.email}`;

  const printSkills = () => {
    const skills = data.skills;
    const skillsList = document.createElement('ul');
    sectAboutMe.appendChild(skillsList);
    for (let i = 0; i < skills.length; i++) {
      const pSkills = document.createElement('li');
      pSkills.className = 'skills';
      pSkills.textContent = skills[i];
      skillsList.appendChild(pSkills);
    }
  }
  sectAboutMe.appendChild(secTitle);
  sectAboutMe.appendChild(imgMe);
  printSkills(sectAboutMe);
  sectAboutMe.appendChild(pDescription);
  sectAboutMe.appendChild(address)
  sectAboutMe.appendChild(mail);
  main$$.appendChild(sectAboutMe);
}
export const addAboutListener = () => {
  const avatar = document.querySelector(".myImage");
  avatar.addEventListener("click", (e) => { e.target.classList.toggle("rotate") })
}
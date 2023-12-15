import data from '../../data/data';
import './header.css';

const arrayEnlaces = [
  {
    url: "#aboutMe",
    texto: "Sobre Mi",
  },
  {
    url: "#education",
    texto: "Educación",
  },
  {
    url: "#experience",
    texto: "Experiencia",
  },
  {
    url: "#projects",
    texto: "Proyectos",
  }
]

export const printHeader = (app$$) => {
  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  const nav = document.createElement('nav');
  const navList = document.createElement('ul');
  h1.textContent = data.name;

  for (const enlace of arrayEnlaces) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = enlace.url;
    a.textContent = enlace.texto;
    li.appendChild(a);
    navList.appendChild(li);
  }
  app$$.append(header);
  header.appendChild(h1);
  header.appendChild(nav);
  nav.appendChild(navList);
}
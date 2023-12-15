import { printAboutMe } from './src/components/AboutMe/aboutMe';
import { printButton, printContent } from './src/components/ChangeContainer/changecontainer';
import { printProjects } from './src/components/Projects/projects';
import { printHeader } from './src/components/Header/header';
import './style.css'
import { printFooter } from './src/components/Footer/footer';
const app$$ = document.querySelector('#app');
printHeader(app$$)
const main$$ = document.createElement('main');
app$$.appendChild(main$$);
printAboutMe(main$$);
printButton(main$$);
printContent(main$$)
printProjects(main$$);
printFooter(main$$)




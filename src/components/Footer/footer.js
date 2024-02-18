import './footer.css';

export const printFooter = (main$$) => {
  const footer = document.createElement('footer');
  const pFooter = document.createElement('p');
  pFooter.textContent = "Creado con 💜 por Nadia Pérez © 2023 "
  footer.appendChild(pFooter);
  main$$.appendChild(footer);
}
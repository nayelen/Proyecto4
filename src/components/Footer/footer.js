import './footer.css';

export const printFooter = (main$$) => {
  const footer = document.createElement('footer');
  const pFooter = document.createElement('p');
  pFooter.textContent = " © Creado por Nadia Pérez"
  footer.appendChild(pFooter);
  main$$.appendChild(footer);
}
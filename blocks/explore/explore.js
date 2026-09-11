export default function decorate(block) {
  const rows = [...block.children];

  const eyebrow = rows[0]?.textContent.trim() || '';
  const heading = rows[1]?.textContent.trim() || '';
  const description = rows[2]?.innerHTML || '';

  const theme = rows[3]?.textContent.trim().toLowerCase() || 'orange';

  block.textContent = '';

  block.classList.add(theme);

  block.innerHTML = `
    <div class="explore-content">
      <div class="explore-eyebrow">${eyebrow}</div>

      <h2>${heading}</h2>

      <div class="explore-description">
        ${description}
      </div>
    </div>
  `;
}
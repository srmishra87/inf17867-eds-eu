export default function decorate(block) {
  const rows = [...block.children];

  const eyebrow = rows[0]?.textContent.trim() || '';
  const heading = rows[1]?.textContent.trim() || '';
  const description = rows[2]?.innerHTML || '';

  const buttonText = rows[3]?.textContent.trim() || '';
  const buttonUrl = rows[4]?.querySelector('a')?.href || '#';

  const theme = rows[5]?.textContent.trim().toLowerCase() || 'orange';

  block.textContent = '';
  block.classList.add(theme);

  block.innerHTML = `
    <div class="explore-content">
      <div class="explore-eyebrow">${eyebrow}</div>

      <h2>${heading}</h2>

      <div class="explore-description">
        ${description}
      </div>

      ${buttonUrl}
        ${buttonText}
      </a>
    </div>
  `;
}
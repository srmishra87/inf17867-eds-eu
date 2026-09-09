export default function decorate(block) {
  const rows = [...block.children];

  const badge = rows[0]?.textContent.trim();
  const heading = rows[1]?.textContent.trim();
  const description = rows[2]?.innerHTML;

  const picture = rows[3]?.querySelector('picture');

  const buttonText = rows[4]?.textContent.trim();
  const buttonUrl = rows[5]?.querySelector('a')?.href || '#';

  const button2Text = rows[6]?.textContent.trim();
  const button2Url = rows[7]?.querySelector('a')?.href || '#';

  block.textContent = '';

  if (picture) {
    block.append(picture);
  }

  const content = document.createElement('div');
  content.className = 'hero-content';

  content.innerHTML = `
    <div class="hero-badge">${badge}</div>

    <h1>${heading}</h1>

    <div class="hero-description">
      ${description}
    </div>

    <div class="hero-actions">
      <a href=${buttonUrl}>${buttonText}</a>
      ${button2Url&&button2Text? `<a href=${button2Url}>${button2Text}</a>`:``}
    </div>
  `;

  block.append(content);
}
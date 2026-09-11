export default function decorate(block) {
  const rows = [...block.children];

  const variant =
    rows[0]?.textContent.trim().toLowerCase() || 'light';

  const heading =
    rows[1]?.textContent.trim() || '';

  const text =
    rows[2]?.innerHTML || '';

  const primaryText =
    rows[3]?.textContent.trim();

  const primaryUrl =
    rows[4]?.querySelector('a')?.getAttribute('href')
    || rows[4]?.textContent.trim();

  const secondaryText =
    rows[5]?.textContent.trim();

  const secondaryUrl =
    rows[6]?.querySelector('a')?.getAttribute('href')
    || rows[6]?.textContent.trim();

  block.textContent = '';

  block.classList.add(`editorial-card-${variant}`);

  const actions = [];

  if (
    primaryText
    && primaryText !== 'btn'
    && primaryText !== '#'
  ) {
    actions.push(`
      <a class="button primary" href="${t}
      </a>
    `);
  }

  if (
    secondaryText
    && secondaryText !== 'btn'
    && secondaryText !== '#'
  ) {
    actions.push(`
      <a class="button secondary" href="${ext}
      </a>
    `);
  }

  block.innerHTML = `
    <div class="editorial-card-content">

      <h2>${heading}</h2>

      <div class="editorial-card-text">
        ${text}
      </div>

      ${
        actions.length
          ? `
            <div class="editorial-card-actions">
              ${actions.join('')}
            </div>
          `
          : ''
      }

    </div>
  `;
}
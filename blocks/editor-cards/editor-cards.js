export default function decorate(block) {
    const rows = [...block.children];

    const variant =
        rows[0]?.textContent.trim().toLowerCase() || 'light';

    const heading =
        rows[1]?.textContent.trim() || '';

    const text =
        rows[2]?.innerHTML || '';

    const primaryButtonText =
        rows[3]?.textContent.trim() || '';

    const primaryButtonUrl =
        rows[4]?.querySelector('a')?.getAttribute('href') || '';

    const secondaryButtonText =
        rows[5]?.textContent.trim() || '';

    const secondaryButtonUrl =
        rows[6]?.querySelector('a')?.getAttribute('href') || '';

    block.textContent = '';

    block.classList.add(`editorial-panel-${variant}`);

    block.innerHTML = `
    <div class="editorial-panel-content">

      <h2>${heading}</h2>

      <div class="editorial-panel-text">
        ${text}
      </div>

      ${primaryButtonText || secondaryButtonText
            ? `
          <div class="editorial-panel-actions">

            ${primaryButtonText
                ? `
                  <a
                                     ${primaryButtonText}
                  </a>
                `
                : ''
            }

            ${secondaryButtonText
                ? `
                  ${secondaryButtonUrl}
                    ${secondaryButtonText}
                  </a>
                `
                : ''
            }

          </div>
        `
            : ''
        }

    </div>
  `;
}

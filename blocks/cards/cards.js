import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const ul = document.createElement('ul');

  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    const body = document.createElement('div');

    body.className = 'cards-card-body';

    moveInstrumentation(row, li);

    while (row.firstElementChild) {
      const child = row.firstElementChild;

      if (
        child.children.length === 1
        && child.querySelector('picture')
      ) {
        child.className = 'cards-card-image';
        li.append(child);
      } else {
        while (child.firstChild) {
          body.append(child.firstChild);
        }

        child.remove();
      }
    }

    body.querySelectorAll('p').forEach((p) => {
      const text = p.textContent.trim().toLowerCase();

      if (
        !text
        || text === 'image'
        || text === 'planning'
        || text === 'destination'
      ) {
        p.remove();
      }
    });

    if (body.children.length) {
      li.append(body);
    }

    ul.append(li);
  });

  ul.querySelectorAll('picture > img').forEach((img) => {
    const optimizedPic = createOptimizedPicture(
      img.src,
      img.alt,
      false,
      [{ width: '750' }],
    );

    moveInstrumentation(
      img,
      optimizedPic.querySelector('img'),
    );

    img.closest('picture').replaceWith(optimizedPic);
  });

  block.replaceChildren(ul);
}

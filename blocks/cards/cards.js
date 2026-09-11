import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const ul = document.createElement('ul');

  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    moveInstrumentation(row, li);

    while (row.firstElementChild) {
      li.append(row.firstElementChild);
    }

    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) {
        div.className = 'cards-card-image';
      } else {
        div.className = 'cards-card-body';
      }
    });
    // planning cards do not contain images
    const hasImage = li.querySelector('.cards-card-image');

    if (hasImage) {
      li.classList.add('cards-destination');
    } else {
      li.classList.add('cards-planning');
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
  const section = block.closest('.section');

  if (section?.classList.contains('dark')) {
    block.classList.add('cards-planning');
  } else {
    block.classList.add('cards-destination');
  }
}

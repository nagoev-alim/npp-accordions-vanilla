import feather from 'feather-icons';

/**
 * @class App
 */
export default class App {
  constructor(root) {
    this.root = root;

    this.root.innerHTML = `
      <div class='column'>
        <h3 class='title'>Accordion</h3>
        <p>${feather.icons.info.toSvg()}Shows the block without closing the previously opened</p>
        <div class='accordion__item accordion__item--first'>
          ${Array.from({ length: 4 }).map(() => `
          <div class='accordion__container' data-container=''>
            <div class='accordion__header' data-header=''>
              <span class='accordion__title h5'>Lorem ipsum dolor sit amet?</span>
              <div class='accordion__icon' data-icon=''>${feather.icons.plus.toSvg()}</div>
            </div>
            <div class='accordion__body' data-body=''>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem minima nesciunt sapiente veniam voluptatem! Consectetur dicta enim laudantium reprehenderit voluptas!</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem minima nesciunt sapiente veniam voluptatem! Consectetur dicta enim laudantium reprehenderit voluptas!</p>
            </div>
          </div>
          `).join('')}
        </div>
      </div>

      <div class='column'>
        <h3 class='title'>Accordion</h3>
        <p>${feather.icons.info.toSvg()}Shows the block by closing the previously opened</p>
        <div class='accordion__item accordion__item--second'>
          ${Array.from({ length: 4 }).map(() => `
          <div class='accordion__container' data-container=''>
            <div class='accordion__header' data-header=''>
              <span class='accordion__title h5'>Lorem ipsum dolor sit amet?</span>
              <div class='accordion__icon' data-icon=''>${feather.icons.plus.toSvg()}</div>
            </div>
            <div class='accordion__body' data-body=''>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem minima nesciunt sapiente veniam voluptatem! Consectetur dicta enim laudantium reprehenderit voluptas!</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem minima nesciunt sapiente veniam voluptatem! Consectetur dicta enim laudantium reprehenderit voluptas!</p>
            </div>
          </div>
          `).join('')}
        </div>
      </div>
    `;

    this.DOM = {
      accordionItems01: document.querySelectorAll('.accordion__item--first [data-container]'),
      accordionItems02: document.querySelectorAll('.accordion__item--second [data-container]'),
    };

    this.DOM.accordionItems01.forEach((el) => el.querySelector('[data-header]').addEventListener('click', this.onAccordionFirst));
    this.DOM.accordionItems02.forEach((el) => el.querySelector('[data-header]').addEventListener('click', this.onAccordionSecond));
  }

  /**
   * @function onAccordionFirst
   * @param target
   */
  onAccordionFirst = ({ target }) => {
    const parent = target.closest('[data-container]');
    const body = parent.querySelector('[data-body]');
    const icon = parent.querySelector('[data-icon]');
    parent.classList.toggle('open');
    body.style.height = parent.classList.contains('open') ? `${body.scrollHeight + 30}px` : `0px`;
    body.style.paddingTop = body.style.paddingBottom = parent.classList.contains('open') ? `15px` : `0px`;
    icon.innerHTML = parent.classList.contains('open') ? feather.icons.minus.toSvg() : feather.icons.plus.toSvg();
  };
  /**
   * @function onAccordionSecond
   * @param target
   */
  onAccordionSecond = ({ target }) => {
    const parent = target.closest('[data-container]');
    const body = parent.querySelector('[data-body]');
    const icon = parent.querySelector('[data-icon]');

    if (parent.classList.contains('open')) {
      parent.classList.remove('open');
      body.style.height = `0px`;
      body.style.paddingTop = body.style.paddingBottom = `0px`;
      icon.innerHTML = feather.icons.plus.toSvg();
    } else {
      this.DOM.accordionItems02.forEach((element, elementIdx) => {
        element.classList.remove('open');
        const body = element.querySelector('[data-body]');
        const icon = element.querySelector('[data-icon]');
        body.style.height = body.style.paddingTop = body.style.paddingBottom = `0px`;
        icon.innerHTML = feather.icons.plus.toSvg();
      });
      parent.classList.add('open');
      body.style.height = `${body.scrollHeight + 30}px`;
      body.style.paddingTop = body.style.paddingBottom = `15px`;
      icon.innerHTML = feather.icons.minus.toSvg();
    }
  };
}

{
  'use strict';

  const navbarSticky = function() {

    /* SOURCE */
    /* https://webgolovolomki.com/en/how-to-add-a-css-class-on-scroll/ */

    let scrollpos = window.scrollY;

    const header = document.querySelector('.navbar');
    const scrollChange = 100;

    const add_class_on_scroll = () => header.classList.add('bg-dark');
    const remove_class_on_scroll = () => header.classList.remove('bg-dark');

    window.addEventListener('scroll', function() { 
      scrollpos = window.scrollY;

      if (scrollpos >= scrollChange) { add_class_on_scroll(); }
      else { remove_class_on_scroll(); }
      
    });
  };

  navbarSticky();

  const highlightsHover = function() {
    const highlightsContainer = document.querySelector('.highlights');
    const highlightsCards = highlightsContainer.querySelectorAll('.card');

    for (const card of highlightsCards) {
      const cardPosition = card.getAttribute('data-position');

      card.addEventListener('mouseenter', (event) => {
        event.preventDefault();

        if (!highlightsContainer.classList.contains(cardPosition)) {
          highlightsContainer.classList.add(cardPosition);
        }
      });

      card.addEventListener('mouseleave', (event) => {
        event.preventDefault();

        if (highlightsContainer.classList.contains(cardPosition)) {
          highlightsContainer.classList.remove(cardPosition);
        }
      });
    }
  };

  highlightsHover();

  const offertHover = () => {
    const offertContainer = document.querySelector('.offert');
    const offertCards = offertContainer.querySelectorAll('.card');

    for (const card of offertCards) {
      const cardPosition = card.getAttribute('data-position');

      card.addEventListener('mouseenter', (event) => {
        event.preventDefault();

        if (!offertContainer.classList.contains(cardPosition)) {
          offertContainer.classList.add(cardPosition);
        }
      });

      card.addEventListener('mouseleave', (event) => {
        event.preventDefault();

        if (offertContainer.classList.contains(cardPosition)) {
          offertContainer.classList.remove(cardPosition);
        }
      });
    }
  };

  offertHover();
}
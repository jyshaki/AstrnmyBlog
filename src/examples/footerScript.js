const carousel = document.querySelector(".carousel");
const firstImg = carousel.querySelectorAll("img")[0];
const arrowIcons = document.querySelectorAll(".wrapper i");
const footerPlanetImages = document.querySelectorAll(".footer-planet-image");

let firstImgWidth = firstImg.clientWidth + 14; //14px margin-left dla img w karuzeli (procz 1st)

//klikniecie strzalki - przesuniecie karuzeli
arrowIcons.forEach(icon => {    
    icon.addEventListener("click", () => {
        const scrollAmount = icon.id == "left" ? -firstImgWidth : firstImgWidth;
        const currentPosition = carousel.scrollLeft;
        const maxScrollPosition = carousel.scrollWidth - carousel.clientWidth;
        if(icon.id == "left" && currentPosition === 0) {
            carousel.scrollLeft = maxScrollPosition;
        } else if (icon.id == "right" && currentPosition == maxScrollPosition) {
            carousel.scrollLeft = 0;
        } else {
            carousel.scrollLeft += scrollAmount;
        }
        // carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    })
});

//img footer - obsluga klikniecia/najechania mysza
footerPlanetImages.forEach(image => {
    const originalSrc = image.src;
    const hoverSrc = image.getAttribute('data-hover-src');
    image.addEventListener('click', () => {
        const url = image.dataset.url;
        window.location.href = url;
    });

    image.addEventListener('mouseover', () => {
        image.setAttribute('src', hoverSrc);
    });

    image.addEventListener('mouseout', () => {
        image.setAttribute('src', originalSrc);
    });
});

const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
  const heading = accordion.querySelector('.accordion-heading');
  const content = accordion.querySelector('.accordion-content');
  const contentWrapper = accordion.querySelector('.accordion-content-wrapper');

  heading.addEventListener('click', () => {
    accordion.classList.toggle('active');

    if (accordion.classList.contains('active')) {
      contentWrapper.style.maxHeight = contentWrapper.scrollHeight + 'px';
    } else {
      contentWrapper.style.maxHeight = '0';
    }
  });
});

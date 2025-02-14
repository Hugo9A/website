function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.style.display = 'none');

  const activePage = document.getElementById(pageId);
  activePage.style.display = 'block';
}

window.onload = () => showPage('home');


const slidesContainer = document.querySelector(".carousel-container");
const slide = document.querySelector(".card");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');

    const activePage = document.getElementById(pageId);
    activePage.style.display = 'block';
}

window.onload = () => showPage('home');


const prev = document.getElementById('prev-btn')
const next = document.getElementById('next-btn')
const list = document.getElementById('carousel-track')
const itemWidth = 150
const padding = 10

prev.addEventListener('click',()=>{
  list.scrollLeft -= (itemWidth + padding)
})
next.addEventListener('click',()=>{
  list.scrollLeft += (itemWidth + padding)
})
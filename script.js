function showPage(pageId) {
    // Hide all sections
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');

    // Show the selected page
    const activePage = document.getElementById(pageId);
    activePage.style.display = 'block';
}

// Initially show the home page
window.onload = () => showPage('home');
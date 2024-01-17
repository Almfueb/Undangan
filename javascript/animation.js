const pages = document.querySelectorAll('.page');

window.addEventListener('scroll', checkPage);

function checkPage(){
    const triggerBottom = window.innerHeight / 5 * 4;

    pages.forEach(page => {
        const pageTop = page.getBoundingClientRect().top;

        if(pageTop < triggerBottom) {
            page.classList.add('show');
        } else {
            page.classList.remove('show');
        }
    });
}

checkPage();
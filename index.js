const banner = document.getElementById('banner');
const div1 = document.getElementById('page1');
const div2 = document.getElementById('page2');
const div3 = document.getElementById('page3');
const item = document.getElementsByClassName('nav-item');

// =====fancy nav thinggy=====
window.onload = item[0].className += " active"

function selectMenuItem(element) {
    for (let i = 0; i < item.length; i++) {
        // item[i].classList.remove('active');
        item[i].className = item[i].className.replace(" active", "");
    }
    element.className += " active";
}
// ==========scroll handler==========
// banner
banner.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        // scrolling down
        event.preventDefault();
        div1.scrollIntoView({behavior: 'smooth'});
        selectMenuItem(item[1]);
    }
})
// div1
div1.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        // scrolling down
        event.preventDefault();
        div2.scrollIntoView({behavior: 'smooth'});
        selectMenuItem(item[2]);
    }
    if (event.deltaY < 0) {
        // scrolling up
        event.preventDefault();
        banner.scrollIntoView({behavior: 'smooth'});
        selectMenuItem(item[0]);
    }
});
// div 2
div2.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        // scrolling down
        event.preventDefault();
        div3.scrollIntoView({behavior: 'smooth'});
        selectMenuItem(item[3]);
   }
    if (event.deltaY < 0) {
        // scrolling up
        event.preventDefault();
        div1.scrollIntoView({behavior: 'smooth'});
        selectMenuItem(item[1]);
    }
});
// div3 
div3.addEventListener('wheel', (event) => {
    if (event.deltaY < 0) {
        // scrolling up
        event.preventDefault();
        div2.scrollIntoView({behavior: 'smooth'});
        selectMenuItem(item[2]);
    }
});
const banner = document.getElementById('banner');
const div1 = document.getElementById('page1');
const div2 = document.getElementById('page2');
const div3 = document.getElementById('page3');

// ==========scrolling handler==========

// banner
banner.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        // scrolling down
        event.preventDefault();
        div1.scrollIntoView({behavior: 'smooth'});
    }
})
// div1
div1.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        // scrolling down
        event.preventDefault();
        div2.scrollIntoView({behavior: 'smooth'});
    }
    if (event.deltaY < 0) {
        event.preventDefault();
        banner.scrollIntoView({behavior: 'smooth'});
    }
});
// div 2
div2.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        // scrolling down
        event.preventDefault();
        div3.scrollIntoView({behavior: 'smooth'});
   }
    if (event.deltaY < 0) {
        // scrolling up
        event.preventDefault();
        div1.scrollIntoView({behavior: 'smooth'});
    }
});
// div3 
div3.addEventListener('wheel', (event) => {
    if (event.deltaY < 0) {
        // scrolling up
        event.preventDefault();
        div2.scrollIntoView({behavior: 'smooth'});
    }
});
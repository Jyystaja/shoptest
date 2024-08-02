let lastScrollTop = 0;
let banner1Page = 1;
const topbar = document.querySelector('.topbar');
const right_arrow = document.getElementById('right_arrow');
const left_arrow = document.getElementById('left_arrow');
const shoes = document.getElementById('shoes');
const pallo1 = document.getElementById('pallo1');
const pallo2 = document.getElementById('pallo2');
const pallo3 = document.getElementById('pallo3');

// Adjust the scroll functionality
window.addEventListener('scroll', () => {
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        topbar.style.top = "-6%"; // Hide the topbar (adjust based on the height of your topbar)
    } else {
        // Scrolling up
        topbar.style.top = "0"; // Show the topbar
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
});

right_arrow.addEventListener('click', function() {
    if (banner1Page < 3) {
        banner1Page += 1;
        setBannerPage();
        console.log('Right Click: Current Page:', banner1Page);
    }
});

left_arrow.addEventListener('click', function() {
    if (banner1Page > 1) {
        banner1Page -= 1;
        setBannerPage();
        console.log('Right Click: Current Page:', banner1Page);
    }
    
});

function setBannerPage() {
    console.log('Setting Banner Page to:', banner1Page);
    switch (banner1Page) {
        case 1:
            shoes.style.left = '36vw';
            pallo1.src = 'pallofull.png';
            pallo2.src = 'palloTyhja.png';
            pallo3.src = 'palloTyhja.png';
            break;
        case 2:
            shoes.style.left = '-39vw';
            pallo1.src = 'palloTyhja.png';
            pallo2.src = 'pallofull.png';
            pallo3.src = 'palloTyhja.png';
            break;
        case 3:
            shoes.style.left = '-118vw';
            pallo1.src = 'palloTyhja.png';
            pallo2.src = 'palloTyhja.png';
            pallo3.src = 'pallofull.png';
            break;
        default:
            console.log('Invalid Page Number');
    }
}

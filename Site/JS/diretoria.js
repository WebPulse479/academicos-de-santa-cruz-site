let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('header');
menuToggle.onclick = function() {
    header.classList.toggle('active');
}

















// let header = document.getElementById('header');
// let navigationHeader = document.getElementById('navigation_header');
// let content = document.getElementById('content');
// let showSidebar = false;

// function toggleSidebar() {
//     showSidebar = !showSidebar;
//     if(showSidebar) {
//         //true
//         navigationHeader.style.marginLeft = '-10vw';
//         navigationHeader.style.animationName = 'showSidebar';
//         content.style.filter = 'blur(2px)';
//     } else {
//         navigationHeader.style.marginLeft = '-100vw';
//         navigationHeader.style.animationName = '';
//         content.style.filter = '';
//     }
// }

// function closeSidebar() {
//     if(showSidebar) {
//         toggleSidebar();
//     }
// }

// window.addEventListener('resize', function(event) {
//     if(this.window.innerWidth > 768 && showSidebar) {
//         toggleSidebar();
//     }
// })


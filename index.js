'use strict'

const buttonEl=document.querySelector('.x-icon')
const sideMenu=document.querySelector('.side-menu')
const menuEl=document.querySelector('.menu-el')
const sectionEl=document.querySelectorAll('.section')
const headerEl=document.querySelector('header')
const header=document.querySelector('.header')
const secSticky=document.querySelector('.section-sticky')
const navLinks=document.querySelector('.nav-links')

const login=document.querySelector('.login')

login.addEventListener('click',function (e) {
    e.preventDefault()
})

// buttonEl.addEventListener('click',function () {
//     sideMenu.classList.add('hidden')
//     console.log('button clicked')
// })

// menuEl.addEventListener('click',function () {
//     sideMenu.classList.remove('hidden')
//   //  console.log('clicked')
// // })

const navHeight=header.getBoundingClientRect()
console.log(navHeight)
function headCall(entries,observer) {
    const[entry]=entries
    console.log(entry);
    if (!entry.isIntersecting) {
        headerEl.classList.add('header')
    }else{
        headerEl.classList.remove('header')
    }
        
};

const headOPt={
    root:null,
    threshold:0,
    //rootmargin:'19px'
};
const secObserver=new IntersectionObserver(headCall,headOPt)
secObserver.observe(secSticky);
//ANIMATION TO THE NAVS
function navAnime(e,opacity) {
    const link=e.target
    const links=link.closest('.nav-links').querySelectorAll('.nav-link')
    console.log(links)
    links.forEach( function(nav) {

        if (nav!==link) {
            nav.style.opacity=opacity
        }
    });

};
navLinks.addEventListener('mouseover',function (e) {
    navAnime(e,0.3)
});
//navLinks.addEventListener('mouseover',navAnime(e,0.3)

navLinks.addEventListener('mouseout',function (e) {
    navAnime(e,1)
})
//LOGIN PAGE
const logEl=document.querySelector('#log-el')
const overlayPr=document.querySelector('.overlay')
const loginPage=document.querySelector('.direct-div')
const closeForm=document.querySelector('.close-form')
logEl.addEventListener('click',function (e) {
    e.preventDefault()
   console.log(e,'cliked')

    overlayPr.classList.remove('hidden')
    //overlayPr.classList.add('overlay')
    loginPage.classList.remove('hidden')
})
closeForm.addEventListener('click',function (params) {
    overlayPr.classList.add('hidden')
    //overlayPr.classList.add('overlay')
    loginPage.classList.add('hidden')
})
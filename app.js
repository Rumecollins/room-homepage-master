/** mobile menu    ***/
let PrimaryNavigtion = document.querySelector(".Primary-navigtion")
let navToggle = document.getElementById("toggle-icon")
let navList= document.getElementById("nav-list")

let iconHamburger = document.querySelector(".icon-hamburger");
let iconClose = document.querySelector(".icon-close")


navToggle.addEventListener("click", () => {
    PrimaryNavigtion.toggleAttribute("date-overlay")

    let visibility = navList.getAttribute("data-visible");

    if (visibility === "false"){
       navList.setAttribute("data-visible","true");

       iconHamburger.setAttribute("data-visible","false");
       iconClose.setAttribute("data-visible","true");
    
       console.log("");
    } else {
        navList.setAttribute("data-visible","false");

        iconHamburger.setAttribute("data-visible","true");
        iconClose.setAttribute("data-visible","false");

        console.log("");
    }
})





let landingPageBg = document.getElementById("landing-page-bg");
let nextBtn = document.querySelector(".next-btn");
let mobileNextBtn = document.getElementById("mobileNextBtn")
let proviceBtn = document.querySelector(".provice-btn");
let mobileProviceBtn = document.getElementById("mobileProviceBtn")



let h1Array = [
    "Discover innovative ways to decorate",
    "We are available all across the globe",
    "Manufactured with the best materials"
]

let paragraphArray = [
    `We provide unmatched quality, comfort, and style for property owners across the country. 
    Our experts combine form and function in bringing your vision to life. Create a room in your 
    own style with our collection and make your property a reflection of you and what you love.`,

    `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
    store locator. Any questions? Don't hesitate to contact us today.`,
    
    `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
    experience in this industry, we understand what customers want for their home and office.`
]

let images = [
    "./images/desktop-image-hero-1.jpg",
    "./images/desktop-image-hero-2.jpg",
    "./images/desktop-image-hero-3.jpg"
]


let i = 0;

function prov() {
    let h1 = document.querySelector(".h1")
    let paragraph = document.querySelector(".paragraph")
    let slider = document.querySelector(".landing-page-img")

    i --

    if (i < 0 ){
        h1.textContent = h1Array[h1Array.length - 1]
        paragraph.textContent = paragraphArray[h1Array.length - 1]
        slider.src = images[h1Array.length - 1]
        i = h1Array.length - 1
    } else {
        h1.textContent = h1Array[i]
        paragraph.textContent = paragraphArray[i]
        slider.src = images[i]
    }
}

function next(){
    let h1 = document.querySelector(".h1")
    let paragraph = document.querySelector(".paragraph")
    let slider = document.querySelector(".landing-page-img")

    i ++

    if (i >= h1Array.length ){
        h1.textContent = h1Array[0]
        paragraph.textContent = paragraphArray[0]
        slider.src = images[0]
        i = 0
    } else {
        h1.textContent = h1Array[i]
        paragraph.textContent = paragraphArray[i]
        slider.src = images[i]
    }
}

nextBtn.addEventListener("click",function(){
    next()
}); 

mobileNextBtn.addEventListener("click",function(){
    next()
})

proviceBtn.addEventListener("click",function(){
    prov()
});
mobileProviceBtn.addEventListener("click",function () {
    prov()
});

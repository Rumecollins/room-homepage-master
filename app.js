let landingPageBg = document.getElementById("landing-page-bg");
let next = document.querySelector(".next");

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

next.addEventListener("click",function(){
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
});  

let provice = document.querySelector(".provice")

provice.addEventListener("click",function(){
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
});     

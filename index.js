const logo = document.querySelector("#logo");
const content = document.querySelector("#content");
const body = document.querySelector("body");
const crosshair = document.querySelector("#crosshair");
const tagline = document.querySelector("#tagline");

// aim animation runs for the first 2000ms with background gradient change and x-hair color change
setTimeout(() => {
     body.style.animationPlayState = 'running';
     crosshair.style.animation = 'fill-xhair 1000ms ease forwards';
}, 1500);

setTimeout(() => {
    crosshair.style.animationPlayState = 'paused';
},2000);

// this is when the tagline appears 
setTimeout(()=>{
    // TODO : Moving gradient
    tagline.style.animationPlayState = 'running';
},2000);

// tagline pauses
setTimeout(() => {
    tagline.style.animationPlayState = 'paused';
},3400);

// tagline resumes along with the final logo animation
setTimeout(() => {
    logo.style.animationPlayState = 'running'; 
    tagline.style.animationPlayState = 'running';
    // tagline.style.animation = 'final-animation 2000ms ease forwards';
},4000);

// final logo animation pauses @ 5000ms and resumes after 1000ms (time for the col-animation)
setTimeout(() => {
    logo.style.animationPlayState = 'paused';
    content.innerHTML = `
    <div class="wrapper">

        <section id="col-container">
        <button class="cols" onclick="showDiv(this.id)" id="about">
            <h2>About Us</h2>
        </button>
        <button class="cols" onclick="showDiv(this.id)" id="service">
            <h2>Services</h2>
        </button>
        <button class="cols" onclick="showDiv(this.id)" id="contact">
            <h2>Contact Us</h2>
        </button>
        </section>
        <!-- <button type="button" id="caller" onclick="modalshow(this.id)">Modal</button> -->
    </div>
    `;
}, 5000);

// final logo animation resumes after 1000 ms
setTimeout(() => {
    const col = document.querySelectorAll("#col-container button");
    for(let i = 0; i < col.length; i++){
        col[i].style.animation = 'abc';
    }
    logo.style.fill = 'antiquewhite';
    crosshair.style.animationPlayState = 'running';
    logo.style.animationPlayState = 'running';
}, 6000);

function showDiv(btnId){
    const popDiv = document.querySelector("#pop-div");
    popDiv.style = `visibility: visible;`;
    if (btnId == "about"){
    popDiv.style.animation = 'pop-div-left 500ms ease forwards';
    popDiv.innerHTML = `
    
        <button onclick="getBack()">get back</button>
    `;
    }
    else if (btnId == "service"){
    popDiv.style.animation = 'pop-div-center 500ms ease forwards';
    popDiv.innerHTML = `
    
        <button onclick="getBack()">get back</button>
    `;
    }
    else if (btnId == "contact"){
        popDiv.style.animation = 'pop-div-right 500ms ease forwards';
        popDiv.innerHTML = `
        
        <button onclick="getBack()">get back</button>
    `;
    }
}

function getBack(){
    const popDiv = document.querySelector("#pop-div");
    popDiv.style = `visibility: hidden;`;
    popDiv.innerHTML = null;
}
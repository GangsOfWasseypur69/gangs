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
    <h2 class="section-head">About Us</h2>
    <section id='card-wrapper'>
        <div class="card">
            <h3 id='card-head'>Aishwarya Funaguskar</h3>
            <div id='card-img'>Image</div>
            <p id='card-text'>
                Age: 19<br>
                Tech Stack: HTML, CSS, PHP, XAMPP
            </p>
        </div>

        <div class="card">
            <h3 id='card-head'>Aru Gupta</h3>
            <div id='card-img'>Image</div>
            <p id='card-text'>
                Age: 22<br>
                Tech Stack: HTML, CSS, JS, React, Node
            </p>
        </div>

        <div class="card">
            <h3 id='card-head'>Ishaan Pandita</h3>
            <div id='card-img'>Image</div>
            <p id='card-text'>
                Age: 19<br>
                Tech Stack: HTML, CSS, Python
            </p>
        </div>

        <div class="card">
            <h3 id='card-head'>Murriel Rodrigues</h3>
            <div id='card-img'>Image</div>
            <p id='card-text'>
                Age: 19<br>
                Tech Stack: HTML, CSS, JS
            </p>
        </div>
        
        <div class="card">
            <h3 id='card-head'>Rahul Pathak</h3>
            <div id='card-img'>Image</div>
            <p id='card-text'>
                Age: 19<br>
                Tech Stack: HTML, CSS, JS, Solidity
            </p>
        </div>
        
        <div class="card">
            <h3 id='card-head'>Vidyadhar Reddy</h3>
            <div id='card-img'>Image</div>
            <p id='card-text'>
                Age: 19<br>
                Tech Stack: HTML, CSS, JS, React, Node
            </p>
        </div>
    </section>
        <button onclick="getBack()">get back</button>
    `;
    }
    else if (btnId == "service"){
    popDiv.style.animation = 'pop-div-center 500ms ease forwards';
    popDiv.innerHTML = `
    <h2 class="section-head">Services We Provide</h2>
    <section id='card-wrapper'>
        <div class="card">
            <h3 id='card-head'>Enterprise</h3>
            <div id='card-img'>Image</div>
            <p id='card-text'>
                All our tech services, on a professional level for your whole business. From setting up websites to
                processing your data, all in one spot, all by the same gang.
            </p>
        </div>
        
        <div class="card">
            <h3 id='card-head'>Individual</h3>
            <div id='card-img'>Image</div>
            <p id='card-text'>
                Tech Support at its best, and tuned to perfection as per your individual needs!
            </p>
        </div>
    </section>
        <button onclick="getBack()">get back</button>
    `;
    }
    else if (btnId == "contact"){
        popDiv.style.animation = 'pop-div-right 500ms ease forwards';
        popDiv.innerHTML = `
        <h2 class="section-head">Get in touch!</h2>
    <form action="insert.php" method="POST">
        <section id="formbox">
            <div class="answer">
                <input type="text" name="name" required placeholder="Enter Your Name">
            </div>
            <div class="answer">
                <input type="email" name="email" required placeholder="Enter Your Email">
            </div>
            <div class="answer">
                <textarea name="feedback" placeholder="Let us know your thoughts!" style="width:200px; height: 100px;"></textarea>
            </div>
        </section>
        <input id="sub_button" type="submit" value="Submit" name="submit">
    </form>
        <button onclick="getBack()">get back</button>
    `;
    }
}

function getBack(){
    const popDiv = document.querySelector("#pop-div");
    popDiv.style = `visibility: hidden;`;
    popDiv.innerHTML = null;
}
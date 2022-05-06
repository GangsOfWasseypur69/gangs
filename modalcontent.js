function modalshow(caller)
{
    let modal_id = 'Modal';
    if(caller == 'about')
    {
        document.querySelector('#modal-subhead').innerText = 'About Us';
        document.querySelector('#modal-text').innerHTML = `
        <section id='card-wrapper'>
        <a href="his-site.com" class="card">
        <h3 id='card-head'>Aishwarya Funaguskar</h3>
        <div id='card-img'>Image</div>
        <p id='card-text'>
        Age: 19<br>
        Tech Stack: HTML, CSS, PHP, XAMPP
        </p>
    </a>
    
    <a href="his-site.com" class="card">
        <h3 id='card-head'>Aru Gupta</h3>
        <div id='card-img'>Image</div>
        <p id='card-text'>
        Age: 22<br>
        Tech Stack: HTML, CSS, JS, React, Node
        </p>
    </a>
    
    <a href="his-site.com" class="card">
        <h3 id='card-head'>Ishaan Pandita</h3>
        <div id='card-img'>Image</div>
        <p id='card-text'>
        Age: 19<br>
        Tech Stack: HTML, CSS, Python
        </p>
    </a>
    
    <a href="his-site.com" class="card">
        <h3 id='card-head'>Murriel Rodrigues</h3>
        <div id='card-img'>Image</div>
        <p id='card-text'>
        Age: 19<br>
        Tech Stack: HTML, CSS, JS
        </p>
    </a>
    
    <a href="his-site.com" class="card">
        <h3 id='card-head'>Rahul Pathak</h3>
        <div id='card-img'>Image</div>
        <p id='card-text'>
        Age: 19<br>
        Tech Stack: HTML, CSS, JS, Solidity
        </p>
    </a>
    
    <a href="his-site.com" class="card">
        <h3 id='card-head'>Vidyadhar Reddy</h3>
        <div id='card-img'>Image</div>
        <p id='card-text'>
        Age: 19<br>
        Tech Stack: HTML, CSS, JS, React, Node
        </p>
    </a>
    </section>`;
 
    }
    else if(caller == 'service')
    {
        document.querySelector('#modal-subhead').innerText = 'Services';
        document.querySelector('#modal-text').innerHTML = `
        <section id='card-wrapper'>
        <div class="card">
        <h3 id='card-head'>Enterprise</h3>
        <div id='card-img'>Image</div>
        <p id='card-text'>
        All our tech services, on a professional level for your whole business. From setting up websites to processing your data, all in one spot, all by the same gang.
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
    `;
 
    }
    else if(caller == 'contact')
    {
        document.querySelector('#modal-subhead').innerText = 'Contact Us';
        document.querySelector('#modal-text').innerHTML = `
        <form action="insert.php" method="POST">
        <table>
            <tr>
                <td>Name :</td>
                <td><input type="text" name="name" required></td>
            </tr>
    
            <tr>
                <td>Email :</td>
                <td><input type="email" name="email" required></td>
            </tr>
            <tr>
    
            <tr>
            <tr>
    
            <td>Feedback: </td>
            <td><textarea name="feedback" placeholder="Write something.." style="width:200px;height: 100px; "></textarea>
            </td>
        </tr>
        </table>
        <input id="sub_button" type="submit" value="Submit" name="submit">
    </form>
    `;
 
    }
    $("#"+modal_id).modal({backdrop: true});
}
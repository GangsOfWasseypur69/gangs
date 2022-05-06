const logo = document.querySelector("#logo");
const content = document.querySelector("#content");

// final logo animation (2000 ms) starts after crosshair animations finishes @ 1500ms
setTimeout(() => {
    logo.style.animationPlayState = 'running';
}, 1500);

// final logo animation pauses @ 1000ms (1000 left) to make time for col animation
setTimeout(() => {
    logo.style.animationPlayState = 'paused';
    content.innerHTML = `
    <div class="wrapper">

        <section id="col-container">
        <button class="cols" onclick="modalshow(this.id)" id="about">
            <h2>About Us</h2>
        </button>
        <button class="cols" onclick="modalshow(this.id)" id="service">
            <h2>Services</h2>
        </button>
        <button class="cols" onclick="modalshow(this.id)" id="contact">
            <h2>Contact Us</h2>
        </button>
        </section>
        <!-- <button type="button" id="caller" onclick="modalshow(this.id)">Modal</button> -->

        <div class="modal fade" id="Modal" role="dialog">
            <div class="modal-dialog">

                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Modal Header</h4>
                    </div>
                    <div class="modal-body">
                        <h5 id="modal-subhead">Subhead</h5>
                        <p id="modal-text">Some text in the modal.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
    `;
}, 2500);

// final logo animation resumes after 500 ms
setTimeout(() => {
    const col = document.querySelectorAll("#col-container button");
    for(let i = 0; i < col.length; i++){
        col[i].style.animation = 'abc';
    }
    logo.style.animationPlayState = 'running';
}, 3000);

function modalshow(caller)
{
    let modal_id = 'Modal';
    document.querySelector('.modal-body').innerHTML = `<h3>This came from query</h3><p>this is a list of services we provide</p><ul><li>Item</li><li>Item</li><li>Item</li><li>Item</li><li>Item</li><li>Item</li><li>Item</li></ul><form action="insert.php" method="POST">
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
        <tr>
            <td><input type="submit" value="Submit" name="submit"></td>
        </tr>
    </table>
</form>`;
    document.querySelector(".modal-title").innerText = `${caller} Name`;
    $("#"+modal_id).modal({backdrop: true});
}
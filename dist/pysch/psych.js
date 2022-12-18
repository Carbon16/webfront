class yu{
    constructor(uname, nom, email, age, cod) {
        console.log('sucess')
    }
    newUser() {
        if (document.getElementById("con").checked && acez()) {
            fetch("https://api.lgsk.live/reg", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                uname: document.getElementById("uname").value,
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                age: document.getElementById("age").value
            })}).then(response => {
                if (response.status == 201) {
                    alert("Successfully created user! Now please log in.");
                    login();
                } else {
                    alert("Sorry, an error occured. Please try again.");
                }})
        } else {
            alert("You must agree to continue.");
        }
    };
    update() {
        fetch("https://api.lgsk.live/isb/update/" + this.uname + "/" + this.nom + "/" + this.email + "/" + this.age + "/" + this.cod)
        .then(response => {
            if (response.status == 201) {
                alert("Successfully updated user! Now please log in.");
                login();
            } else {
                alert("Sorry, an error occured. Please try again.");
            }
        });
    }
}

var usr = new yu()

function acez(){
    fetch("https://api.lgsk.live/isb/auth/" + document.getElementById("code").value)
    .then(response => {
        if (response.status == 202) {
            return true;
        } else {
            alert("Acess ID is invalid.");
            return false;
        }
})
}


function auth() {
    fetch("https://api.lgsk.live/isb/auth/" + document.getElementById("uname").value + document.getElementById("pwd").value)
    .then(response => {
        if (response.status == 202) {
            document.cookie = "uname=" + document.getElementById("uanem").value;
            document.cookie = "pwd=" + document.getElementById("pwd").value;
            instructor();
        } else {
            alert("INVALID! Have you created an account?");
}})};

function reg() {
    //dregister new account
    document.getElementById("root").innerHTML = `
    <div class="container">
        <h1>Create Login</h1>
        <h2>Before we start, please provide some details.</h2>
        <form>
            <label for="uname">Username</label><br>
            <input type="text" required="required" id="uname" name="tid"><br>
            <label for="psw">Name:</label><br>
            <input type="text" id="name" name="name"><br>
            <label for="psw">email:</label><br>
            <input type="email" id="email" name="email"><br>
            <label for="psw">Age</label><br>
            <input type="number" id="age" name="age"><br>
            <label for="psw">Acess code:</label><br>
            <input type="text" id="code" name="code"><br>
            <label for="">I consent to my information being used as needed to provide the services of this platform, and understand the terms of service.</label><br>
            <input type="checkbox" id="con" name="con"><br><br>
            <button type="button" onclick="usr.newUser()">Continue</button>
        </form>
    </div>
    `;
};

function regi() {
    if (true) {
        alert("You must enter a value!")
    }
}
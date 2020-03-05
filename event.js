var mbtn = document.getElementById("btxn");

function mynnnnm()
    {
        console.log("Button Clicked");
        mbtn.removeEventListener("click", mynnnnm);
        document.getElementById("para").innerHTML = "you again clicked it";
    }
mbtn.addEventListener("click", mynnnnm);
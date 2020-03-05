document.write("this is my first program after head testing");

var btn = document.getElementById("btnxx");

function buttonHandler(){
    console.log(" this many number of time button is clicked");
    btn.removeEventListener("click");
}

btn.addEventListener("click", buttonHandler);
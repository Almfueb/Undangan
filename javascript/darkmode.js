const button = document.querySelector("button");
const msg = document.querySelector("h1");
let clicked = false;

let modecookie = getCookie("mode");

if (modecookie){
    setMode(modecookie);
}

button.addEventListener("click", () =>{
    if (clicked != true){
        setMode("dark");
        clicked = true;
    }else{
        setMode("light");
        clicked = false;
    };
})

function setMode(value){
    if (value == "dark"){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        button.style.backgroundColor = "white";
        button.innerHTML = "☀️";
        button.id = "light";
    } else if (value == "light"){
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        button.style.backgroundColor = "black";
        button.innerHTML = "🌙";
        button.id = "dark";
    }

    setCookie("mode", value, 1);
}

function getCookie(name){
    const cookieDecoded = decodeURIComponent(document.cookie);
    const cookieArr = cookieDecoded.split("; ");
    let result = null;

    cookieArr.forEach(element =>{
        if (element.indexOf(name) === 0){
            result = element.substring(name.length + 1);
        }
    })

    return result;
}

function setCookie(name, value, days) {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + expirationDate.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function deleteCookie(name){
    setCookie(name,null,null);
}
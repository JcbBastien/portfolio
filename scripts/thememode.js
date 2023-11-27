if(!localStorage.getItem("theme")){
    localStorage.setItem("theme","dark")
}else{
    if(localStorage.getItem("theme") === "light"){
        document.body.classList.add("light-mode");
    }else{
        localStorage.setItem("theme","dark")
    }
}

try{
    document.getElementById("themebutton").addEventListener("click", (e) => {
        if(localStorage.getItem("theme") === "dark"){

            localStorage.setItem("theme","light")
            document.body.classList.add("light-mode");

        }else{

            localStorage.setItem("theme","dark")
            document.body.classList.remove("light-mode");

        }
    });
}catch(error){};

// Version du style CSS, pour réinitialiser le cache par MAJ du style.
const cssVersion = "1.3"
//
document.getElementById("style").parentElement.innerHTML += `<link rel="stylesheet" href="` + document.getElementById("style").href + `?v=` + cssVersion + `" id="style">`

// Timer d'1s pour eviter un clignotement d'une page blanche.
setTimeout(() => {
    document.getElementById("style").remove()
}, "1000");  
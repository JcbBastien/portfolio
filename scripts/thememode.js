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
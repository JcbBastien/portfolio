document.addEventListener("DOMContentLoaded", function () {
        fetch('data.json').then(function (response) {
            response.json().then(function (data) {
                data.forEach(function afficheAnalogie(resultat) {
                    document.querySelector('#list-analogie').innerHTML += "<section id="+ resultat.id +"><div class=\"container\"><img src=" + resultat.img + " alt=\"\" class=\"img\"><h2>Si j'étais "+resultat.analogie+", je serais...</h2><div class=\"content\"><p class=\"answer\">"+resultat.valeuranalogie+"</p><p class=\"description\">"+resultat.argument+"</p></div></div></section>";
                })
            })
        });

//formulaire
document.querySelector('#sub').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('#vous').innerHTML +="<section><div class=\"container\"><img src=" + document.querySelector("#imganalogie").value + " alt=\"\" class=\"img\"><h2>Si j'étais " + document.querySelector("#analogie").value + ", je serais...</h2><div class=\"content\"><p class=\"answer\">"+ document.querySelector("#valeurAnalogie").value +"</p><p class=\"description\">"+ document.querySelector("#arganalogie").value +"</p></div></div></section>";



//API
    fetch("https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=bastien.jacob&courriel=" + document.querySelector("#mail").value +"&message=Si j'étais " + document.querySelector("#analogie").value + ",je serais" + document.querySelector("#valeurAnalogie").value + "Parce que " + document.querySelector("#arganalogie").value).then(function (response) {
        response.json().then(function (data) {
            if (data.status == "success") {
                document.querySelector("#message").innerHTML = "Votre message a bien été reçu";
            } else {
                document.querySelector("#message").innerHTML = "Problème : votre message n'a pas été reçu";
            }
        })
    })
});
        

});
// Het script mag pas uitgevoerd worden wanneer de pagina geladen is.
document.addEventListener("DOMContentLoaded", function (event) {

    //    variablen maken
    var button = document.querySelector('#button');
    var project = document.querySelector('#project');

    //    toevoegen van de class .hidden aan de #project
    //    Als javascript niet beschikbaar is wordt de content niet verborgen.
    project.classList.add('hidden');

    //    Wanneer er op de button geklikt wordt voeren we een functie uit.
    button.addEventListener("click", function () {

        //        We schakelen de class .hidden in
        //        als button checked is

        if (button.checked = true) {
        //        gaat project weg en kom stage naar voren
            project.classList.remove('hidden');
            stage.classList.add('hidden');
        }
        else {
            project.classList.add('hidden');
        }

    });

});



// Het script mag pas uitgevoerd worden wanneer de pagina geladen is.
document.addEventListener("DOMContentLoaded", function (event) {

    //    variablen maken
    var buttons = document.querySelector('#buttons');
    var stage = document.querySelector('#stage');

    //    We voegen de class .hidden toe aan de #stage met javascript.
    //    Als javascript niet beschikbaar is wordt de content dus niet verborgen.
    stage.classList.add('hidden');

    //    Wanneer er op de button geklikt wordt voeren we een functie uit.
    buttons.addEventListener("click", function () {

        if (buttons.checked = true) {
        //        We schakelen de class .hidden in
            stage.classList.remove('hidden');
            project.classList.add('hidden');
        }
        else {
            stage.classList.add('hidden');
        }

    });


});





function opennav (){


    var nav = document.getElementById('navigation')
    var fim = document.getElementById('fim')

    if( nav.className === "navigation"){
        nav.className += " menujs";
        fim.innerHTML = "&Cross;"
    } else{
        nav.className = "navigation"
        fim.innerHTML = "&#9776;"
    }

}
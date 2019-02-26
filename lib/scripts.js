function home_page() {
    document.getElementById("home-page").style.display = "block";
    document.getElementById("project-page").style.display = "none";
    document.getElementById("contact-page").style.display = "none";
}

function projects_page() {
    document.getElementById("project-page").style.display = "block";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("contact-page").style.display = "none";
}

function contact_page() {
    document.getElementById("contact-page").style.display = "block";
    document.getElementById("project-page").style.display = "none";
    document.getElementById("home-page").style.display = "none";
}

$(document).ready(function(){
    $('.collapsible').collapsible();
});

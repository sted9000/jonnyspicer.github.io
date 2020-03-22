document.addEventListener("DOMContentLoaded", function(event){
    window.addEventListener("scroll", function(event){

        var day = document.querySelector("section.sun");
        var night = document.querySelector("section.moon");

        if (document.body.scrollTop >= day.getBoundingClientRect().top) {
            document.body.classList.add('day');
        } else {
            document.body.classList.remove('day');
        }

        if (document.body.scrollTop >= night.getBoundingClientRect().top){
            document.body.classList.add('night');
        } else {
            document.body.classList.remove('night');
        }
    });
});
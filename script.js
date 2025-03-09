

animate();
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const links = navbar.getElementsByTagName("a");

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const target = document.getElementById(targetId);
        
            target.scrollIntoView({ behavior: "smooth" });
         
        });
    }
});




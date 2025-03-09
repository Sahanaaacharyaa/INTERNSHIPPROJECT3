const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Bubble {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 10 + 5;
        this.speedY = Math.random() * 0.2+ 0.2;
        this.opacity = Math.random() * 0.5 + 0.5;
        this.color = `rgba(173, 216, 230, ${this.opacity})`;
    }

    update() {
        this.y -= this.speedY;
        if (this.y + this.radius < 0) {
            this.y = canvas.height + this.radius;
            this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 20;
        ctx.shadowColor = "rgb(253, 253, 253)";
        ctx.fill();
        ctx.closePath();
    }
}

const bubbles = [
    new Bubble(),
    new Bubble(),
    new Bubble(),
    new Bubble(),
    new Bubble(),
    new Bubble(),
    new Bubble(),
    new Bubble(),
    new Bubble(),
    new Bubble(),
    new Bubble(),
    new Bubble(),
    new Bubble(),
    new Bubble(),
    new Bubble(),
    new Bubble(),
    new Bubble(),
    new Bubble(),
    new Bubble(),
    new Bubble(),
    new Bubble(),
    new Bubble(),
    new Bubble(),
    new Bubble(),
    new Bubble(),
    new Bubble(),
    new Bubble(),
    new Bubble(),
    new Bubble(),
    new Bubble(),
    new Bubble(),
    new Bubble(),
    new Bubble(),
    new Bubble(),
    new Bubble(),
    new Bubble()
];

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bubbles.forEach(bubble => {
        bubble.update();
        bubble.draw();
    });
    requestAnimationFrame(animate);
}

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




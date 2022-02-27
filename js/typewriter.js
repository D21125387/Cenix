var app = document.getElementById('typewriter');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('<span class="title">Developer</span>')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<span class="title">Designer</span>')
    .pauseFor(2500)
    .deleteAll()
    .start();
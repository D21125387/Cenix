var app = document.getElementById('typewriter');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('<span class="text-indigo-300">Developer</span>')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<span class="text-indigo-300">Designer</span>')
    .pauseFor(2500)
    .deleteAll()
    .start();
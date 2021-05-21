let sound = document.getElementById('kickS');
let kick = document.getElementById('kick');

kick.onload = function() {
    sound.play();
        return false;
    
};

let force = document.getElementById('smash');
let fly = document.getElementById('flykick');

function showKick() {
    fly.style.display = 'block';
}

force.onmouseover = showKick;

var DateA = new Date();

console.log(DateA);

var heureA = DateA.getHours();
var minuteA = DateA.getMinutes();
var secondeA = DateA.getSeconds();

var time = secondeA + 60 * minuteA + 3600 * heureA;

function move(){

    time++;
    document.getElementById('seconde').style.transform = 'rotate(' + (time * 6) + 'deg)';
    document.getElementById('minute').style.transform = 'rotate(' + Math.round(time / 10) + 'deg)';
    document.getElementById('heure').style.transform = 'rotate(' + Math.round(time / 120) + 'deg)';
    setTimeout(move, 1000);
}

move();
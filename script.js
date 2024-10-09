let pacman = document.getElementById("pacman");
let pg = document.getElementById("pg")
var hammertime = new Hammer(pg);

let widthPg = pg.clientWidth
let heightPg = pg.clientHeight
console.dir(pg);
let x = 0, y = 0;
console.log(x, y);
let rotation
function movePac(direction) {
    switch (direction) {
        case "gauche":
            if (x > 0) {
                x -= 50;
            }
            rotation = "scaleX(-1)"
            break;
        case "haut":
            if (y > 0) {
                y -= 50;
            }
            rotation = "rotate(-90deg)"
            break
        case "droite":
            if (x < widthPg - 150) {
                x += 50;
            }
            rotation = "rotate(0deg)"
            break
        case "bas":
            if (y < heightPg - 150) {
                y += 50;
            }
            rotation = "rotate(90deg)"
            break
        default:
            break;
    }
    pacman.style.transform = "translateX(" + x + "px) translateY(" + y + "px) " + rotation + "";
}
window.addEventListener("keyup", function (ev) {
    switch (ev.keyCode) {
        case 37:
            movePac("gauche")
            break;
        case 38:
            movePac("haut")
            break
        case 39:
            movePac("droite")
            break;
        case 40:
            movePac("bas")
        default:
            break;
    }
})

hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

hammertime.on("swipeleft swiperight swipeup swipedown", function (ev) {
    switch (ev.type) {
        case "swipeleft":
            movePac("gauche")
            break;
        case "swipeup":
            movePac("haut")
            break;
        case "swiperight":
            movePac("droite")
            break;
        case "swipedown":
            movePac("bas")
            break;

        default:
            break;
    }
});
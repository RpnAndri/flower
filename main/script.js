onload = () =>{
    div = document.querySelector("div.container");
    div.classList.remove("container");
};

intro = document.querySelector("div.intro");
intro.style.display = "block";

flowers = document.querySelector("div.all-flowers");
flowers.style.display = "none";


btn_yes = document.querySelector("button#yes");
btn_no = document.querySelector("button#no");

// Create an Audio object
const audio = new Audio("music.mp3");
audio.loop = true;
audio.volume = 0.5;
function yes() {
    intro.style.display = "none";
    flowers.style.display = "block";
    audio.currentTime = 0;
    audio.play();
}

font_size = 21;
counter = 0;
function no() {
    console.log(btn_yes.style.fontSize);
    btn_yes.style.fontSize = `${font_size*1.2}px`;
    btn_yes.style.width = "fit-content";
    font_size *= 1.2;

    counter += 1;
    switch(counter) {
        case 1:
            alert("HEY WHY NO?!??!");
            break;
        case 2:
            alert("are you serious right neow?");
            break;
        case 3:
            alert("hahaha game is over now");
            break;
        case 4:
            alert("cmon now... wh-whyy? :(");
            break;
        case 5:
            alert("okay... as you wish...");
            break;
        default:
            alert("umalis ka na >:(");
            break;
    }
}
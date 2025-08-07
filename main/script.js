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

p_counter = 0;


header = document.querySelector("h1#header");
paragraph = document.querySelector("p#words");

header_list = [
    "Dear Tati",
    "Dear Tati",
    "Dear Tati",
    "Dear Tati",
    "Dear Tati",
    "Remember",
    "Remember",
    "Remember",
    "Remember to",
    "Remember to",
    "Smile",
    "Tsuki ga kirei desu ne",
    "11:11",
]

paragraph_list = [
    "I know I know, I am a bit late for this... ",
    "But I hope these never-ending flowers make up for it! :)",
    "It has been 2 months of kakulitan",
    "And I got to know you a LOT better during these times",
    "Whenever you view this",
    "Always rememeber",
    "That you have a special place in my heart",
    "I will always be there for you when you need me",
    "Enjoy the rest of your day",
    "Enjoy the rest of your night",
    "Make sure to smile, you look cuter when you do :)",
    "The moon is beautiful isn't it?",
    "Gotcha!",
]

final = document.querySelector("div.finally");
body = document.querySelector("body");

function next() {
    if (p_counter < header_list.length) {
        header.innerHTML = header_list[p_counter];
        paragraph.innerHTML = paragraph_list[p_counter];
        p_counter += 1;
    } else {
        flowers.style.display = "none";
        final.style.display = "flex";
        body.style.display = "block";
        document.body.style.backgroundImage = `
        radial-gradient(ellipse at top, transparent 0%, black),
        radial-gradient(ellipse at bottom, black, rgba(145, 233, 255, 0.2)),
        repeating-linear-gradient(220deg, rgb(0, 0, 0) 0px, rgb(0, 0, 0) 19px, transparent 19px, transparent 22px),
        repeating-linear-gradient(189deg, rgb(0, 0, 0) 0px, rgb(0, 0, 0) 19px, transparent 19px, transparent 22px),
        repeating-linear-gradient(148deg, rgb(0, 0, 0) 0px, rgb(0, 0, 0) 19px, transparent 19px, transparent 22px),
        linear-gradient(90deg, rgb(7, 107, 42), rgb(240, 240, 240))
        `;
        document.body.style.backgroundColor = "black";
        document.body.style.overflow = "auto";
        document.documentElement.style.overflow = "auto";

        document.body.style.height = "100%";
        document.documentElement.style.height = "100%";

    }
}
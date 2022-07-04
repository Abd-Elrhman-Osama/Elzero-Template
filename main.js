// videos section
let els = document.querySelectorAll(".videos .container .info ul li");
let imp = document.getElementById("imp");
els.forEach((e) => {
    e.onclick = () =>{
        if(e.classList.contains("vid1")){
            imp.src = "imgs/videos-01.jpg";
        } else{
            imp.src = "imgs/video-preview.jpg";
        }
    }
});

// progress bars
let ul = document.querySelector(".skills .container ul");

window.addEventListener("scroll", ()=>{
    if(scrollY >= document.querySelector(".skills").offsetTop){
        ul.style.cssText = `--abdo: 80%`;
    }   
})

//event counter 
let times = document.querySelectorAll(".events .container > div:first-child .appointment .time > div > h2");
let seconds = times[3] , minutes = times[2] , hours = times[1], days = times[0];

let counter = setInterval(() => {
    let cur = new Date();
    let ev = new Date(2023, 4, 13);
    let dif = ev - cur;
    days.innerHTML = Math.trunc(dif / (1000 * 60 * 60 * 24));
    hours.innerHTML = Math.trunc(dif % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    minutes.innerHTML = Math.trunc(dif % (1000 * 60 * 60) / (1000 * 60));
    seconds.innerHTML = Math.trunc(dif % (1000 * 60) / (1000));
    if((dif / 1000) === 0){
        clearInterval(counter);
    }
}, 1000);

// increasing on scroll
let numbers = document.querySelectorAll(".stats > .container > .box > h3");
let section = document.getElementById("stats");
let started = false;

window.addEventListener("scroll", () => {
    if(scrollY >= section.offsetTop - 325){
        if(!started){
            numbers.forEach((e) => {
                let increse = setInterval(() => {
                    e.innerHTML++;
                    if(e.innerHTML == e.dataset.goal){
                        clearInterval(increse);
                    }
                }, 5000 / e.dataset.goal);
            });
        }
        started = true;
    }
}); 




window.onload = initialize;

function initialize() {

    let pop_up = document.getElementById('pop-up');
    let pop_up_image = document.getElementById('pop-up-image');
    let colors = ["mate", "kalimba", "fotos", "dibujo", "letra", "pin"];

    colors.forEach((item) => {
        let image = document.getElementById(`${item}`);
        image.addEventListener('click', (event)=> { display(pop_up, pop_up_image, item); });
       
    });

    let close_icon = document.getElementById('close_icon');
    close_icon.addEventListener('click', (event)=> { close_pop_up(pop_up); });
   
}

function close_pop_up (pop_up){
    console.log("trigger");
    pop_up.classList.remove("display");
    console.log("trigger");
}

function display (pop_up, pop_up_image, image){
    pop_up.classList.add("display");
    pop_up_image.style.backgroundImage=`url(${image}.jpg)`;
}
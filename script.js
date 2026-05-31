let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')
let list = container.querySelector('.list')

let index = 0
let firstPosition = 0
let lastPosition  = items.length -1
let number = document.querySelector('.number')

/* ----------------------------------------------------
   FUNÇÃO PARA ATUALIZAR O FUNDO
---------------------------------------------------- */
function updateBackground() {
    let section = document.querySelector("section");
    let activeItem = items[index];
    let bgType = activeItem.getAttribute("data-bg");

    section.classList.remove("bg-porsche", "bg-ferrari", "bg-lamborghini");

    if (bgType === "porsche") {
        section.classList.add("bg-porsche");

        // cores Porsche (cinza/azul)
        document.documentElement.style.setProperty("--accent-color", "#b7d4ff");
        document.documentElement.style.setProperty("--description-color", "#d1dafeff");
        document.documentElement.style.setProperty("--scroll-color", "#b6c5fdff");
    }

    if (bgType === "ferrari") {
        section.classList.add("bg-ferrari");

        // cores Ferrari (vermelho claro)
        document.documentElement.style.setProperty("--accent-color", "#ff9a9a");
        document.documentElement.style.setProperty("--description-color", "#ffcccc");
        document.documentElement.style.setProperty("--scroll-color", "#fe9999ff");
    }

    if (bgType === "lamborghini") {
        section.classList.add("bg-lamborghini");

        // cores Lamborghini (amarelo claro)
        document.documentElement.style.setProperty("--accent-color", "#ffe38a");
        document.documentElement.style.setProperty("--description-color", "#f3ebc0ff");
        document.documentElement.style.setProperty("--scroll-color", "#fbec97ff");
    }
}



/* ----------------------------------------------------
   SLIDER
---------------------------------------------------- */
function updateSlider(){
    container.querySelector('.item.active').classList.remove('active');
    items[index].classList.add('active');

    indicator.querySelector('ul li.active').classList.remove('active');
    dots[index].classList.add('active');

    number.innerHTML = '0' + (index + 1);

    updateBackground(); // MUDA O FUNDO AQUI
}

nextButton.onclick = () => {
    index = index + 1 > lastPosition ? 0 : index + 1;
    updateSlider();
}

prevButton.onclick = () => {
    index = index - 1 < firstPosition ? lastPosition : index - 1;
    updateSlider();
}

/* Ativar background inicial */
updateBackground();

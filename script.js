const containor = document.querySelector(".containor");
const Btn = document.querySelector('.btn');

const maxtemplatebox = 24;
const generatecolor = () => {
    containor.innerHTML = "";
    for (let i = 0; i < maxtemplatebox; i++) {
        let rendom = Math.floor(Math.random() * 0xffffff).toString(15);
        rendom = `#${rendom.padStart(6, '0')}`;

        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = ` <div class="box" style = "background: ${rendom}"></div>
        <span class="value">${rendom}</span>`;

        containor.appendChild(color);
    }
}
generatecolor();
Btn.addEventListener("click", generatecolor);
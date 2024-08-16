
const button = document.querySelector('.todo-button');
const tododata = document.querySelector('.todoAddData');

const todlist = button.addEventListener('click', () => {
    const inputdata = document.querySelector('.inputfield').value;
    tododata.innerHTML = `<p class="removelist"> ${inputdata} </p>`;

    const Removelist = document.querySelector(".removelist");
    Removelist.addEventListener("click", () => {
        Removelist.classList.toggle("textremove");
        Removelist.addEventListener("dblclick", () => {
            ;
            Removelist.remove();
        })

    });


});



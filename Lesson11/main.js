const addButton = document.querySelector('.qosh');
const container = document.querySelector('.container');
const remove = document.querySelector('.delete-btn');


container.addEventListener('click', (e) => {
    e = e.target
    if(e.className == "delete-btn"){
        console.log(e.parentNode.parentNode.parentNode.childNodes)
        e.parentNode.parentNode.parentNode.childNodes[3].remove()
    }
});


function qosh() {
    const newitem = document.createElement('div');
    newitem.innerHTML = container.childNodes[1].innerHTML
    container.appendChild(newitem)
}


function newTask(){
    const inputValue = document.querySelector('input').value;
    console.log(inputValue);
    const box = document.querySelector('.box');
    box.innerHTML = `<div class="textNew" onmouseover="colorInput(this)" onmouseout="deleteColorInput(this)">
    <div class="task" onclick = "checked(this)">
    <input class="inputTask" onclick="stop(event)" type="checkbox" id="check"/>
    <span class="textTask">${inputValue}</span>
    </div>
    <button onclick ="addit(this)" class = "add margin">Изменить</button>
    <button onclick = "deleteTasks(this)" class = "deleteAll margin">Удалить</button>
    </div><br>` + box.innerHTML;
    document.querySelector('input').value = '';
}

function newTaskEnter(event){
    if(event.key === 'Enter'){
        newTask();
    }
    console.log(event.Key);
}

const input = document.querySelector('input');
input.addEventListener('keydown', newTaskEnter);

// const check = document.querySelector('#check');
// check.addEventListener('click', checked);

function checked(element){
    console.log(element);
    if(element.firstChild.checked !== true){
        element.lastChild.classList.add('checkedText');
        element.firstChild.checked = true;
        console.log(element.firstChild.checked);
    }else{
        element.lastChild.classList.remove('checkedText');
        element.firstChild.checked = false;
    }
}

function stop(event){
    event.stopPropagation();
}

function addit(element){
    const newValue = prompt('Измените значение');
    element.parentElement.querySelector('span').textContent = newValue;
    // element.parentElement.firstChild.lastChild.textContent = newValue;
}

function deleteTasks(element){
    element.parentElement.remove();
}

function deleteAll(){
    const box = document.querySelector('.box');
    box.remove();
}

function colorInput(element){
    element.querySelector('.task').classList.add('colorInput');
}

function deleteColorInput(element){
    element.querySelector('.task').classList.remove('colorInput');
}

const input = document.getElementById('texto-tarefa');
const buttonEnviar = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const classeLista = document.getElementsByClassName('list-item');
const botaoApagar = document.querySelector('#apaga-tudo');

function listaDeletar() {
  if (classeLista !== 0) {
    for (let i = 0; i < classeLista.length; i += 1) {
      classeLista[i].style.backgroundColor = 'white';
    }
  }
}

function listaSelecionar() {
  for (let i = 0; i < classeLista.length; i += 1) {
    if (classeLista.length !== 0) {
      classeLista[i].addEventListener('click', () => {
        listaDeletar();
        classeLista[i].style.backgroundColor = 'gray';
      });
    }
  }
}

function finalTarefa() {
  for (let i = 0; i < classeLista.length; i += 1) {
    classeLista[i].addEventListener('dblclick', () => {
      if (classeLista[i].className === 'list-item completed') {
        classeLista[i].classList.remove('completed');
        classeLista[i].style.textDecoration = 'none';
        return;
      }
      classeLista[i].classList.add('completed');
      classeLista[i].style.textDecoration = 'line-through solid black';
    });
  }
}

buttonEnviar.addEventListener('click', () => {
  const inputValue = input.value;
  const listItem = document.createElement('li');
  listItem.className = 'list-item';
  listItem.innerHTML = inputValue;
  input.value = '';

  listaSelecionar();
  finalTarefa();
  list.appendChild(listItem);
  listaSelecionar();
  finalTarefa();
});

function apagarTudo() {
  list.innerHTML = '';
}

botaoApagar.addEventListener('click', apagarTudo);


//finalizado
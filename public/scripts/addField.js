//quando clicar no botão = executar uma ação
//voltado aos eventos
document.querySelector("#add-time")
.addEventListener('click', cloneField)//para criar a ação cria uma função

function cloneField() {
    //qual campo devo duplicar?
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)//node se refere aos elementos HTML
//boolean
//limpar os campos duplicados
  const fields = newFieldContainer.querySelectorAll('input')

  fields.forEach(function(field) {
    field.value = ""
  })
//onde?
  document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
// Variables
const $ = (value) => document.querySelector(`${value}`);

/*
Variables del document
    #email
    #asunto
    #mensaje
*/

evenListener();
function evenListener() {
  document.addEventListener('DOMContentloaded', iniciarApp);
  $('#email').addEventListener('blur', validarFormulario);
  $('#asunto').addEventListener('blur', validarFormulario);
  $('#mensaje').addEventListener('blur', validarFormulario);
}
// funciones
function iniciarApp() {
  $('#enviar').disable = true;
  $('#enviar').classList.add('cursor-not-allowed', 'opacity-50');
}
iniciarApp();

function validarFormulario(e) {
  if (e.target.value.length > 0) console.log('si hay');
  //   else e.target.style.borderBottomColor = 'red';
  else {
    e.target.classList.add('border', 'border-red-500');
    mostrarError('Todos los campos son obligatorios');
  }

  if (e.target.type === 'email') {
    const r = e.target.value.indexOf('@');

    if (r < 0) mostrarError('correo invalido');
  }
}

function mostrarError(msg) {
  const mensajeError = document.createElement('p');
  mensajeError.textContent = `${msg}`;
  mensajeError.classList.add(
    'border',
    'border-red-500',
    'bg-red-100',
    'text-red-500',
    'p-3',
    'mt-5',
    'text-center',
    'error'
  );

  // La propieda querySelectorAll -> los permite utilizar la propiedad lenght y querySelector normal no
  const error = document.querySelectorAll('.error');
  if (error.length === 0) $('#enviar-mail').appendChild(mensajeError);
}

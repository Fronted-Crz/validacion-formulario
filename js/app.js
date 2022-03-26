// Variables
const $ = (value) => document.querySelector(`${value}`);
const pattersEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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
  if (e.target.value.length > 0) {
    // Elimina todos los errores del dom
    const eliminarErrores = $('p.error');
    if (eliminarErrores) {
      eliminarErrores.remove();
    }

    e.target.classList.remove('border', 'border-red-500');
    e.target.classList.add('border', 'border-green-500');
  } else {
    //   else e.target.style.borderBottomColor = 'red';
    e.target.classList.remove('border', 'border-green-500');
    e.target.classList.add('border', 'border-red-500');
    mostrarError('Todos los campos son obligatorios');
  }

  if (e.target.type === 'email') {
    if (pattersEmail.test(e.target.value)) {
      const eliminarErrores = $('p.error');
      if (eliminarErrores) {
        eliminarErrores.remove();
      }

      e.target.classList.remove('border', 'border-red-500');
      e.target.classList.add('border', 'border-green-500');
    } else {
      e.target.classList.remove('border', 'border-green-500');
      e.target.classList.add('border', 'border-red-500');
      mostrarError('El email no es valido');
    }
  }
  const email = $('#email');
  const asunto = $('#asunto');
  const mensaje = $('#mensaje');
  if (
    pattersEmail.test(email.value) &&
    asunto.value !== '' &&
    mensaje.value !== ''
  ) {
    $('#enviar').disable = false;
    $('#enviar').classList.remove('cursor-not-allowed', 'opacity-50');
  } else {
    $('#enviar').disable = true;
    $('#enviar').classList.add('cursor-not-allowed', 'opacity-50');
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

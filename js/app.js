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
  if (e.target.type === 'email') {
    // regex
    const er =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (er.test(e.target.value)) {
      e.target.classList.remove('border', 'border-red-500');
      e.target.classList.add('border', 'border-green-500');
      if ($('p.error')) {
        $('p.error').remove();
      }
    } else {
      e.target.classList.remove('border', 'border-green-500');
      e.target.classList.add('border', 'border-red-500');
      mostrarError('Correo electronico invalido');
    }
  }

  if (e.target.value.length > 0) {
    //   else e.target.style.borderBottomColor = 'red';
    e.target.classList.remove('border', 'border-red-500');
    e.target.classList.add('border', 'border-green-500');
    if ($('p.error')) {
      $('p.error').remove();
    }
  } else {
    e.target.classList.remove('border', 'border-green-500');
    e.target.classList.add('border', 'border-red-500');
    mostrarError('El asunto no es valido');
  }

  const email = $('#email');
  const asunto = $('#asunto');
  const mensaje = $('#mensaje');

  if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
    console.log('pasastes');
    $('#enviar').classList.remove('cursor-not-allowed', 'opacity-50');
    $('#enviar').classList.add('cursor-default', 'opacity-100');
  } else {
    $('#enviar').classList.add('cursor-not-allowed', 'opacity-50');
    $('#enviar').classList.remove('cursor-default', 'opacity-100');
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

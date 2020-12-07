 new Cleave('.telefono', {
     numericOnly: true,
     delimiter: ' ',
     prefix: '+569',
     blocks: [4, 3, 3, 2]
 });


  const formu = document.getElementById("form-registro");
  const nombre = document.getElementById("nombre");
  const telefono = document.getElementById("telefono");
  const direccion = document.getElementById("direccion");
  const correo = document.getElementById("correo");
  const rut = document.getElementById("rut");



  formu.addEventListener('submit', function(e) {
      e.preventDefault();
      validarNombre();
      validarTelefono();
      validarCorreo();
      validarDireccion();
      
  });


  

  

  function validarNombre(){
    const nombreValue = nombre.value.trim(); 
  
    if(nombreValue === '' || nombreValue.length < 2 || !isLetters(nombreValue)){
      nombre.classList.add('is-invalid');
      nombre.classList.remove('is-valid');
    } else {
      nombre.classList.remove('is-invalid');
      nombre.classList.add('is-valid');
    }
  
  }

  function validarTelefono(){
    let telefonoValue = telefono.value.trim(); 
  
    if(telefonoValue === '' || telefonoValue.length < 15){
      telefono.value.replace(' ', '');
      telefono.classList.add('is-invalid');
      telefono.classList.remove('is-valid');
    } else {
      telefono.classList.remove('is-invalid');
      telefono.classList.add('is-valid');
      
    }
  
  }

  function validarDireccion(){
    const direccionValue = direccion.value.trim(); 
  
    if(direccionValue === '' || direccionValue.length < 10 || !isLetters(direccionValue)){
      direccion.classList.add('is-invalid');
      direccion.classList.remove('is-valid');
    } else {
      direccion.classList.remove('is-invalid');
      direccion.classList.add('is-valid');
      
    }
  
  }

  function validarRut(){
    const rutValue = rut.value.trim(); 
  
    if(rutValue === '' || !checkRut(rutValue)){
      rut.classList.add('is-invalid');
      rut.classList.remove('is-valid');
    } else {
      rut.classList.remove('is-invalid');
      rut.classList.add('is-valid');
      
    }
  
  }
  


  function validarCorreo(){
    const correoValue = correo.value.trim();
    
    if(!emailIsValid(correoValue)){
      correo.classList.add('is-invalid');
      correo.classList.remove('is-valid');
    } else {
      correo.classList.remove('is-invalid');
      correo.classList.add('is-valid');
    }
  }

  function emailIsValid (email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function isaNumber(fono){
    return /^[0-9]+$/.test(fono);
  }

  function isLetters(nombre){
    return /^[A-Za-z]+$/.test(nombre);
  }
  
  
  

 // Permitir sólo números en el input
function isNumber(evt) {
  var charCode = evt.which ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode === 75) return false;

  return true;
}

function checkRut(rut) {

  if (rut.value.length <= 1) {
    rut.classList.remove('is-valid');
    rut.classList.add('is-invalid');
    
  }

  // Obtiene el valor ingresado quitando puntos y guión.
  var valor = clean(rut.value);

  // Divide el valor ingresado en dígito verificador y resto del RUT.
  cuerpo = valor.slice(0, -1);
  dv = valor.slice(-1).toUpperCase();

  // Separa con un Guión el cuerpo del dígito verificador.
  rut.value = format(rut.value);

  // Si no cumple con el mínimo ej. (n.nnn.nnn)
  if (cuerpo.length < 7) {
    rut.setCustomValidity("RUT Incompleto");
    rut.classList.remove('is-valid');
    rut.classList.add('is-invalid');
    return false;
  }

  // Calcular Dígito Verificador "Método del Módulo 11"
  suma = 0;
  multiplo = 2;

  // Para cada dígito del Cuerpo
  for (i = 1; i <= cuerpo.length; i++) {
    // Obtener su Producto con el Múltiplo Correspondiente
    index = multiplo * valor.charAt(cuerpo.length - i);

    // Sumar al Contador General
    suma = suma + index;

    // Consolidar Múltiplo dentro del rango [2,7]
    if (multiplo < 7) {
      multiplo = multiplo + 1;
    } else {
      multiplo = 2;
    }
  }

  // Calcular Dígito Verificador en base al Módulo 11
  dvEsperado = 11 - (suma % 11);

  // Casos Especiales (0 y K)
  dv = dv == "K" ? 10 : dv;
  dv = dv == 0 ? 11 : dv;

  // Validar que el Cuerpo coincide con su Dígito Verificador
  if (dvEsperado != dv) {
    rut.setCustomValidity("RUT Inválido");

    rut.classList.remove('is-valid');
    rut.classList.add('is-invalid');

    return false;
  } else {
    rut.setCustomValidity("RUT Válido");

    rut.classList.remove('is-invalid');
    rut.classList.add('is-valid');
    return true;
  }
}

function format (rut) {
  rut = clean(rut)

  var result = rut.slice(-4, -1) + '-' + rut.substr(rut.length - 1)
  for (var i = 4; i < rut.length; i += 3) {
    result = rut.slice(-3 - i, -i) + '.' + result
  }

  return result
}

function clean (rut) {
  return typeof rut === 'string'
    ? rut.replace(/^0+|[^0-9kK]+/g, '').toUpperCase()
    : ''
}








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
  
    if(nombreValue === '' || nombreValue.length < 2){
      nombre.classList.add('is-invalid');
      nombre.classList.remove('is-valid');
    } else {
      nombre.classList.remove('is-invalid');
      nombre.classList.add('is-valid');
    }
  
  }

  function validarTelefono(){
    const telefonoValue = telefono.value.trim(); 
  
    if(telefonoValue === '' || telefonoValue.length < 15){
      telefono.classList.add('is-invalid');
      telefono.classList.remove('is-valid');
    } else {
      telefono.classList.remove('is-invalid');
      telefono.classList.add('is-valid');
      
    }
  
  }

  function validarDireccion(){
    const direccionValue = direccion.value.trim(); 
  
    if(direccionValue === '' || direccionValue.length < 10){
      direccion.classList.add('is-invalid');
      direccion.classList.remove('is-valid');
    } else {
      direccion.classList.remove('is-invalid');
      direccion.classList.add('is-valid');
      
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
  
  









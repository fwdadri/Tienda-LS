////////////////REGISTRO//////////////////////////////////////////////////////////

document.getElementById('registro').addEventListener('submit', function (event){
    //se optiene el form registro
    //se uso un btn submi por eso se scrribio event.preventDefault();
   
       event.preventDefault();
   
       var reCorreo = document.getElementById('correo').value;
       var rePassword = document.getElementById('contrasena').value;    
   
       if (reCorreo == null && rePassword == null) {
           
           alert('complete los espacios vacios')
   
       } if (reCorreo && rePassword) {
   
           var users = JSON.parse(localStorage.getItem('users')) || [];// se le llamo a la key del local storage users tambien//se creo un array llmado users //aun no entiendo porque el [],es sobre algo de maej de excepciones
      
           let userExist = users.some(user => user.correo === reCorreo && user.contrasena === rePassword);// aqui se esta relizando una funcion flecha en un let
           
           if (!userExist) { //si es diferente a ususrio existente
   
               users.push({ correo: reCorreo, password: rePassword });
   
               localStorage.setItem('users', JSON.stringify(users));
   
               alert('usuario registrado exitosamente');
   
               window.location.href = "login.html";
   
           }else{
               alert ('el usuario ya existe')
           }
       }
   })
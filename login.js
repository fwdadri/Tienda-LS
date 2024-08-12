//////////////LOGIN///////////////////////////////////////////////////////////////


document.getElementById('login').addEventListener('submit', function (event){
    //se optiene el form registro
    //se uso un btn submi por eso se scrribio event.preventDefault();
   
       event.preventDefault();
   
       var loCorreo = document.getElementById('correoLo').value;
       var loPassword = document.getElementById('contrasenaLo').value;    
   

       if (loCorreo != '' && loPassword != '') {

           var users = JSON.parse(localStorage.getItem('users')) || [];
           let userExist = users.find((user)=> user.correo === loCorreo );
                      
            if (userExist) { 
            
               if (user.contrasena === loPassword) {

                  alert ('iniciando seccion')
                  window.location.href = "index.html";                 
                
                }else{
                   alert ('correo o contraseña incorrecta')
                }
            }else{
                alert('usuario no existe')
            }
            
        }else {
            alert("complete los campos vacios")
         }

})
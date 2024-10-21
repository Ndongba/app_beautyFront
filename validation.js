document.getElementById('myForm').addEventListener('submit', function(event){
       event.preventDefault();
       let errors = [];
    
       let username = document.getElementById('username').value;
       let email = document.getElementById('email').value;
       let adress = document.getElementById('adress').value;
       let phone = document.getElementById('phone').value;
       let password = document.getElementById('password').value;
       let imagepro = document.getElementById('imagepro').value;
       let registrepro = document.getElementById('registrepro').value;
       let nineapro = document.getElementById('nineapro').value;
       let daypro = document.getElementById('daypro').value;
       let datetime = document.getElementById('datetime').value;
    
       if(username.length < 8 ){
      errors.push('le nom de l\'utilisateur ne doit pas avoir moins de 8 caractères');
       }
    
       let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       if(!emailPattern.test(email)) {
         errors.push('Veuillez entrer un email valide');
       }
    
       if(password.length < 8) {
         errors.push('Le mot de passe doit contenir au moins 8 caractères.');
       }
    
       if(errors.length > 0) {
         document.getElementById('error').innerHTML = errors.join('<br>');
       }else {
         document.getElementById('error').innerHTML = 'Formulaire soumis avec succés';
       }
    });
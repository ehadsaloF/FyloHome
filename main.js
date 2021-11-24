
function valid(){
  
var mail2 = document.getElementById('email').value;
    var mail_message = document.getElementById("mail_valid");  
  var che =  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (che.test(mail2)== true){
      mail_message.innerHTML= '';
    }
    else if(mail2 == ' ' || mail2 == ''){
      mail_message.innerHTML= '';
    }
    else{
        mail_message.innerHTML= 'Please check your mail';
    }
    
}
// document.getElementById("email").addEventListener("keydown", myFunction);

// function myFunction() {
//   document.getElementById("email").style.backgroundColor = "red";
// }

